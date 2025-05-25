export default function Features({ isMobile }) {
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
    <section id="features" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Fonctionnalités Clés</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment InnoLink révolutionne la collaboration entre la recherche et l'industrie
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-blue-600 text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}