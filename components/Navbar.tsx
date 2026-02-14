
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#/services' },
    { name: 'Portfolio', href: '#/portfolio' },
    { name: 'Blog', href: '#/blog' },
    { name: 'Contact', href: '#/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white text-xl">B</div>
          <span className="font-bold text-xl tracking-tight text-slate-900">Bestricky<span className="text-blue-600">.</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#/booking" className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
            Book a Strategy Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 py-6 px-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-medium text-slate-700" onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <a href="#/booking" className="bg-blue-600 text-white text-center py-4 rounded-xl font-bold" onClick={() => setIsMenuOpen(false)}>
            Book a Strategy Call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
