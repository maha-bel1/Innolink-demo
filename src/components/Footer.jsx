import { useState, useEffect } from 'react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { name: 'twitter', url: 'https://twitter.com/DowokOfficial', label: 'Twitter' },
    { name: 'linkedin-in', url: 'https://www.linkedin.com/company/dowok', label: 'LinkedIn' },
    { name: 'facebook-f', url: 'https://www.facebook.com/DowokOfficial', label: 'Facebook' }
  ];

  return (
    <>
      {/* Back to Top Button - Responsive positioning */}
      <button 
        onClick={scrollToTop}
        className={`fixed left-4 sm:left-6 bottom-4 sm:bottom-6 z-50 p-3 sm:p-4 bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 ${
          showBackToTop ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        } hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50`}
        aria-label="Back to top"
        style={{
          animation: showBackToTop ? 'bounce 2s infinite' : 'none'
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 sm:h-6 sm:w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </button>

      {/* Footer Content - Added id="contact" here */}
      <footer id="contact" className="bg-gray-900 text-white pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
            
            {/* Column 1 - About */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold">InnoLink</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Connecter la Recherche à l'Innovation
              </p>
              <p className="text-gray-400 text-sm sm:text-base">
                Une plateforme Dowok pour transformer les idées en impact.
              </p>
            </div>
            
            {/* Column 2 - Features Links */}
            <div className="space-y-4">
              <h4 className="text-base sm:text-lg font-semibold">Fonctionnalités</h4>
              <ul className="space-y-2 sm:space-y-3">
                {['Espace Membres', 'Matching IA', 'Espace Projets', 'Financements'].map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 3 - Resources Links */}
            <div className="space-y-4">
              <h4 className="text-base sm:text-lg font-semibold">Ressources</h4>
              <ul className="space-y-2 sm:space-y-3">
                {['Documentation', 'Blog', 'FAQ', 'Support'].map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 4 - Contact Info */}
            <div className="space-y-4">
              <h4 className="text-base sm:text-lg font-semibold">Contact</h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { icon: 'map-marker-alt', text: 'Sousse' },
                  { icon: 'phone-alt', text: '+216 24 675 155' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <i className={`fas fa-${item.icon} mt-1 mr-3 text-gray-400 text-sm sm:text-base`}></i>
                    <span className="text-gray-400 text-sm sm:text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left ml-6 sm:ml-0-">
              &copy; {new Date().getFullYear()} InnoLink by Dowok. Tous droits réservés.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-lg sm:text-xl"
                >
                  <i className={`fab fa-${social.name}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Animation Styles */}
        <style jsx global>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
        `}</style>
      </footer>
    </>
  );
}