import { useState, useEffect } from 'react';
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
        
        {/* Desktop Navigation */}
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
        
        {/* Buttons - Visible on all screen sizes */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <button className={`text-sm md:text-lg px-3 py-1 md:px-4 md:py-2 rounded-lg transition ${scrolled ? 'text-blue-600 hover:bg-blue-100' : 'text-white hover:bg-white/10'}`}>
            Connexion
          </button>
          <button className={`text-sm md:text-lg px-3 py-1 md:px-4 md:py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition`}>
            Inscription
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none ml-2"
            onClick={toggleMobileMenu}
          >
            <i className={`fas fa-bars text-xl ${scrolled ? 'text-gray-700' : 'text-white'} transition-transform duration-200 ${mobileMenuOpen ? 'transform rotate-180' : ''}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Only navigation links */}
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