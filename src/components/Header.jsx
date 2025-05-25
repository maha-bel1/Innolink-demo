import { useState, useEffect } from 'react';
import logoImage from '../assets/images/innolinklogo.png';

export default function Header({ deviceType }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        toggleMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  const isMobile = deviceType === 'xs' || deviceType === 'sm';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo/Brand */}
        <a href="#" className="flex items-center space-x-2 sm:space-x-3">
          <img 
            src={logoImage} 
            alt="InnoLink Logo" 
            className={`h-8 sm:h-10 w-8 sm:w-10 rounded-full transition-all duration-300 ${scrolled ? 'border border-gray-200' : 'border border-white/20'}`}
            loading="eager"
          />
          
          <div className="flex flex-col">
            <span className={`text-base sm:text-lg md:text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              InnoLink
            </span>
            <span className={`text-[10px] sm:text-xs transition-colors duration-300 ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>
              by Dowok
            </span>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8">
          {[
            { href: '#features', label: 'Fonctionnalités' },
            { href: '#members', label: 'Espace Membres' },
            { href: '#projects', label: 'Espace Projets' },
            { href: '#contact', label: 'Contact' }
          ].map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className={`text-sm lg:text-base xl:text-lg transition-colors duration-200 ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'} font-medium`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* Auth Buttons & Mobile Menu Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
          <button className={`text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-lg transition-colors duration-200 ${scrolled ? 'text-blue-600 hover:bg-blue-50' : 'text-white hover:bg-white/10'} font-medium`}>
            Connexion
          </button>
          <button className={`text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium`}>
            Inscription
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none ml-1 sm:ml-2 p-1"
            onClick={toggleMobileMenu}
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <i className={`fas fa-times text-lg sm:text-xl ${scrolled ? 'text-gray-700' : 'text-white'} transition-transform duration-300`}></i>
            ) : (
              <i className={`fas fa-bars text-lg sm:text-xl ${scrolled ? 'text-gray-700' : 'text-white'} transition-transform duration-300`}></i>
            )}
          </button>
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
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col space-y-4 sm:space-y-6">
          {[
            { href: '#features', label: 'Fonctionnalités', icon: 'fa-cogs' },
            { href: '#members', label: 'Espace Membres', icon: 'fa-users' },
            { href: '#projects', label: 'Espace Projets', icon: 'fa-project-diagram' },
            { href: '#contact', label: 'Contact', icon: 'fa-envelope' }
          ].map((link, index) => (
            <a 
              key={link.href}
              href={link.href}
              className="text-gray-800 hover:text-blue-600 transition-all duration-300 py-2 sm:py-3 text-base sm:text-lg font-medium flex items-center transform hover:translate-x-2"
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
          <div className="flex flex-col space-y-2 sm:space-y-3 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
            <button className="w-full text-center px-4 py-2 text-sm sm:text-base text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium">
              Connexion
            </button>
            <button className="w-full text-center px-4 py-2 text-sm sm:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
              Inscription
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}





























































/*import { useState, useEffect } from 'react';
import logoImage from '../assets/images/b139d66d0c97ff06c97d6dffd4899954.jpg';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3">
          <img 
            src={logoImage} 
            alt="InnoLink Logo" 
            className={`h-10 w-10 rounded transition-all duration-300 ${scrolled ? 'border border-gray-200' : ''}`}
          />
          
          <div className="flex flex-col">
            <span className={`text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              InnoLink
            </span>
            <span className={`text-xs transition-colors duration-300 ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>
              by Dowok
            </span>
          </div>
        </a>
        
        {}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className={`text-lg transition ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
            Fonctionnalités
          </a>
          <a href="#members" className={`text-lg transition ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
            Espace Membres
          </a>
          <a href="#projects" className={`text-lg transition ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
            Espace Projets
          </a>
          <a href="#contact" className={`text-lg transition ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
            Contact
          </a>
        </nav>
        
        {}
        <div className="flex items-center space-x-2 md:space-x-4">
          <button className={`text-sm md:text-lg px-3 py-1 md:px-4 md:py-2 rounded-lg transition ${scrolled ? 'text-blue-600 hover:bg-blue-100' : 'text-white hover:bg-white/10'}`}>
            Connexion
          </button>
          <button className={`text-sm md:text-lg px-3 py-1 md:px-4 md:py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition`}>
            Inscription
          </button>
          
          {}
          <button 
            className="md:hidden focus:outline-none ml-2"
            onClick={toggleMobileMenu}
          >
            <i className={`fas fa-bars text-xl ${scrolled ? 'text-gray-700' : 'text-white'} transition-transform duration-200 ${mobileMenuOpen ? 'transform rotate-180' : ''}`}></i>
          </button>
        </div>
      </div>

      {}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <a 
            href="#features" 
            className="text-gray-700 hover:text-blue-600 transition py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Fonctionnalités
          </a>
          <a 
            href="#members" 
            className="text-gray-700 hover:text-blue-600 transition py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Espace Membres
          </a>
          <a 
            href="#projects" 
            className="text-gray-700 hover:text-blue-600 transition py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Espace Projets
          </a>
          <a 
            href="#contact" 
            className="text-gray-700 hover:text-blue-600 transition py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
  */