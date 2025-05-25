export default function Funding() {
  const benefits = [
    "Accès direct aux investisseurs et aux fonds publics et privés",
    "Mise en avant des opportunités de financement adaptées à chaque projet",
    "Évaluation IA des chances de succès pour mieux orienter les demandes",
    "Accompagnement pour rédiger des dossiers solides et convaincre les financeurs"
  ];

  return (
    <section id="funding" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content - Left Side */}
          <div className="lg:w-1/2 lg:pr-8 xl:pr-10" data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              4. Financements & Opportunités d'Investissement
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Les financements et subventions sont essentiels pour transformer une idée en réalité économique. Cette rubrique permet :
            </p>
            
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-chart-line text-green-500 mt-1 mr-3 text-sm sm:text-base"></i>
                  <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-green-50 p-4 sm:p-6 rounded-lg border border-green-100">
              <p className="text-green-800 font-medium text-sm sm:text-base">
                Grâce à cette section, les startups deeptech et projets innovants trouvent les ressources nécessaires pour passer à l'échelle supérieure.
              </p>
            </div>
          </div>
          
          {/* Image - Right Side */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0" data-aos="fade-left">
            <div className="relative overflow-hidden rounded-lg shadow-xl aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" 
                alt="Financements" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






















































/*export default function Funding() {
  const benefits = [
    "Accès direct aux investisseurs et aux fonds publics et privés",
    "Mise en avant des opportunités de financement adaptées à chaque projet",
    "Évaluation IA des chances de succès pour mieux orienter les demandes",
    "Accompagnement pour rédiger des dossiers solides et convaincre les financeurs"
  ]

  return (
    <section id="funding" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              4. Financements & Opportunités d'Investissement
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Les financements et subventions sont essentiels pour transformer une idée en réalité économique. Cette rubrique permet :
            </p>
            <ul className="space-y-3 mb-8">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-chart-line text-green-500 mt-1 mr-3"></i>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <p className="text-green-800 font-medium">
                Grâce à cette section, les startups deeptech et projets innovants trouvent les ressources nécessaires pour passer à l'échelle supérieure.
              </p>
            </div>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" 
              alt="Financements" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}*/