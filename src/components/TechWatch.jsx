export default function TechWatch() {
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

            {/* Enhanced AI Section */}
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
}