export default function Features() {
  const features = [
    {
      icon: 'fas fa-user-tie',
      title: 'Espace Membres',
      description: 'Profils personnalisés et réseau professionnel pour chercheurs et industriels'
    },
    {
      icon: 'fas fa-robot',
      title: 'Matching Intelligent',
      description: 'IA pour la mise en relation entre compétences et besoins'
    },
    {
      icon: 'fas fa-project-diagram',
      title: 'Espace Projets',
      description: 'Valorisation de la recherche et innovation collaborative'
    },
    {
      icon: 'fas fa-hand-holding-usd',
      title: 'Financements',
      description: 'Accès aux investisseurs et opportunités de financement'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Fonctionnalités Clés</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment InnoLink révolutionne la collaboration entre la recherche et l'industrie
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-blue-600 text-4xl mb-6">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}