
import React, { useState } from 'react';
import { CardType } from '../types';
import { USERS as USER_LIST } from '../constants';

interface GrievanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const GrievanceModal: React.FC<GrievanceModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [selectedType, setSelectedType] = useState<CardType>(CardType.AIRING_GRIEVANCE);
  const [targetUser, setTargetUser] = useState('');
  const [note, setNote] = useState('');
  const [coins, setCoins] = useState(0);

  if (!isOpen) return null;

  const cardTemplates = {
    [CardType.AIRING_GRIEVANCE]: {
      title: 'Airing of Grievances',
      desc: 'I got a lot of problems with you people!',
      color: 'bg-orange-50',
      activeBorder: 'border-orange-400',
      activeBg: 'bg-orange-50'
    },
    [CardType.LOW_BAR_MIRACLE]: {
      title: 'Festivus Miracle',
      desc: 'It is a miracle you did the bare minimum.',
      color: 'bg-blue-50',
      activeBorder: 'border-blue-400',
      activeBg: 'bg-blue-50'
    },
    [CardType.HIGH_STRENGTH]: {
      title: 'Strength-to-Weight',
      desc: 'Minimalist. Industrial. Cold.',
      color: 'bg-slate-50',
      activeBorder: 'border-slate-400',
      activeBg: 'bg-slate-100'
    },
    [CardType.FEATS_OF_STRENGTH]: {
      title: 'Feats of Strength',
      desc: 'Stop crying and fight your father.',
      color: 'bg-red-50',
      activeBorder: 'border-red-400',
      activeBg: 'bg-red-50'
    },
    [CardType.HUMAN_FUND]: {
      title: 'The Human Fund',
      desc: 'Money for People.',
      color: 'bg-green-50',
      activeBorder: 'border-green-400',
      activeBg: 'bg-green-50'
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 00-2-2v-7a2 2 0 002-2h3" strokeWidth={2} />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Who do you want to disappoint?</h2>
              <p className="text-slate-500">Enter your team member's name and air your grievance.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <input 
                type="text"
                placeholder="Type a name (e.g. Intern Ian)..."
                className="w-full border-b-2 border-slate-100 py-3 text-lg focus:border-blue-500 outline-none transition-colors text-slate-800"
                value={targetUser}
                onChange={(e) => setTargetUser(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <label className="text-sm font-semibold text-slate-600">Choose a Card Style</label>
                <div className="grid grid-cols-1 gap-2">
                  {Object.entries(cardTemplates).map(([type, info]) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type as CardType)}
                      className={`p-3 text-left rounded-xl border-2 transition-all group ${
                        selectedType === type 
                          ? `${info.activeBorder} ring-2 ring-blue-100 ${info.activeBg}` 
                          : 'border-slate-100 hover:border-slate-200 bg-white'
                      }`}
                    >
                      <div className={`font-bold text-sm ${selectedType === type ? 'text-slate-900' : 'text-slate-700'}`}>
                        {info.title}
                      </div>
                      <div className="text-xs text-slate-500 truncate group-hover:text-slate-600">
                        {info.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4 flex flex-col">
                 <label className="text-sm font-semibold text-slate-600">The Grievance Note</label>
                 <textarea 
                    className="flex-1 w-full p-4 bg-slate-50 rounded-xl resize-none outline-none border-2 border-transparent focus:border-blue-500 transition-all text-sm text-slate-800"
                    placeholder="Write your note here... 'I find tinsel distracting...'"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                 />
                 
                 <div className="bg-blue-50 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                       <button 
                        onClick={() => setCoins(Math.max(0, coins - 1))} 
                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-slate-800 font-black hover:bg-slate-50 active:scale-95 transition-all border border-slate-100"
                       >
                         -
                       </button>
                       <span className="text-xl font-bold text-blue-700 min-w-[2rem] text-center">${coins}</span>
                       <button 
                        onClick={() => setCoins(coins + 1)} 
                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-slate-800 font-black hover:bg-slate-50 active:scale-95 transition-all border border-slate-100"
                       >
                         +
                       </button>
                    </div>
                    <div className="text-xs text-blue-600 font-bold uppercase tracking-tight">Add Meatloaf Coins</div>
                 </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
               <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-wider">Public</span>
               </div>
               <div className="flex space-x-4">
                  <button 
                    onClick={onClose}
                    className="px-6 py-2 text-slate-500 font-semibold hover:text-slate-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => onSubmit({ type: selectedType, target: targetUser, note, coins })}
                    className="px-8 py-2 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
                  >
                    Air it out
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrievanceModal;
