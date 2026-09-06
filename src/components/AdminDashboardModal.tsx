import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Shield, Search, Filter, Phone, Mail, Calendar, MapPin, Copy, Check, Lock } from 'lucide-react';
import { EventInquiry } from '../types';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  inquiries: EventInquiry[];
  onUpdateInquiryStatus: (id: string, newStatus: EventInquiry['status']) => void;
}

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({
  isOpen,
  onClose,
  inquiries,
  onUpdateInquiryStatus,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedInquiry, setSelectedInquiry] = useState<EventInquiry | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'admin123' || passwordInput === 'ledevents') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid credentials. (Demo PIN: admin123)');
    }
  };

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesStatus = statusFilter === 'All' || inq.status === statusFilter;
    const matchesSearch =
      inq.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.phone.includes(searchQuery) ||
      inq.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleCopySummary = (inq: EventInquiry) => {
    const summary = `
[LED EVENTS INQUIRY SUMMARY]
ID: ${inq.id}
Client: ${inq.firstName} ${inq.lastName}
Phone: ${inq.phone}
Email: ${inq.email}
Event: ${inq.eventType} (${inq.eventDate})
Venue: ${inq.eventLocation}
Attendance: ${inq.estimatedAttendance}
Services: ${inq.servicesRequired.join(', ')}
Notes: ${inq.projectDetails}
Status: ${inq.status}
    `.trim();

    navigator.clipboard.writeText(summary);
    setCopiedId(inq.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="relative z-10 w-full max-w-6xl max-h-[92vh] bg-[#0A0A0A] border border-[#2E2E2E] shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#111111] border-b border-[#222222] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white text-black font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black uppercase tracking-tight text-white">
                LED Events Operations Console
              </h2>
              <p className="text-xs text-[#737373] font-mono">
                Production Inquiry Desk & Client Lead Management
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#A3A3A3] hover:text-white bg-[#171717] border border-[#262626] hover:bg-[#222222] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {!isAuthenticated ? (
          /* Password Form */
          <div className="p-8 sm:p-16 flex flex-col items-center justify-center text-center max-w-md mx-auto space-y-6">
            <div className="w-12 h-12 bg-[#171717] border border-[#2E2E2E] flex items-center justify-center text-white">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                Staff Authentication Required
              </h3>
              <p className="text-xs text-[#A3A3A3] mt-2">
                Enter your administrative passcode to inspect inquiries and event dispatches.
              </p>
            </div>

            <form onSubmit={handleLogin} className="w-full space-y-4">
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter passcode (default: admin123)"
                className="w-full bg-[#141414] border border-[#333333] focus:border-white p-3 text-sm text-center text-white focus:outline-none"
              />
              {authError && (
                <div className="text-xs text-red-400">{authError}</div>
              )}
              <button
                type="submit"
                className="w-full bg-white text-black py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#E5E5E5] transition-colors cursor-pointer"
              >
                Unlock Operations Console
              </button>
            </form>
          </div>
        ) : (
          /* Admin Dashboard Main View */
          <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
            {/* Left Panel: Inquiry List & Controls */}
            <div className="lg:w-7/12 border-b lg:border-b-0 lg:border-r border-[#222222] flex flex-col overflow-hidden bg-[#0A0A0A]">
              {/* Toolbar */}
              <div className="p-4 border-b border-[#222222] bg-[#0E0E0E] space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Search ID, name, or phone..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#141414] border border-[#262626] focus:border-white px-3 py-2 pl-8 text-xs text-white placeholder-[#737373] focus:outline-none"
                    />
                    <Search className="w-3.5 h-3.5 text-[#737373] absolute left-2.5 top-1/2 -translate-y-1/2" />
                  </div>

                  <div className="flex items-center gap-1 text-xs font-mono text-[#A3A3A3]">
                    <span>Total:</span>
                    <strong className="text-white">{filteredInquiries.length}</strong>
                  </div>
                </div>

                {/* Status Badges */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                  <Filter className="w-3.5 h-3.5 text-[#737373] shrink-0 mr-1" />
                  {['All', 'New', 'In Progress', 'Contacted', 'Completed'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setStatusFilter(st)}
                      className={`px-2.5 py-1 uppercase text-[11px] font-mono border whitespace-nowrap transition-colors ${
                        statusFilter === st
                          ? 'bg-white text-black border-white font-bold'
                          : 'bg-[#141414] text-[#A3A3A3] border-[#222222] hover:text-white'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inquiry Items Scrollable */}
              <div className="flex-1 overflow-y-auto divide-y divide-[#1C1C1C]">
                {filteredInquiries.map((inq) => {
                  const isSelected = selectedInquiry?.id === inq.id;
                  return (
                    <div
                      key={inq.id}
                      onClick={() => setSelectedInquiry(inq)}
                      className={`p-4 cursor-pointer transition-colors ${
                        isSelected ? 'bg-[#171717]' : 'hover:bg-[#111111]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-mono font-bold text-white">
                          {inq.id}
                        </span>
                        <span
                          className={`text-[10px] font-mono uppercase px-2 py-0.5 border ${
                            inq.status === 'New'
                              ? 'bg-white text-black border-white font-bold'
                              : inq.status === 'In Progress'
                              ? 'bg-[#1E1A0F] text-[#F3C86A] border-[#4A3D18]'
                              : 'bg-[#141414] text-[#A3A3A3] border-[#2E2E2E]'
                          }`}
                        >
                          {inq.status}
                        </span>
                      </div>

                      <div className="text-sm font-bold text-white">
                        {inq.firstName} {inq.lastName}
                      </div>

                      <div className="text-xs text-[#A3A3A3] mt-1 line-clamp-1">
                        {inq.eventType} • {inq.eventLocation}
                      </div>

                      <div className="text-[11px] font-mono text-[#737373] mt-2 flex items-center justify-between">
                        <span>{inq.phone}</span>
                        <span>{new Date(inq.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  );
                })}

                {filteredInquiries.length === 0 && (
                  <div className="p-8 text-center text-xs text-[#737373] font-mono">
                    No matching inquiries found.
                  </div>
                )}
              </div>
            </div>

            {/* Right Panel: Selected Inquiry Detail View */}
            <div className="lg:w-5/12 p-6 sm:p-8 bg-[#0D0D0D] overflow-y-auto space-y-6">
              {selectedInquiry ? (
                <>
                  <div className="flex items-start justify-between pb-4 border-b border-[#222222]">
                    <div>
                      <span className="text-xs font-mono text-[#737373]">Inquiry Dossier</span>
                      <h3 className="text-xl font-bold uppercase text-white tracking-tight">
                        {selectedInquiry.firstName} {selectedInquiry.lastName}
                      </h3>
                      <span className="text-xs font-mono text-[#A3A3A3]">{selectedInquiry.id}</span>
                    </div>

                    <button
                      onClick={() => handleCopySummary(selectedInquiry)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#171717] border border-[#2E2E2E] hover:border-white text-xs text-[#D4D4D4] font-mono transition-colors"
                    >
                      {copiedId === selectedInquiry.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Status Management */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-[#737373] block">
                      Update Operational Status
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(['New', 'In Progress', 'Contacted', 'Completed'] as const).map((st) => (
                        <button
                          key={st}
                          onClick={() => onUpdateInquiryStatus(selectedInquiry.id, st)}
                          className={`p-2 text-xs font-mono uppercase border transition-colors ${
                            selectedInquiry.status === st
                              ? 'bg-white text-black border-white font-bold'
                              : 'bg-[#141414] text-[#737373] border-[#262626] hover:text-white'
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact Chips */}
                  <div className="space-y-3 p-4 bg-[#141414] border border-[#222222]">
                    <div className="flex items-center gap-2 text-xs">
                      <Phone className="w-4 h-4 text-[#A3A3A3] shrink-0" />
                      <a href={`tel:${selectedInquiry.phone}`} className="text-white hover:underline font-mono">
                        {selectedInquiry.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Mail className="w-4 h-4 text-[#A3A3A3] shrink-0" />
                      <a href={`mailto:${selectedInquiry.email}`} className="text-white hover:underline">
                        {selectedInquiry.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Calendar className="w-4 h-4 text-[#A3A3A3] shrink-0" />
                      <span className="text-[#D4D4D4]">Target Date: {selectedInquiry.eventDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <MapPin className="w-4 h-4 text-[#A3A3A3] shrink-0" />
                      <span className="text-[#D4D4D4]">{selectedInquiry.eventLocation}</span>
                    </div>
                  </div>

                  {/* Required Services */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
                      Requested Production Services
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedInquiry.servicesRequired.map((srv, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-[#1A1A1A] border border-[#2E2E2E] text-xs font-mono text-white"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Client Notes */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
                      Client Technical Notes
                    </span>
                    <div className="p-4 bg-[#141414] border border-[#222222] text-xs text-[#D4D4D4] leading-relaxed">
                      {selectedInquiry.projectDetails}
                    </div>
                  </div>
                </>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 text-[#737373]">
                  <p className="text-xs font-mono uppercase tracking-wider">
                    Select an inquiry from the list to review details and update status.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
