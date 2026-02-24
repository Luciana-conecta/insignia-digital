import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Navbar component with solid background and full visibility.
 * Fixed design to ensure legibility across all pages.
 */
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change and scroll to top
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Conecta', path: '/conecta' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Blog', path: '/blog' },
  ];

  const logoUrl = "https://raw.githubusercontent.com/InsigniaDigital/assets/main/logo.png";

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md border-b border-gray-100 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group transition-transform hover:scale-105">
            <img 
              src="../logos/LOGOPRINCIPAL.png" 
              alt="Insignia Digital" 
              className="h-8 md:h-12 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Menu - Horizontal Tabs */}
          <div className="hidden lg:flex items-center gap-1">
            <div className="flex items-center mr-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-[12px] font-bold uppercase tracking-widest transition-all rounded-lg hover:bg-gray-50 ${
                    location.pathname === link.path 
                      ? 'text-primary bg-primary/5' 
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <Link 
              to="/conocenos" 
              className="bg-primary text-white px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-md hover:bg-secondary hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-secondary hover:bg-gray-100 transition-colors"
              aria-label="Menú de navegación"
            >
              <span className="material-symbols-outlined text-3xl">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-[65px] bg-white shadow-2xl transition-all duration-300 transform origin-top ${
          isOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
        }`}
      >
        <div className="px-6 py-8 space-y-1 max-h-[85vh] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-4 text-sm font-bold uppercase tracking-widest rounded-xl transition-colors ${
                location.pathname === link.path 
                  ? 'text-primary bg-primary/5 border-l-4 border-primary' 
                  : 'text-secondary hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6">
            <Link 
              to="/conocenos" 
              className="block w-full text-center bg-primary text-white py-4 rounded-2xl font-black uppercase tracking-[0.2em] shadow-lg active:scale-95 transition-transform"
            >
              Hablar con un experto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;