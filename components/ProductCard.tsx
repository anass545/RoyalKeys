
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      onClick={() => onClick?.(product)}
      className="bg-[#0a0c2e] rounded-xl overflow-hidden flex flex-col group h-full cursor-pointer transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(4,5,26,0.8)] border border-gray-800/50 hover:border-amber-500/30"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {product.badge && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm font-medium line-clamp-2 mb-2 min-h-[40px] group-hover:text-amber-500 transition-colors duration-300">
          {product.title}
        </h3>
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-lg font-black text-white tracking-tight">${product.price.toFixed(2)} USD</span>
            {product.oldPrice && (
              <span className="text-xs text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
            )}
          </div>
          
          {/* Restored Add to cart Button */}
          <button className="w-full py-2 bg-[#121431] border border-[#24274a] text-amber-500 text-sm font-bold rounded-lg hover:bg-[#1a1c3e] hover:border-amber-500/50 transition-all flex items-center justify-center gap-2 group/btn">
            <i className="fas fa-shopping-cart text-xs"></i>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
