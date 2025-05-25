export default function WhyChoose() {
  const reasons = [
    {
      text: "Une IA puissante pour accélérer le matching et la collaboration",
      icon: "fas fa-bolt"
    },
    {
      text: "Un accès facilité aux financements et investisseurs stratégiques",
      icon: "fas fa-hand-holding-usd"
    },
    {
      text: "Un espace sécurisé pour valoriser la recherche et l'innovation",
      icon: "fas fa-shield-alt"
    },
    {
      text: "Un réseau d'experts et d'entreprises engagés dans l'innovation",
      icon: "fas fa-network-wired"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Pourquoi choisir <span className="text-blue-300">InnoLink</span> by Dowok ?
          </h2>
          <p className="text-base sm:text-lg text-blue-200 max-w-3xl mx-auto">
            Plus qu'une plateforme : un écosystème dédié à la transformation de la recherche en impact concret.
          </p>
        </div>
        
        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex items-start bg-blue-800/30 hover:bg-blue-800/50 p-4 sm:p-6 rounded-xl transition-all duration-300 border border-blue-700/50"
              data-aos="fade-up"
              data-aos-delay={(index % 2) * 100 + 50}
            >
              <div className="bg-blue-700 rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0 mt-0.5">
                <i className={`${reason.icon} text-white text-sm sm:text-base`}></i>
              </div>
              <p className="text-sm sm:text-base lg:text-lg">{reason.text}</p>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16" data-aos="fade-up" data-aos-delay="200">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-blue-50 text-blue-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-bold text-base sm:text-lg">
            <i className="fas fa-rocket mr-2"></i>
            Rejoindre l'écosystème InnoLink
          </button>
          
          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6">
            <div className="flex items-center text-sm sm:text-base text-blue-200">
              <i className="fas fa-check-circle text-green-300 mr-2"></i>
              <span>500+ membres actifs</span>
            </div>
            <div className="flex items-center text-sm sm:text-base text-blue-200">
              <i className="fas fa-star text-yellow-300 mr-2"></i>
              <span>4.9/5 satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



































/* export default function WhyChoose() {
  const reasons = [
    "Une IA puissante pour accélérer le matching et la collaboration",
    "Un accès facilité aux financements et investisseurs stratégiques",
    "Un espace sécurisé pour valoriser la recherche et l'innovation",
    "Un réseau d'experts et d'entreprises engagés dans l'innovation"
  ]

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Pourquoi choisir InnoLink by Dowok ?</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Plus qu'une plateforme : un écosystème dédié à la transformation de la recherche en impact concret.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex items-start"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-blue-700 rounded-full p-2 mr-4 mt-1">
                <i className="fas fa-check text-white"></i>
              </div>
              <p className="text-lg">{reason}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-100 transition font-bold text-lg">
            Rejoindre l'écosystème InnoLink
          </button>
        </div>
      </div>
    </section>
  )
} */