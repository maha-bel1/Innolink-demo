import heroImage from '../assets/images/9e937f88dbcb3b29af72bf3a136f2c9a.jpg';

export default function Hero({ isMobile }) {
  return (
    <section className="relative min-h-screen pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMmgxMGMxLjEgMCAyIC45IDIgMnYxMGMwIDEuMS0uOSAyLTIgMkgzOGMtMS4xIDAtMi0uOS0yLTJWMzR6TTggOGMwLTEuMS45LTIgMi0yaDEwYzEuMSAwIDIgLjkgMiAydjEwYzAgMS4xLS45IDItMiAySDEwYy0xLjEgMC0yLS45LTItMlY4em0yOCAyYzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDJ2MTBjMCAxLjEtLjkgMi0yIDJIMzhjLTEuMSAwLTItLjktMi0yVjEwem0wIDI4YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDJ2MTBjMCAxLjEtLjkgMi0yIDJIMzhjLTEuMSAwLTItLjktMi0yVjM4ek04IDM4YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDJ2MTBjMCAxLjEtLjkgMi0yIDJIMTBjLTEuMSAwLTItLjktMi0yVjM4eiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center h-full relative z-10">
        {/* Text Content */}
        <div className="lg:w-1/2 mb-8 sm:mb-12 lg:mb-0 lg:pr-8 xl:pr-12" data-aos="fade-right">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 md:mb-6">
            <span className="block">InnoLink by Dowok</span>
            <span className="block text-blue-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
              Connecter la Recherche à l'Innovation
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-4 sm:mb-6 md:mb-8 max-w-2xl">
            Transformons les idées en impact grâce à une collaboration intelligente entre chercheurs, entreprises et investisseurs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-blue-700 text-sm sm:text-base font-medium rounded-lg hover:bg-blue-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Démarrer maintenant
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
            <button className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-white text-white text-sm sm:text-base font-medium rounded-lg hover:bg-white/10 transition-colors duration-300">
              En savoir plus
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-6 sm:mt-8 md:mt-12 flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
            <div className="flex items-center">
              <i className="fas fa-check-circle text-green-300 mr-2 text-sm sm:text-base"></i>
              <span className="text-xs sm:text-sm md:text-base">Plateforme sécurisée</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-users text-blue-200 mr-2 text-sm sm:text-base"></i>
              <span className="text-xs sm:text-sm md:text-base">500+ membres</span>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-left">
          <div className="relative w-full max-w-xl lg:max-w-2xl lg:ml-8 xl:ml-12">
            <img 
              src={heroImage} 
              alt="Team of researchers and business professionals analyzing data" 
              className="rounded-xl shadow-2xl object-cover w-full h-auto max-h-[60vh] sm:max-h-[65vh] md:max-h-[70vh] min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:scale-105"
              loading="eager"
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 bg-white rounded-full opacity-10 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white/80 text-lg sm:text-xl"></i>
      </div>
    </section>
  );
}































































































































































































































































































































































































































/*import heroImage from '../assets/images/9e937f88dbcb3b29af72bf3a136f2c9a.jpg';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center h-full">
        <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            InnoLink by Dowok – Connecter la Recherche à l'Innovation
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Transformons les idées en impact grâce à une collaboration intelligente entre chercheurs, entreprises et investisseurs.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-200 transition">
              Démarrer maintenant
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
          <img 
            src={heroImage} 
            alt="Team of researchers and business professionals analyzing data" 
            className="rounded-lg shadow-2xl object-cover w-full max-w-[600px] h-[70vh] min-h-[400px]"
          />
        </div>
      </div>
    </section>
  )
}*/