export default function Events() {
  const upcomingEvents = [
    {
      title: "Webinaire et conférences animés par des experts internationaux: Financement de l'innovation",
      date: "15 Juin 2025",
      description: "Découvrez les opportunités de financement pour vos projets innovants"
    },
    {
      title: "Atelier pratiques: La gestion de projet et le financement",
      date: "22 Juin 2025",
      description: "Apprenez à protéger vos inventions et innovations"
    },
    {
      title: "Session de pitch devant investisseurs",
      date: "30 Juin 2025",
      description: "Présentez vos idées et projets à des investisseurs potentiels"
    }
  ]

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            6. Événements & Webinaires Exclusifs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            L'écosystème de l'innovation repose sur le partage des connaissances et le réseautage. InnoLink organise:
          </p>
          {/* Added section */}
          <div className="bg-blue-50 inline-block px-6 py-3 rounded-full">
            <p className="text-blue-700 font-medium flex items-center">
              <i className="fas fa-handshake mr-2"></i>
              Ces événements sont une opportunité unique de networking et d'apprentissage sur les tendances de l'industrie.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.map((event, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-calendar-alt text-blue-600"></i>
                </div>
                <p className="text-blue-600 font-medium">{event.date}</p>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{event.title}</h3>
              <p className="text-gray-600 mb-5">{event.description}</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center group">
                S'inscrire 
                <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-blue-200 flex items-center mx-auto">
            <i className="fas fa-calendar-check mr-2"></i>
            Voir tous les événements
          </button>
        </div>
      </div>
    </section>
  )
}