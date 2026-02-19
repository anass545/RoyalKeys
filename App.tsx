
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import ProductCard from './components/ProductCard';
import StaticPage from './components/StaticPage';
import { PRODUCTS } from './constants';
import { CategoryType, Product, AppView, InfoPageType } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);
  const [activeInfoPage, setActiveInfoPage] = useState<InfoPageType | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, selectedProduct, selectedCategory, activeInfoPage]);

  const getProductsByCategory = (cat: CategoryType) => 
    PRODUCTS.filter(p => p.category === cat);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setView('product');
    setActiveInfoPage(null);
  };

  const handleBuyNow = (product: Product) => {
    setSelectedProduct(product);
    setView('checkout');
    setActiveInfoPage(null);
  };

  const handleNavigateHome = () => {
    setView('home');
    setSelectedProduct(null);
    setSelectedCategory(null);
    setActiveInfoPage(null);
  };

  const handleCategoryClick = (category: CategoryType) => {
    setSelectedCategory(category);
    setView('catalog');
    setSelectedProduct(null);
    setActiveInfoPage(null);
  };

  const handleInfoLinkClick = (type: InfoPageType) => {
    setActiveInfoPage(type);
    setView('info');
    setSelectedProduct(null);
    setSelectedCategory(null);
  };

  const handleCheckoutSuccess = () => {
    alert("Thank you for your purchase! Your digital key has been sent to your email.");
    setView('home');
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onCategoryClick={handleCategoryClick} onHomeClick={handleNavigateHome} />
      
      <main className="flex-1 pb-20">
        {view === 'home' && (
          <>
            <Hero onCategoryClick={handleCategoryClick} />
            <ProductSection 
              title={CategoryType.SOFTWARE} 
              products={getProductsByCategory(CategoryType.SOFTWARE)} 
              onProductClick={handleProductClick}
            />
            <ProductSection 
              title={CategoryType.TRENDING} 
              products={getProductsByCategory(CategoryType.TRENDING)} 
              onProductClick={handleProductClick}
            />
            <ProductSection 
              title={CategoryType.SUBSCRIPTIONS} 
              products={getProductsByCategory(CategoryType.SUBSCRIPTIONS)} 
              onProductClick={handleProductClick}
            />
          </>
        )}

        {view === 'catalog' && selectedCategory && (
          <div className="container mx-auto px-4 py-12 animate-in fade-in duration-500">
            <div className="flex items-center gap-4 mb-8">
              <button onClick={handleNavigateHome} className="text-gray-400 hover:text-amber-500 transition-colors">
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Home
              </button>
              <h1 className="text-3xl font-bold text-white">{selectedCategory}</h1>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {getProductsByCategory(selectedCategory).map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onClick={handleProductClick} 
                />
              ))}
            </div>
            
            {getProductsByCategory(selectedCategory).length === 0 && (
              <div className="text-center py-20 text-gray-500">
                <i className="fas fa-search text-4xl mb-4 opacity-20"></i>
                <p>No products found in this category.</p>
              </div>
            )}
          </div>
        )}

        {view === 'info' && activeInfoPage && (
          <StaticPage type={activeInfoPage} onNavigateHome={handleNavigateHome} />
        )}

        {view === 'product' && selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            onBuyNow={handleBuyNow} 
            onNavigateHome={handleNavigateHome}
            onProductClick={handleProductClick}
          />
        )}

        {view === 'checkout' && selectedProduct && (
          <Checkout 
            product={selectedProduct} 
            onCancel={() => setView('product')} 
            onSuccess={handleCheckoutSuccess}
          />
        )}
      </main>

      <Footer onLinkClick={handleInfoLinkClick} />
      <AIAssistant />
    </div>
  );
};

export default App;
