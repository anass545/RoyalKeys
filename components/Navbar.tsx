
import React from 'react';
import { CategoryType } from '../types';

interface NavbarProps {
  onCategoryClick: (category: CategoryType) => void;
  onHomeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCategoryClick, onHomeClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#04051a]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={onHomeClick}>
          <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center font-bold text-[#04051a]">RK</div>
          <span className="text-xl font-bold uppercase tracking-tighter">RoyalKeys</span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-2xl relative">
          <input 
            type="text" 
            placeholder="Search keys, games, software..." 
            className="w-full bg-[#0a0c2e] border border-gray-700 rounded-lg py-2 px-4 pr-10 focus:outline-none focus:border-amber-500 transition-colors"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-500">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-300">
            <span>Global | USD $</span>
            <i className="fas fa-chevron-down text-[10px]"></i>
          </div>
          <div className="flex items-center gap-2 text-amber-500">
            <i className="fas fa-shopping-cart"></i>
            <span className="font-semibold">$0.00</span>
          </div>
        </div>
      </div>

      {/* Categories Nav */}
      <nav className="bg-[#0a0c2e]/50 py-2">
        <div className="container mx-auto px-4 flex gap-6 text-sm font-medium text-gray-300 overflow-x-auto scrollbar-hide">
          {Object.values(CategoryType).map((cat) => (
            <button 
              key={cat}
              onClick={() => onCategoryClick(cat)} 
              className="hover:text-amber-500 transition-colors whitespace-nowrap px-1"
            >
              {cat.replace('Latest ', '').replace('Security & ', '')}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
