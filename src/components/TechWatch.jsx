export default function TechWatch() {
  const features = [
    "Une analyse en temps réel des publications scientifiques et tendances technologiques",
    "Des rapports automatisés sur les innovations majeures dans divers secteurs",
    "Des alertes personnalisées pour ne rater aucune opportunité stratégique",
  ];

  return (
    <section id="techwatch" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Content - Left Side */}
          <div className="lg:w-1/2" data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              <span className="text-purple-600">5. Veille Technologique</span> & Tendances Sectorielles
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              L'innovation nécessite une veille continue sur les nouvelles technologies, brevets et avancées scientifiques. InnoLink propose :
            </p>
            
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3 text-purple-500">
                    <i className="fas fa-binoculars text-lg"></i>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            {/* Enhanced AI Section */}
            <div className="bg-purple-50 p-4 sm:p-6 rounded-xl border border-purple-100 mb-6 sm:mb-8">
              <div className="flex items-start">
                <div className="bg-purple-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                  <i className="fas fa-robot text-purple-600 text-sm sm:text-base"></i>
                </div>
                <p className="text-purple-800 text-sm sm:text-base">
                  <span className="font-semibold">Intelligence Artificielle :</span> Grâce à l'IA, la plateforme filtre et analyse les informations les plus pertinentes, offrant ainsi un avantage compétitif à ses utilisateurs.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <i className="fas fa-bell mr-2"></i> Configurer vos alertes
              </button>
              <button className="px-6 py-3 border border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-300">
                Voir un exemple
              </button>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="lg:w-1/2 w-full" data-aos="fade-left">
            <div className="relative rounded-xl shadow-xl overflow-hidden aspect-w-16 aspect-h-9 border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Tableau de bord analytique moderne avec visualisation de données"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

































/* export default function TechWatch() {
  const features = [
    "Une analyse en temps réel des publications scientifiques et tendances technologiques",
    "Des rapports automatisés sur les innovations majeures dans divers secteurs",
    "Des alertes personnalisées pour ne rater aucune opportunités stratégiques",
  ]

  return (
    <section id="techwatch" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              5. Veille Technologique & Tendances Sectorielles
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              L'innovation nécessite une veille continue sur les nouvelles technologies, brevets et avancées scientifiques. InnoLink propose :
            </p>
            
            <ul className="space-y-3 mb-8">
              {features.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-binoculars text-purple-500 mt-1 mr-3"></i>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {}
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 mb-6">
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <i className="fas fa-robot text-purple-600"></i>
                </div>
                <p className="text-purple-800 flex-1">
                  <strong>Intelligence Artificielle :</strong> Grâce à l'IA, la plateforme filtre et analyse les informations les plus pertinentes, offrant ainsi un avantage compétitif à ses utilisateurs.
                </p>
              </div>
            </div>

            <div className="text-center">
              <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition shadow-md hover:shadow-purple-200">
                <i className="fas fa-bell mr-2"></i> Configurer vos alertes
              </button>
            </div>
          </div>

          <div className="md:w-1/2" data-aos="fade-left">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Tableau de bord analytique moderne avec visualisation de données"
         className="rounded-xl shadow-xl w-full h-auto object-cover border border-gray-100"/>
          </div>
        </div>
      </div>
    </section>
  )
} */