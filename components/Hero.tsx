
import React from 'react';
import { CategoryType } from '../types';

interface HeroProps {
  onCategoryClick: (category: CategoryType) => void;
}

const Hero: React.FC<HeroProps> = ({ onCategoryClick }) => {
  const features = [
    { 
      title: 'Software', 
      type: CategoryType.SOFTWARE, 
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000', 
      color: 'from-blue-600/20' 
    },
    { 
      title: 'Subscriptions', 
      type: CategoryType.SUBSCRIPTIONS, 
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000', 
      color: 'from-green-600/20' 
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <div 
            key={i} 
            onClick={() => onCategoryClick(f.type)}
            className="group relative overflow-hidden rounded-2xl aspect-[16/7] cursor-pointer"
          >
            <img 
              src={f.img} 
              alt={f.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${f.color} via-[#04051a]/40 to-transparent flex flex-col justify-end p-8`}>
              <h3 className="text-3xl font-black mb-3 text-white drop-shadow-lg">{f.title}</h3>
              <div className="flex items-center gap-2 text-amber-500 group-hover:gap-4 transition-all duration-300">
                <span className="text-xs font-black uppercase tracking-[0.2em]">View All</span>
                <i className="fas fa-arrow-right text-sm"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
