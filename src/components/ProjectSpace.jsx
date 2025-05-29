export default function ProjectSpace() {
  const features = [
    "Déposer et structurer leurs projets de recherche",
    "Travailler en co-création avec des partenaires industriels",
    "Suivre l'avancement et mesurer l'impact des projets en temps réel",
    "Obtenir des suggestions IA pour optimiser la faisabilité et le financement du projet"
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image - Left Side */}
          <div className="lg:w-1/2 w-full" data-aos="fade-right">
            <div className="relative rounded-xl shadow-xl overflow-hidden aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
                alt="Équipe multidisciplinaire travaillant sur un projet de recherche" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent"></div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="lg:w-1/2 w-full" data-aos="fade-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              <span className="text-blue-600">3. Espace Projets</span> – Valorisation de la Recherche & Innovation
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Cette rubrique offre un espace collaboratif sécurisé où les chercheurs et entreprises peuvent :
            </p>
            
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            {/* Support Section */}
            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-100 mb-6 sm:mb-8">
              <p className="text-blue-800 text-sm sm:text-base">
                <span className="font-semibold">Accompagnement sur mesure :</span> Chaque projet bénéficie d'un accompagnement personnalisé pour maximiser son potentiel d'innovation.
              </p>
            </div>

            {/* Stats Grid - Added for social proof */}
            <div className="grid grid-cols-2 gap-4 mb-6 sm:mb-8">
              {[
                { value: "200+", label: "Projets actifs" },
                { value: "85%", label: "Taux de réussite" },
                { value: "40+", label: "Domaines couverts" },
                { value: "24/7", label: "Support disponible" }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center">
                  <p className="text-blue-600 font-bold text-lg sm:text-xl">{stat.value}</p>
                  <p className="text-gray-600 text-xs sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                Explorer les projets
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}











































/*export default function ProjectSpace() {
  const features = [
    "Déposer et structurer leurs projets de recherche",
    "Travailler en co-création avec des partenaires industriels",
    "Suivre l'avancement et mesurer l'impact des projets en temps réel",
    "Obtenir des suggestions IA pour optimiser la faisabilité et le financement du projet"
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          {}
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
              alt="Équipe multidisciplinaire travaillant sur un projet de recherche" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>

          {}
          <div className="md:w-1/2 md:pl-10" data-aos="fade-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              3. Espace Projets – Valorisation de la Recherche & Innovation
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Cette rubrique offre un espace collaboratif sécurisé où les chercheurs et entreprises peuvent :
            </p>
            <ul className="space-y-3 mb-6">
              {features.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {}
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-blue-800">
                <span className="font-semibold">Accompagnement sur mesure :</span> Chaque projet bénéficie d'un accompagnement personnalisé pour maximiser son potentiel d'innovation.
              </p>
            </div>

            {}
            <div className="flex justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md">
                Explorer les projets
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}*/