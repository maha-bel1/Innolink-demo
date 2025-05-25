export default function IntelligentMatching() {
  const matchingFeatures = [
    {
      icon: "👨‍🔬➡️🏭",
      title: "Compétences & Besoins",
      description: "Analyse en temps réel des compétences chercheurs et besoins industries"
    },
    {
      icon: "📊",
      title: "Projets & Financements",
      description: "Appariement des projets en cours avec les opportunités de financement"
    },
    {
      icon: "📈",
      title: "Tendances Sectorielles",
      description: "Anticipation des besoins émergents par analyse des tendances"
    }
  ];

  return (
    <section id="matching" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            <span className="text-blue-600">2. Matching Intelligent</span> – IA pour la Mise en Relation
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Le matching intelligent est le coeur d'InnoLink. Grâce à un algorithme basé sur l'IA et le machine learning, la plateforme analyse en temps réel: 
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* AI Visualization (Left) */}
          <div className="lg:w-1/2 w-full" data-aos="fade-right">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                  alt="Interface IA de matching montrant des connexions entre profils scientifiques et industriels"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-blue-800 font-medium text-sm sm:text-base">
                  "L'IA propose des partenariats stratégiques, réduisant ainsi le temps de recherche et maximisant les opportunités de collaboration."
                </p>
              </div>
            </div>
          </div>

          {/* Features List (Right) */}
          <div className="lg:w-1/2 w-full" data-aos="fade-left">
            <div className="space-y-6 sm:space-y-8">
              {matchingFeatures.map((feature, index) => (
                <div key={index} className="flex items-start bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="text-3xl mr-4 sm:mr-6 flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                  </div>
                </div>
              ))}

              <div className="mt-6 sm:mt-8 bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                <h4 className="font-bold text-gray-800 text-lg sm:text-xl mb-3 sm:mb-4">Résultats Concrets</h4>
                <ul className="space-y-2 sm:space-y-3 text-gray-700">
                  {[
                    "Réduction du temps de recherche des partenaires",
                    "Augmentation des collaborations fructueuses",
                    "Détection proactive des opportunités"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base">
                  Voir les études de cas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





















































































/*export default function IntelligentMatching() {
    const matchingFeatures = [
      {
        icon: "👨‍🔬➡️🏭",
        title: "Compétences & Besoins",
        description: "Analyse en temps réel des compétences chercheurs et besoins industries"
      },
      {
        icon: "📊",
        title: "Projets & Financements",
        description: "Appariement des projets en cours avec les opportunités de financement"
      },
      {
        icon: "📈",
        title: "Tendances Sectorielles",
        description: "Anticipation des besoins émergents par analyse des tendances"
      }
    ];
  
    return (
      <section id="matching" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              2. Matching Intelligent – IA pour la Mise en Relation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Le matching intelligent est le coeur d'InnoLink. Grâce à un algorithme basé sur l'IA et le machine learning, la plateforme analyse en temps réel: 
            </p>
          </div>
  
          {}
          <div className="flex flex-col md:flex-row items-center gap-10">
            {}
            <div className="md:w-1/2" data-aos="fade-right">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                  alt="Interface IA de matching montrant des connexions entre profils scientifiques et industriels"
                  className="rounded-lg w-full h-auto"
                />
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-medium">
                    "L'IA propose des partenariats stratégiques, réduisant ainsi le temps de recherche et maximisant les opportunités de collaboration."
                  </p>
                </div>
              </div>
            </div>
  
            {}
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="space-y-8">
                {matchingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-2xl mr-4">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
  
                <div className="mt-10 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-3">Résultats Concrets</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Réduction du temps de recherche des partenaires</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Augmentation des collaborations fructueuses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Détection proactive des opportunités</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }*/