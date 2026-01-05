
import React, { useState } from 'react';
import Header from './components/Header';
import GrievanceModal from './components/GrievanceModal';
import HumanFundModal from './components/HumanFundModal';
import { CardType, Post, User } from './types';
import { INITIAL_POSTS, POPULAR_POSTS, USERS, CURRENT_USER, Icons } from './constants';

const App: React.FC = () => {
  const [recentPosts, setRecentPosts] = useState<Post[]>(INITIAL_POSTS);
  const [activeTab, setActiveTab] = useState<'recent' | 'popular'>('recent');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHumanFundModalOpen, setIsHumanFundModalOpen] = useState(false);
  const [givingBalance, setGivingBalance] = useState(8);
  const [spendingBalance, setSpendingBalance] = useState(74);

  const posts = activeTab === 'recent' ? recentPosts : POPULAR_POSTS;

  const handlePostGrievance = (data: any) => {
    const newPost: Post = {
      id: Math.random().toString(36).substr(2, 9),
      from: CURRENT_USER,
      to: [{ id: 'random', name: data.target, role: 'Unsuspecting Victim', avatar: `https://picsum.photos/seed/${data.target}/100/100` }],
      type: data.type,
      message: data.note,
      timestamp: 'Just now',
      likes: 0,
      comments: 0,
      meatloafCoins: data.coins
    };
    setRecentPosts([newPost, ...recentPosts]);
    setActiveTab('recent'); // Switch to recent to see the new post
    setGivingBalance(prev => Math.max(0, prev - data.coins));
    setIsModalOpen(false);
  };

  const getCardStyle = (type: CardType) => {
    switch (type) {
      case CardType.AIRING_GRIEVANCE: return 'border-orange-200 bg-orange-50/30';
      case CardType.LOW_BAR_MIRACLE: return 'border-blue-200 bg-blue-50/30';
      case CardType.HIGH_STRENGTH: return 'border-slate-300 bg-slate-100';
      case CardType.FEATS_OF_STRENGTH: return 'border-red-200 bg-red-50/30';
      case CardType.HUMAN_FUND: return 'border-emerald-200 bg-emerald-50/30';
      default: return 'border-slate-200 bg-white';
    }
  };

  const getCardIcon = (type: CardType) => {
    switch (type) {
      case CardType.AIRING_GRIEVANCE: return <Icons.Grievance />;
      case CardType.LOW_BAR_MIRACLE: return <Icons.Miracle />;
      default: return <Icons.Pole />;
    }
  };

  return (
    <div className="min-h-screen pb-12">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
               <div className="p-4 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
                  <h3 className="font-bold text-slate-800">Meatloaf Coins</h3>
               </div>
               <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                       <div className="p-2 bg-blue-600 text-white rounded-lg">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth={2} /></svg>
                       </div>
                       <span className="font-medium text-blue-900">Giving</span>
                    </div>
                    <span className="text-xl font-bold text-blue-600">${givingBalance}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                       <div className="p-2 bg-emerald-600 text-white rounded-lg">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" strokeWidth={2} /></svg>
                       </div>
                       <span className="font-medium text-emerald-900">Spending</span>
                    </div>
                    <span className="text-xl font-bold text-emerald-600">${spendingBalance}</span>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl text-white relative overflow-hidden group">
                     <div className="relative z-10">
                        <p className="text-blue-100 text-xs font-semibold uppercase tracking-wider mb-1">Human Fund Reward</p>
                        <h4 className="text-lg font-bold leading-tight mb-4">Claim your generic certificate!</h4>
                        <button 
                          onClick={() => setIsHumanFundModalOpen(true)}
                          className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-blue-50 active:scale-[0.98] transition-all"
                        >
                          Claim Now
                        </button>
                     </div>
                     <div className="absolute -right-4 -bottom-4 opacity-20 transform group-hover:scale-110 transition-transform duration-500">
                        <Icons.Pole />
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
               <div className="p-4 border-b border-slate-50 flex items-center justify-between">
                  <h3 className="font-bold text-slate-800">Upcoming Grievances</h3>
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" strokeWidth={2} /></svg>
               </div>
               <div className="p-2 space-y-1">
                  {[
                    { 
                      date: 'Jan 09', 
                      name: 'Formal Submission of Grievances (Performance Review Deadline)', 
                      badge: '12 Forms Left' 
                    },
                    { 
                      date: 'Jan 14', 
                      name: 'Mandatory Fun & Culture Sync', 
                      badge: 'Camera ON' 
                    },
                    { 
                      date: 'Jan 20', 
                      name: 'Feats of Strength: The Backlog', 
                      badge: '88 Blockers' 
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col text-sm group cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors border-b border-slate-50 last:border-0">
                       <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">{item.date}</span>
                          <div className="bg-slate-100 px-2 py-0.5 rounded-full text-[10px] font-bold text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors whitespace-nowrap ml-2">
                            {item.badge}
                          </div>
                       </div>
                       <span className="font-bold text-slate-700 leading-snug">{item.name}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-6 space-y-6">
            <div 
              onClick={() => setIsModalOpen(true)}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 cursor-pointer group hover:border-blue-200 transition-all"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v16m8-8H4" strokeWidth={2} /></svg>
                </div>
                <div className="flex-1">
                  <div className="text-lg font-medium text-slate-400">Who do you want to disappoint?</div>
                </div>
                <div className="flex space-x-3">
                   <div className="hidden sm:flex items-center space-x-1 text-slate-400">
                      <Icons.Miracle />
                      <span className="text-sm font-medium">Share Miracle</span>
                   </div>
                   <div className="hidden sm:flex items-center space-x-1 text-slate-400">
                      <Icons.Grievance />
                      <span className="text-sm font-medium">Air Grievance</span>
                   </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 pb-2 border-b border-slate-100">
               <button 
                onClick={() => setActiveTab('recent')}
                className={`font-bold text-sm pb-2 transition-all ${activeTab === 'recent' ? 'text-slate-800 border-b-2 border-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
               >
                 Most Recent
               </button>
               <button 
                onClick={() => setActiveTab('popular')}
                className={`font-bold text-sm pb-2 transition-all ${activeTab === 'popular' ? 'text-slate-800 border-b-2 border-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
               >
                 Popular Grievances
               </button>
            </div>

            <div className="space-y-6">
              {posts.map(post => (
                <div key={post.id} className={`p-6 rounded-2xl border transition-all ${getCardStyle(post.type)}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img src={post.from.avatar} className="w-10 h-10 rounded-full" alt="From" />
                      <div>
                        <div className="text-sm font-bold text-slate-800">
                          {post.from.name.toUpperCase()} <span className="font-normal text-slate-500">recognized</span> {post.to.map(t => t.name.toUpperCase()).join(', ')}
                        </div>
                        <div className="text-xs text-slate-400">by {post.from.name} • {post.timestamp}</div>
                      </div>
                    </div>
                    <div className="text-blue-600 p-2 bg-white rounded-lg shadow-sm border border-blue-100">
                      {getCardIcon(post.type)}
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm mb-4">
                    <p className="text-slate-700 leading-relaxed font-medium italic">"{post.message}"</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center space-x-4 overflow-x-auto">
                      <div className="flex items-center space-x-4 text-slate-400">
                        {/* Reaction: Approved */}
                        <button title="Approved" className="flex items-center space-x-1 hover:text-blue-600 transition-colors group">
                          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" strokeWidth={2} /></svg>
                          <span className="text-xs font-bold whitespace-nowrap">{post.likes} Approved</span>
                        </button>
                        
                        {/* Reaction: No Edits */}
                        <button title="No Edits" className="flex items-center space-x-1 hover:text-red-500 transition-colors group">
                           <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeWidth={2} /></svg>
                           <span className="text-xs font-bold whitespace-nowrap">{post.comments} No Edits</span>
                        </button>

                        {/* Reaction: Scope Creep */}
                        <button title="Scope Creep" className="flex items-center space-x-1 hover:text-orange-500 transition-colors group">
                           <span className="text-lg group-hover:scale-110 transition-transform">😂</span>
                           <span className="text-xs font-bold whitespace-nowrap">Scope Creep</span>
                        </button>
                      </div>
                    </div>
                    {post.meatloafCoins > 0 && (
                      <div className="flex items-center space-x-1 text-emerald-600 font-bold text-sm ml-4">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth={2} /></svg>
                        <span className="whitespace-nowrap">${post.meatloafCoins} meatloaf coins</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
               <div className="p-4 border-b border-slate-50 flex items-center justify-between">
                  <h3 className="font-bold text-slate-800">Action Items</h3>
               </div>
               <div className="p-4 space-y-4">
                  <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-xl">
                     <div className="p-2 bg-white rounded-lg shadow-sm">
                        <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" strokeWidth={2} /></svg>
                     </div>
                     <div className="flex-1">
                        <p className="text-xs font-bold text-slate-800 mb-1">Pole Inspection App</p>
                        <p className="text-[10px] text-slate-500">Scan to download our mandatory grievance tracking tool!</p>
                     </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-blue-50 border border-blue-100 rounded-xl cursor-pointer hover:bg-blue-100 transition-colors" onClick={() => setIsHumanFundModalOpen(true)}>
                     <div className="flex-1">
                        <p className="text-xs font-bold text-blue-900 mb-1">Human Fund Donation Card</p>
                        <p className="text-[10px] text-blue-700">A donation has been made in your name to The Human Fund. Money for People.</p>
                        <button className="mt-2 text-[10px] font-bold bg-blue-600 text-white px-3 py-1 rounded-full uppercase shadow-md shadow-blue-200">Request Card</button>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
               <div className="p-4 border-b border-slate-50">
                  <h3 className="font-bold text-slate-800">Last Disappointed</h3>
               </div>
               <div className="p-4 space-y-6">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase mb-3">Your Victims</p>
                    <div className="space-y-4">
                       {USERS.filter(u => u.id !== 'u1').slice(0, 2).map(user => (
                         <div key={user.id} className="flex items-center justify-between group">
                            <div className="flex items-center space-x-3">
                               <img src={user.avatar} className="w-8 h-8 rounded-full" alt="" />
                               <div>
                                  <p className="text-sm font-bold text-slate-700">{user.name}</p>
                                  <p className="text-[10px] text-slate-400">{user.lastGrievance}</p>
                               </div>
                            </div>
                            <button className="text-slate-200 group-hover:text-blue-600 transition-colors">
                               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v16m8-8H4" strokeWidth={2} /></svg>
                            </button>
                         </div>
                       ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase mb-3">Your Peers and Manager</p>
                    <div className="space-y-4">
                       {USERS.filter(u => u.id !== 'u1').slice(2).map(user => (
                         <div key={user.id} className="flex items-center justify-between group">
                            <div className="flex items-center space-x-3">
                               <img src={user.avatar} className="w-8 h-8 rounded-full" alt="" />
                               <div>
                                  <p className="text-sm font-bold text-slate-700">{user.name}</p>
                                  <p className="text-[10px] text-slate-400">{user.lastGrievance}</p>
                               </div>
                            </div>
                            <button className="text-slate-200 group-hover:text-blue-600 transition-colors">
                               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v16m8-8H4" strokeWidth={2} /></svg>
                            </button>
                         </div>
                       ))}
                    </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </main>

      <GrievanceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handlePostGrievance} 
      />

      <HumanFundModal
        isOpen={isHumanFundModalOpen}
        onClose={() => setIsHumanFundModalOpen(false)}
      />
    </div>
  );
};

export default App;
