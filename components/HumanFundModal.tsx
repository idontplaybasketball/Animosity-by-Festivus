
import React from 'react';
import { CURRENT_USER } from '../constants';

interface HumanFundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HumanFundModal: React.FC<HumanFundModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
      <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-10 flex flex-col items-center text-center">
          {/* Header */}
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h2 className="text-3xl font-black text-slate-800 mb-2 leading-tight">
            A Donation Has Been Made <br/>in Your Name.
          </h2>
          <p className="text-xl font-medium text-blue-600 mb-6 italic">
            "Money For People. Specifically, Not You."
          </p>

          <div className="text-slate-500 space-y-4 mb-10 text-sm leading-relaxed max-w-md">
            <p>
              In lieu of a holiday bonus, year-end swag, or that subscription to Midjourney you asked for, 
              <strong> Animosity</strong> has made a generous donation to <strong>The Human Fund</strong>.
            </p>
            <p>
              We believe that the gift of "nothing" has a very high strength-to-weight ratio. 
              Please print this certificate and display it on your desk to signal your moral superiority to the UX team.
            </p>
          </div>

          {/* Certificate Visual */}
          <div className="w-full bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-8 mb-8 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-2">
               <div className="text-[10px] font-bold text-slate-300 uppercase rotate-12">Official Copy</div>
            </div>
            
            <div className="space-y-4 relative z-10">
               <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Certificate of Non-Redemption</div>
               
               <div className="grid grid-cols-2 gap-4 text-left border-t border-slate-200 pt-4">
                  <div>
                    <label className="text-[10px] text-slate-400 uppercase font-bold">Recipient</label>
                    <div className="text-lg font-bold text-slate-800">{CURRENT_USER.name}</div>
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 uppercase font-bold">Donation Amount</label>
                    <div className="text-lg font-bold text-blue-600">$0.00 <span className="text-[10px] text-slate-400 font-normal">(Priceless Thought)</span></div>
                  </div>
               </div>

               <div className="text-left">
                  <label className="text-[10px] text-slate-400 uppercase font-bold">Corporate Concept</label>
                  <div className="text-sm font-medium text-slate-700">"Creating Synergistic Philanthropy"</div>
               </div>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute bottom-0 right-0 -mr-8 -mb-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
               <svg className="w-48 h-48" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="11" y="2" width="2" height="20" rx="1" />
               </svg>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col w-full space-y-4">
            <button 
              onClick={onClose}
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download PDF (Low Res)</span>
            </button>
            <button 
              onClick={() => alert("Grievance logged: Gratitude deficit detected. HR will be in touch.")}
              className="text-slate-400 text-xs font-semibold hover:text-slate-600 underline underline-offset-4 decoration-slate-200 transition-colors"
            >
              I would have preferred the cash.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanFundModal;
