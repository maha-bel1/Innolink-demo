export default function Funding() {
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
}