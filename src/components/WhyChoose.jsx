export default function WhyChoose() {
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
}