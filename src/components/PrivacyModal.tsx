import React from 'react';
import { motion } from 'motion/react';
import { X, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/ledEventsData';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="relative z-10 w-full max-w-3xl max-h-[85vh] bg-[#0A0A0A] border border-[#2E2E2E] text-white flex flex-col overflow-hidden shadow-2xl"
      >
        <div className="p-6 bg-[#111111] border-b border-[#222222] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-white" />
            <h3 className="text-lg font-bold uppercase tracking-tight">
              Privacy Policy & Client Data Protection
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#A3A3A3] hover:text-white bg-[#171717] border border-[#262626] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#D4D4D4] leading-relaxed">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-2">
              1. Information Collection & Usage
            </h4>
            <p>
              {COMPANY_INFO.legalName} collects contact and event specification details submitted via our quotation forms solely for evaluating technical requirements, preparing commercial quotations, and executing production services. We never sell, rent, or transfer client event data to third parties.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-2">
              2. Technical Data & On-Site Non-Disclosure
            </h4>
            <p>
              All proprietary brand graphics, keynote presentation files, stage blueprints, and rehearsal schedules entrusted to LED Events are treated with strict confidentiality. Our technical operators operate under standard non-disclosure guidelines.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-2">
              3. Photography & Media Release
            </h4>
            <p>
              LED Events reserves the right to capture architectural staging photography and stage illumination footage for professional archival and portfolio documentation, adhering to venue and promoter agreements.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-2">
              4. Contact for Privacy Inquiries
            </h4>
            <p>
              For questions concerning client data privacy or project media usage, please contact our administrative desk at{' '}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-white underline">
                {COMPANY_INFO.email}
              </a>{' '}
              or call {COMPANY_INFO.phone}.
            </p>
          </div>
        </div>

        <div className="p-4 bg-[#111111] border-t border-[#222222] text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#E5E5E5]"
          >
            Acknowledge & Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};
