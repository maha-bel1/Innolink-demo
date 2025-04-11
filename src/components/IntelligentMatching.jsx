export default function IntelligentMatching() {
    const features = [
      "Analyse en temps réel des compétences et besoins",
      "Mise en relation stratégique grâce au machine learning",
      "Anticipation des besoins émergents",
      "Réduction du temps de recherche de partenaires"
    ]
  
    return (
      <section id="matching" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1" data-aos="fade-right">
              <img 
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                alt="Matching Intelligent" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-10 order-1 md:order-2" data-aos="fade-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                2. Matching Intelligent – IA pour la Mise en Relation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Le matching intelligent est le cœur d'InnoLink. Grâce à un algorithme basé sur l'IA et le machine learning, la plateforme analyse en temps réel les compétences et besoins.
              </p>
              <ul className="space-y-3 mb-8">
                {features.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-brain text-blue-500 mt-1 mr-3"></i>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <p className="text-blue-800 font-medium">
                  L'IA propose des partenariats stratégiques, réduisant ainsi le temps de recherche et maximisant les opportunités de collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }