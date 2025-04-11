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
      <section id="matching" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              2. Matching Intelligent – IA pour la Mise en Relation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Le matching intelligent est le coeur d'InnoLink. Grâce à un algorithme basé sur l'IA et le machine learning, la plateforme analyse en temps réel: 
            </p>
          </div>
  
          {/* Content Grid */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* AI Visualization (Left) */}
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
  
            {/* Features List (Right) */}
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
  }