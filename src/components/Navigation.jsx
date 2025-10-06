import React, { useState, useEffect } from 'react';
import { Scale, Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white shadow-xl py-3' 
        : 'bg-gradient-to-b from-black/50 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => handleNavClick('domů')}>
            <div className={`p-2 rounded-lg transition-all duration-300 ${
              scrolled ? 'bg-gradient-to-br from-rose-600 to-orange-600' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Scale className={`w-7 h-7 text-white`} />
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Lenka Ježková
              </h1>
              <p className={`text-sm ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                Advokátní kancelář
              </p>
            </div>
          </div>

          <div className="hidden md:flex space-x-1">
            {['Domů', 'Služby', 'O mně', 'Kontakt'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase().replace(' ', '-'))}
                className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                  scrolled 
                    ? 'text-gray-700 hover:bg-gradient-to-r hover:from-rose-50 hover:to-orange-50 hover:text-rose-700' 
                    : 'text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={scrolled ? 'text-gray-900' : 'text-white'} size={28} />
            ) : (
              <Menu className={scrolled ? 'text-gray-900' : 'text-white'} size={28} />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mt-3 shadow-xl">
          {['Domů', 'Služby', 'O mně', 'Kontakt'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item.toLowerCase().replace(' ', '-'))}
              className="block w-full text-left px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-rose-50 hover:to-orange-50 hover:text-rose-700 transition-all"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}