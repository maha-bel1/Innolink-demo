import { useState, useEffect } from 'react';
import logoImage from '../assets/images/innolinklogo.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [authMenuOpen, setAuthMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width <= 912);
    };

    // Initial check
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setMobileMenuOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setMobileMenuOpen(true);
    }
  };

  const toggleAuthMenu = () => {
    setAuthMenuOpen(!authMenuOpen);
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        toggleMobileMenu();
      }
      if (authMenuOpen && !event.target.closest('.auth-menu-container')) {
        setAuthMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen, authMenuOpen]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo/Brand */}
        <a href="#" className="flex items-center space-x-2 sm:space-x-3 min-w-0 md:ml-0 lg:ml-4 [@media(max-width:912px)]:ml-0 [@media(max-width:853px)]:ml-0">
          <img 
            src={logoImage} 
            alt="InnoLink Logo" 
            className={`h-8 sm:h-10 w-8 sm:w-10 rounded-full transition-all duration-300 flex-shrink-0 ${
              scrolled ? 'border border-gray-200' : 'border border-white/20'
            }`}
            loading="eager"
          />
          <div className="flex flex-col min-w-0">
            <span className={`truncate text-base sm:text-lg md:text-2xl lg:text-lg font-bold transition-colors duration-300 ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}>
              InnoLink
            </span>
            <span className={`truncate text-xs sm:text-sm md:text-base lg:text-xs transition-colors duration-300 ${
              scrolled ? 'text-gray-600' : 'text-gray-200'
            }`}>
              by Dowok
            </span>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center space-x-4 lg:space-x-8 navbar-gap navbar-912">
          {[
            { href: '#features', label: 'Fonctionnalités' },
            { href: '#members', label: 'Espace Membres' },
            { href: '#projects', label: 'Espace Projets' },
            { href: '#contact', label: 'Contact' }
          ].map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className={`navbar-link-big text-sm md:text-xl lg:text-xl transition-colors duration-200 whitespace-nowrap ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              } font-medium`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* Auth Buttons & Mobile Menu Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 md:mr-0 lg:mr-4 [@media(max-width:912px)]:mr-4">
          {/* Show auth buttons only on large screens */}
          {!isTablet && !isMobile && !mobileMenuOpen && (
            <>
              <button className={`hidden lg:inline-block text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 py-1.5 rounded-lg transition-colors duration-200 ${
                scrolled ? 'text-blue-600 hover:bg-blue-50' : 'text-white hover:bg-white/10'
              } font-medium`}>
                Connexion
              </button>
              <button className={`hidden lg:inline-block text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 py-1.5 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium`}>
                Inscription
              </button>
            </>
          )}

          {/* Auth Menu Toggle for tablet (768px - 912px) */}
          {isTablet && !isMobile && (
            <div className="auth-menu-container relative">
              <button 
                className="focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                onClick={toggleAuthMenu}
                aria-label="Auth Menu"
                aria-expanded={authMenuOpen}
              >
                <i className={`fas fa-user text-xl ${scrolled ? 'text-gray-700' : 'text-white'} transition-transform duration-300`}></i>
              </button>

              {/* Auth Dropdown Menu */}
              {authMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <button className="w-full text-left px-4 py-2 text-gray-700 md:text-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                    Connexion
                  </button>
                  <button className="w-full text-left px-4 py-2 text-gray-700 md:text-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                    Inscription
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Button (only for <768px) */}
          {isMobile && (
            <button 
              className="md:hidden focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <i className={`fas fa-times text-xl ${scrolled ? 'text-gray-700' : 'text-white'} transition-transform duration-300`}></i>
              ) : (
                <i className={`fas fa-bars text-xl ${scrolled ? 'text-gray-700' : 'text-white'} transition-transform duration-300`}></i>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu-container md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-40 transition-all duration-500 ease-in-out transform ${
          mobileMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        } ${isClosing ? 'opacity-0 -translate-y-full pointer-events-none' : ''}`}
        style={{ top: scrolled ? '64px' : '80px' }}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
          {[
            { href: '#features', label: 'Fonctionnalités', icon: 'fa-cogs' },
            { href: '#members', label: 'Espace Membres', icon: 'fa-users' },
            { href: '#projects', label: 'Espace Projets', icon: 'fa-project-diagram' },
            { href: '#contact', label: 'Contact', icon: 'fa-envelope' }
          ].map((link, index) => (
            <a 
              key={link.href}
              href={link.href}
              className="text-gray-800 hover:text-blue-600 transition-all duration-300 py-3 text-lg md:text-xl font-medium flex items-center transform hover:translate-x-2"
              onClick={toggleMobileMenu}
              style={{
                opacity: mobileMenuOpen ? 1 : 0,
                transform: `translateX(${mobileMenuOpen ? '0' : '-20px'})`,
                transition: `all 0.3s ease ${index * 0.1}s`
              }}
            >
              <i className={`fas ${link.icon} mr-3 text-blue-500 w-6 text-center`}></i>
              {link.label}
            </a>
          ))}
          
          {/* Mobile Auth Buttons */}
          <div className="flex flex-col space-y-3 mt-6 pt-6 border-t border-gray-200">
            <button className="w-full text-center px-4 py-2.5 text-blue-600 md:text-lg hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium">
              Connexion
            </button>
            <button className="w-full text-center px-4 py-2.5 bg-blue-600 text-white md:text-lg rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
              Inscription
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}