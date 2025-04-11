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

  // Social media links configuration
  const socialLinks = [
    {
      name: 'twitter',
      url: 'https://twitter.com/DowokOfficial', // Replace with your official Twitter URL
      label: 'Visit our Twitter page'
    },
    {
      name: 'linkedin-in',
      url: 'https://www.linkedin.com/company/dowok', // Replace with your official LinkedIn URL
      label: 'Visit our LinkedIn page'
    },
    {
      name: 'facebook-f',
      url: 'https://www.facebook.com/DowokOfficial', // Replace with your official Facebook URL
      label: 'Visit our Facebook page'
    }
  ];

  return (
    <>
      {/* Back to Top Button - Left side */}
      <button 
        onClick={scrollToTop}
        className={`fixed left-6 bottom-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-xl transition-all duration-300 ${
          showBackToTop ? 'opacity-100' : 'opacity-0'
        } hover:bg-blue-700 hover:shadow-2xl`}
        aria-label="Back to top"
        style={{
          animation: showBackToTop ? 'bounce 2s infinite' : 'none'
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
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

      {/* Footer Content */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1 */}
            <div 
              className="transition-all duration-700 ease-out"
              style={{
                animation: 'slideUp 0.8s forwards',
                animationDelay: '0.1s',
                opacity: 0,
                transform: 'translateY(30px)'
              }}
            >
              <h3 className="text-xl font-bold mb-6">InnoLink</h3>
              <p className="text-gray-400 mb-4 hover:text-white transition-colors duration-300">
                Connecter la Recherche à l'Innovation
              </p>
              <p className="text-gray-400 hover:text-white transition-colors duration-300">
                Une plateforme Dowok pour transformer les idées en impact.
              </p>
            </div>
            
            {/* Column 2 */}
            <div 
              className="transition-all duration-700 ease-out"
              style={{
                animation: 'slideUp 0.8s forwards',
                animationDelay: '0.2s',
                opacity: 0,
                transform: 'translateY(30px)'
              }}
            >
              <h4 className="text-lg font-semibold mb-6">Fonctionnalités</h4>
              <ul className="space-y-3">
                {['Espace Membres', 'Matching IA', 'Espace Projets', 'Financements'].map((item, i) => (
                  <li 
                    key={i}
                    style={{
                      animation: `fadeIn 0.5s forwards`,
                      animationDelay: `${0.3 + i * 0.1}s`,
                      opacity: 0
                    }}
                  >
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 block hover:translate-x-2">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 3 */}
            <div 
              className="transition-all duration-700 ease-out"
              style={{
                animation: 'slideUp 0.8s forwards',
                animationDelay: '0.3s',
                opacity: 0,
                transform: 'translateY(30px)'
              }}
            >
              <h4 className="text-lg font-semibold mb-6">Ressources</h4>
              <ul className="space-y-3">
                {['Documentation', 'Blog', 'FAQ', 'Support'].map((item, i) => (
                  <li 
                    key={i}
                    style={{
                      animation: `fadeIn 0.5s forwards`,
                      animationDelay: `${0.4 + i * 0.1}s`,
                      opacity: 0
                    }}
                  >
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 block hover:translate-x-2">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 4 */}
            <div 
              id="contact"
              className="transition-all duration-700 ease-out"
              style={{
                animation: 'slideUp 0.8s forwards',
                animationDelay: '0.4s',
                opacity: 0,
                transform: 'translateY(30px)'
              }}
            >
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <ul className="space-y-3">
                {[
                  { icon: 'map-marker-alt', text: 'Tunis' },
                  { icon: 'envelope', text: 'contact@innolink.com' },
                  { icon: 'phone-alt', text: '+216 55 555 555' }
                ].map((item, i) => (
                  <li 
                    key={i}
                    style={{
                      animation: `fadeIn 0.5s forwards`,
                      animationDelay: `${0.5 + i * 0.1}s`,
                      opacity: 0
                    }}
                  >
                    <div className="flex items-start hover:translate-x-2 transition-all duration-300">
                      <i className={`fas fa-${item.icon} mt-1 mr-3 text-gray-400`}></i>
                      <span className="text-gray-400 hover:text-white">{item.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div 
            className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
            style={{
              animation: 'fadeIn 0.8s forwards',
              animationDelay: '0.6s',
              opacity: 0,
              paddingLeft: '60px'
            }}
          >
            <p className="text-gray-400 mb-4 md:mb-0 hover:text-white transition-colors duration-300 ml-4 md:ml-0">
              &copy; {new Date().getFullYear()} InnoLink by Dowok. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social, i) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125"
                  style={{
                    animation: `fadeIn 0.5s forwards`,
                    animationDelay: `${0.7 + i * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <i className={`fab fa-${social.name} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Animation Styles */}
        <style jsx global>{`
          @keyframes slideUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeIn {
            to { opacity: 1; }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}</style>
      </footer>
    </>
  );
}