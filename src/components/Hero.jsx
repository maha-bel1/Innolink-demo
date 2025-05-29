import heroImage from '../assets/images/9e937f88dbcb3b29af72bf3a136f2c9a.jpg';

export default function Hero({ isMobile }) {
  return (
    <section className="relative min-h-screen pt-20 lg:pt-32 pb-12 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden [@media(min-width:768px)_and_(max-width:912px)]:pt-28 [@media(min-width:912px)_and_(max-width:912px)]:pt-36">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMmgxMGMxLjEgMCAyIC45IDIgMnYxMGMwIDEuMS0uOSAyLTIgMkgzOGMtMS4xIDAtMi0uOS0yLTJWMzR6TTggOGMwLTEuMS45LTIgMi0yaDEwYzEuMSAwIDIgLjkgMiAydjEwYzAgMS4xLS45IDItMiAySDEwYy0xLjEgMC0yLS45LTItMlY4em0yOCAyYzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDJ2MTBjMCAxLjEtLjkgMi0yIDJIMzhjLTEuMSAwLTItLjktMi0yVjEwem0wIDI4YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDJ2MTBjMCAxLjEtLjkgMi0yIDJIMzhjLTEuMSAwLTItLjktMi0yVjM4ek04IDM4YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDJ2MTBjMCAxLjEtLjkgMi0yIDJIMTBjLTEuMSAwLTItLjktMi0yVjM4eiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between h-full relative z-10 max-w-7xl">
        {/* Text Content */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-8 [@media(min-width:912px)_and_(max-width:912px)]:text-lg" data-aos="fade-right">
          <h1 className="text-5xl font-bold leading-tight mb-6 [@media(min-width:912px)_and_(max-width:912px)]:text-6xl" data-aos="fade-up" data-aos-delay="100">
            <span className="block [@media(min-width:912px)_and_(max-width:912px)]:mb-8" data-aos="fade-up" data-aos-delay="200">InnoLink by Dowok</span>
            <span className="block text-blue-200 text-4xl font-bold [@media(min-width:912px)_and_(max-width:912px)]:text-5xl" data-aos="fade-up" data-aos-delay="300">
              Connecter la Recherche <br className="hidden lg:block" /> à l'Innovation
            </span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl [@media(min-width:912px)_and_(max-width:912px)]:text-2xl" data-aos="fade-up" data-aos-delay="400">
            Transformons les idées en impact grâce à une collaboration intelligente entre chercheurs, entreprises et investisseurs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6" data-aos="fade-up" data-aos-delay="500">
            <button className="px-6 py-3 bg-white text-blue-700 text-lg font-medium rounded-lg hover:bg-blue-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 [@media(min-width:912px)_and_(max-width:912px)]:text-xl">
              Démarrer maintenant
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
            <button className="px-6 py-3 border-2 border-white text-white text-lg font-medium rounded-lg hover:bg-white/10 transition-colors duration-300 [@media(min-width:912px)_and_(max-width:912px)]:text-xl">
              En savoir plus
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap items-center gap-6 [@media(min-width:912px)_and_(max-width:912px)]:mt-12" data-aos="fade-up" data-aos-delay="600">
            <div className="flex items-center">
              <i className="fas fa-check-circle text-green-300 mr-2 text-lg [@media(min-width:912px)_and_(max-width:912px)]:text-2xl [@media(min-width:390px)_and_(max-width:430px)]:text-xl [@media(min-width:768px)_and_(max-width:820px)]:text-xl [@media(min-width:1024px)_and_(max-width:1366px)]:text-2xl [@media(min-width:344px)_and_(max-width:412px)]:text-xl [@media(min-width:853px)_and_(max-width:853px)]:text-xl"></i>
              <span className="text-base [@media(min-width:912px)_and_(max-width:912px)]:text-xl [@media(min-width:390px)_and_(max-width:430px)]:text-lg [@media(min-width:768px)_and_(max-width:820px)]:text-lg [@media(min-width:1024px)_and_(max-width:1366px)]:text-xl [@media(min-width:344px)_and_(max-width:412px)]:text-lg [@media(min-width:853px)_and_(max-width:853px)]:text-lg">Plateforme sécurisée</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-users text-blue-200 mr-2 text-lg [@media(min-width:912px)_and_(max-width:912px)]:text-2xl [@media(min-width:390px)_and_(max-width:430px)]:text-xl [@media(min-width:768px)_and_(max-width:820px)]:text-xl [@media(min-width:1024px)_and_(max-width:1366px)]:text-2xl [@media(min-width:344px)_and_(max-width:412px)]:text-xl [@media(min-width:853px)_and_(max-width:853px)]:text-xl"></i>
              <span className="text-base [@media(min-width:912px)_and_(max-width:912px)]:text-xl [@media(min-width:390px)_and_(max-width:430px)]:text-lg [@media(min-width:768px)_and_(max-width:820px)]:text-lg [@media(min-width:1024px)_and_(max-width:1366px)]:text-xl [@media(min-width:344px)_and_(max-width:412px)]:text-lg [@media(min-width:853px)_and_(max-width:853px)]:text-lg">500+ membres</span>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-left">
          <div className="relative w-full max-w-3xl lg:ml-8 [@media(min-width:768px)_and_(max-width:912px)]:max-w-[85%] [@media(min-width:912px)_and_(max-width:912px)]:max-w-[95%] [@media(min-width:540px)_and_(max-width:540px)]:max-w-[90%]">
            <img 
              src={heroImage} 
              alt="Team of researchers and business professionals analyzing data" 
              className="custom-hero-img rounded-xl shadow-2xl object-cover w-full h-auto max-h-[65vh] min-h-[400px] [@media(min-width:360px)_and_(max-width:390px)]:max-h-[54.6vh] [@media(min-width:912px)_and_(max-width:912px)]:max-h-[70vh] [@media(min-width:540px)_and_(max-width:540px)]:max-h-[50vh] [@media(min-width:360px)_and_(max-width:430px)]:max-h-[52vh]"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce" data-aos="fade-up" data-aos-delay="700">
        <i className="fas fa-chevron-down text-white/80 text-2xl"></i>
      </div>
    </section>
  );
}