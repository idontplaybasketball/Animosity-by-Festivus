
import React from 'react';
import { Icons, CURRENT_USER } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-50 px-4 md:px-8 h-16 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 font-bold text-xl text-slate-800">
          <div className="bg-slate-800 text-white p-1 rounded">
             <Icons.Pole />
          </div>
          <span className="hidden md:block">Animosity</span>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-500">
          <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-5 pt-5">Home</a>
          <a href="#" className="hover:text-slate-800 transition-colors">The Pole Store</a>
          <a href="#" className="hover:text-slate-800 transition-colors">Grievances</a>
          <a href="#" className="hover:text-slate-800 transition-colors">Miracles</a>
          <a href="#" className="hover:text-slate-800 transition-colors">The Human Fund</a>
        </nav>
      </div>

      <div className="flex items-center space-x-4 flex-1 max-w-md mx-8">
        <div className="relative w-full">
          <input 
            type="text" 
            placeholder="Search for problems..." 
            className="w-full bg-slate-100 border-none rounded-full py-2 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden md:flex flex-col items-end">
          <span className="text-sm font-semibold">{CURRENT_USER.name}</span>
          <span className="text-xs text-slate-400">{CURRENT_USER.role}</span>
        </div>
        <img src={CURRENT_USER.avatar} alt="Avatar" className="w-10 h-10 rounded-full border-2 border-slate-200" />
      </div>
    </header>
  );
};

export default Header;
