import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart3 } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'research-question', label: 'Research' },
    { id: 'approach', label: 'Approach' },
    { id: 'data-exploration', label: 'Data' },
    { id: 'predictive-models', label: 'Models' },
    { id: 'key-insights', label: 'Insights' },
    { id: 'team-credits', label: 'Team' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 font-bold text-xl hover:scale-105 transition-transform"
          >
            <div className={`rounded-2xl p-2 transition-all duration-300 hover:scale-110 hover:rotate-6 group ${
              isScrolled 
                ? 'bg-gradient-to-br from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200' 
                : 'bg-gradient-to-br from-white/20 to-blue-200/20 backdrop-blur-sm hover:from-white/30 hover:to-blue-200/30'
            }`}>
              <BarChart3 className={`w-6 h-6 ${
                isScrolled 
                  ? 'text-blue-600 group-hover:text-indigo-600' 
                  : 'text-white group-hover:text-blue-100'
              } transition-colors duration-300`} />
            </div>
            <span className={isScrolled ? 'text-gray-900' : 'text-white'}>
              PL Predictor
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium hover:scale-105 transition-all duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
