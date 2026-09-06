import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Phone, Mail, MapPin, MessageSquare, ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/ledEventsData';
import { EventInquiry } from '../types';

interface SmartInquirySectionProps {
  initialService?: string | null;
  initialProject?: string | null;
  onInquirySubmitted?: (inquiry: EventInquiry) => void;
  onSubmitted?: () => void;
}

export const SmartInquirySection: React.FC<SmartInquirySectionProps> = ({
  initialService,
  initialProject,
  onInquirySubmitted,
  onSubmitted,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  // Form Fields
  const [eventType, setEventType] = useState('Concert / Music Festival');
  const [attendance, setAttendance] = useState('2,000 - 10,000');
  const [location, setLocation] = useState('Phnom Penh — Outdoor (Koh Pich / Koh Norea)');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [projectNotes, setProjectNotes] = useState('');
  const [formError, setFormError] = useState('');

  // Pre-select service or note project if passed
  useEffect(() => {
    if (initialService) {
      setSelectedServices((prev) => Array.from(new Set([...prev, initialService])));
    }
    if (initialProject) {
      setProjectNotes(`Reference project interest: ${initialProject}.`);
    }
  }, [initialService, initialProject]);

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleNext = () => {
    setFormError('');
    if (currentStep === 1 && !eventType) {
      setFormError('Please select an event format.');
      return;
    }
    if (currentStep === 3 && selectedServices.length === 0) {
      setFormError('Please select at least one required production service.');
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setFormError('');
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!firstName.trim() || !phone.trim() || !email.trim()) {
      setFormError('Please provide your name, phone number, and email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `LED-INQ-${Math.floor(1000 + Math.random() * 9000)}`;
      const newInquiry: EventInquiry = {
        id: generatedId,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        eventType,
        eventDate: eventDate || 'Date TBD',
        eventLocation: location,
        estimatedAttendance: attendance,
        servicesRequired: selectedServices.length > 0 ? selectedServices : ['Full Event Production'],
        projectDetails: projectNotes.trim() || 'No specific notes provided.',
        createdAt: new Date().toISOString(),
        status: 'New',
      };

      if (onInquirySubmitted) {
        onInquirySubmitted(newInquiry);
      }
      if (onSubmitted) {
        onSubmitted();
      }
      setInquiryId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const resetForm = () => {
    setCurrentStep(1);
    setIsSubmitted(false);
    setFirstName('');
    setLastName('');
    setPhone('');
    setEmail('');
    setProjectNotes('');
  };

  return (
    <section id="contact" className="bg-[#0A0A0A] py-28 border-b border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-8 border-b border-[#1C1C1C]">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#737373] uppercase tracking-widest mb-3">
            <span className="w-2 h-2 bg-white" />
            <span>Consultation & Direct Booking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            Let's Build Something Extraordinary
          </h2>
          <p className="mt-4 text-base text-[#A3A3A3] leading-relaxed">
            Specify your technical specifications or connect directly with our production directors in Phnom Penh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Company Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#111111] border border-[#222222] p-8 space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#737373]">
                Production Headquarters
              </h3>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Open LED Events in Google Maps"
                className="flex items-start gap-4 p-3 -m-3 rounded hover:bg-[#1A1A1A] transition-colors group/addr"
              >
                <MapPin className="w-5 h-5 text-emerald-400 group-hover/addr:text-white shrink-0 mt-1 transition-colors" />
                <div className="text-sm text-[#D4D4D4] leading-relaxed">
                  <span className="font-bold text-white group-hover/addr:text-emerald-400 transition-colors flex items-center gap-1.5">
                    <span>LED Events Cambodia</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/addr:opacity-100" />
                  </span>
                  <span>{COMPANY_INFO.address}</span>
                  <span className="text-[11px] font-mono text-[#888888] group-hover/addr:text-white block mt-1">
                    Click for Google Maps navigation →
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 pt-4 border-t border-[#1C1C1C]">
                <Phone className="w-5 h-5 text-white shrink-0" />
                <div>
                  <div className="text-xs text-[#737373] uppercase font-mono">Hotline (24/7)</div>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-lg font-bold text-white hover:underline"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-[#1C1C1C]">
                <Mail className="w-5 h-5 text-white shrink-0" />
                <div>
                  <div className="text-xs text-[#737373] uppercase font-mono">Direct Email</div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-semibold text-white hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Instant Messaging CTAs (Telegram & WhatsApp) */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#737373] uppercase tracking-wider block">
                Instant Chat with Production Lead
              </span>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={COMPANY_INFO.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#141414] hover:bg-[#1F1F1F] border border-[#262626] text-white flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Telegram</span>
                </a>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#141414] hover:bg-[#1F1F1F] border border-[#262626] text-white flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quality Guarantee Box */}
            <div className="p-6 bg-[#0E0E0E] border border-[#222222]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Standard Production Response</span>
              </div>
              <p className="text-xs text-[#737373] leading-relaxed">
                All inquiries submitted through this portal are assigned a reference ID and reviewed by our engineering directors within 4 business hours.
              </p>
            </div>
          </div>

          {/* Right Column: Smart Interactive Stepper Form */}
          <div className="lg:col-span-7 bg-[#111111] border border-[#2A2A2A] p-6 sm:p-10">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-6"
              >
                <div className="w-16 h-16 bg-white text-black mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
                    Quotation Request Logged
                  </span>
                  <h3 className="text-2xl font-extrabold text-white uppercase tracking-tight mt-1">
                    Thank You, {firstName}!
                  </h3>
                  <div className="mt-3 inline-block px-3 py-1 bg-[#1A1A1A] border border-[#333333] text-xs font-mono text-white">
                    Reference ID: <span className="font-bold">{inquiryId}</span>
                  </div>
                </div>
                <p className="text-sm text-[#A3A3A3] max-w-md mx-auto leading-relaxed">
                  Our technical team has received your project parameters ({eventType}, {location}). We will review equipment availability and contact you at <strong className="text-white">{phone}</strong> or <strong className="text-white">{email}</strong> shortly.
                </p>
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#E5E5E5] transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <div>
                {/* Stepper Progress Indicator */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#222222]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2 py-0.5 bg-white text-black font-bold">
                      Step 0{currentStep} of 04
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      {currentStep === 1 && 'Event Format & Scope'}
                      {currentStep === 2 && 'Scale & Location'}
                      {currentStep === 3 && 'Required Production Services'}
                      {currentStep === 4 && 'Contact & Timing Details'}
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5">
                    {[1, 2, 3, 4].map((s) => (
                      <span
                        key={s}
                        className={`w-5 h-1 ${
                          s <= currentStep ? 'bg-white' : 'bg-[#2E2E2E]'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {formError && (
                  <div className="mb-6 p-3 bg-[#261010] border border-[#661111] text-xs text-[#FFAAAA]">
                    {formError}
                  </div>
                )}

                {/* Step 1: Event Type */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <label className="text-xs font-mono uppercase tracking-widest text-[#737373] block">
                      Select Primary Event Format
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Concert / Music Festival',
                        'Corporate Gala / Summit',
                        'Sports Arena / Kun Khmer',
                        'Brand Launch / Exhibition',
                        'Live TV Broadcast / Show',
                        'Private VIP Gala / Wedding',
                      ].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setEventType(type)}
                          className={`p-4 text-left border transition-colors ${
                            eventType === type
                              ? 'bg-white text-black border-white font-bold'
                              : 'bg-[#141414] text-[#A3A3A3] border-[#262626] hover:border-[#444444] hover:text-white'
                          }`}
                        >
                          <span className="text-xs uppercase tracking-wider">{type}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Scale & Location */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">
                        Estimated Live Attendance
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {['Under 500 Guests', '500 - 2,000 Guests', '2,000 - 10,000 Guests', '10,000+ Stadium Scale'].map((att) => (
                          <button
                            key={att}
                            type="button"
                            onClick={() => setAttendance(att)}
                            className={`p-3 text-left border transition-colors ${
                              attendance === att
                                ? 'bg-white text-black border-white font-bold'
                                : 'bg-[#141414] text-[#A3A3A3] border-[#262626] hover:text-white'
                            }`}
                          >
                            <span className="text-xs uppercase tracking-wider">{att}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">
                        Venue Region in Cambodia
                      </label>
                      <div className="space-y-2">
                        {[
                          'Phnom Penh — Indoor Ballroom / Convention Hall',
                          'Phnom Penh — Outdoor (Koh Pich / Koh Norea / Stadium)',
                          'Siem Reap Province',
                          'Sihanoukville / Coastal Region',
                          'Other Provincial Location',
                        ].map((loc) => (
                          <button
                            key={loc}
                            type="button"
                            onClick={() => setLocation(loc)}
                            className={`w-full p-3 text-left border transition-colors flex items-center justify-between ${
                              location === loc
                                ? 'bg-white text-black border-white font-bold'
                                : 'bg-[#141414] text-[#A3A3A3] border-[#262626] hover:text-white'
                            }`}
                          >
                            <span className="text-xs uppercase tracking-wider">{loc}</span>
                            {location === loc && <CheckCircle2 className="w-4 h-4 text-black shrink-0" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Required Production Services */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-mono uppercase tracking-widest text-[#737373]">
                        Select Required Disciplines (Multi-select)
                      </label>
                      <button
                        type="button"
                        onClick={() => setSelectedServices(SERVICES.map((s) => s.title))}
                        className="text-[11px] text-[#A3A3A3] hover:text-white underline font-mono"
                      >
                        Select All (Turnkey)
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {SERVICES.map((s) => {
                        const isChecked = selectedServices.includes(s.title);
                        return (
                          <div
                            key={s.id}
                            onClick={() => toggleService(s.title)}
                            className={`cursor-pointer p-4 border transition-colors flex items-center justify-between ${
                              isChecked
                                ? 'bg-[#1C1C1C] border-white text-white'
                                : 'bg-[#141414] border-[#262626] text-[#A3A3A3] hover:text-white'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-xs font-mono text-[#737373]">{s.number}</span>
                              <div>
                                <span className="text-xs font-bold uppercase tracking-wider block">
                                  {s.title}
                                </span>
                                <span className="text-[11px] text-[#737373]">{s.titleKm}</span>
                              </div>
                            </div>
                            <div
                              className={`w-5 h-5 border flex items-center justify-center ${
                                isChecked ? 'bg-white border-white text-black' : 'border-[#444444]'
                              }`}
                            >
                              {isChecked && <CheckCircle2 className="w-3.5 h-3.5 fill-black text-white" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Contact Info & Submission */}
                {currentStep === 4 && (
                  <motion.form
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-1.5">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="e.g. Sokha"
                          className="w-full bg-[#141414] border border-[#262626] focus:border-white p-3 text-xs text-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-1.5">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="e.g. Vann"
                          className="w-full bg-[#141414] border border-[#262626] focus:border-white p-3 text-xs text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-1.5">
                          Phone / Telegram Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="012 345 678"
                          className="w-full bg-[#141414] border border-[#262626] focus:border-white p-3 text-xs text-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-1.5">
                          Corporate / Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full bg-[#141414] border border-[#262626] focus:border-white p-3 text-xs text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-1.5">
                        Target Event Date
                      </label>
                      <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full bg-[#141414] border border-[#262626] focus:border-white p-3 text-xs text-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-1.5">
                        Technical Scope & Specific Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={projectNotes}
                        onChange={(e) => setProjectNotes(e.target.value)}
                        placeholder="Detail stage dimensions, LED wall sizes, artist requirements, or setup schedules..."
                        className="w-full bg-[#141414] border border-[#262626] focus:border-white p-3 text-xs text-white focus:outline-none resize-none"
                      />
                    </div>
                  </motion.form>
                )}

                {/* Stepper Navigation Buttons */}
                <div className="mt-8 pt-6 border-t border-[#222222] flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-2.5 border border-[#333333] text-[#A3A3A3] hover:text-white hover:border-white text-xs uppercase font-bold tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <span />
                  )}

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-white text-black hover:bg-[#E5E5E5] px-6 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="bg-white text-black hover:bg-[#E5E5E5] px-8 py-3 text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-colors disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Logging Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit Official Inquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
