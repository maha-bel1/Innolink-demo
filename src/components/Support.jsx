export default function Support() {
  const supportFeatures = [
    {
      icon: 'fas fa-robot',
      title: 'Chatbot IA',
      description: 'Réponses instantanées à vos questions fréquentes'
    },
    {
      icon: 'fas fa-headset',
      title: 'Support personalisé',
      description: 'Équipe d\'experts en innovation et R&D'
    },
    {
      icon: 'fas fa-hands-helping',
      title: 'Accompagnement sur mesure ',
      description: 'Optimisation des collaborations et maximisation de l\'impact des projets'
    }
  ]

  return (
    <section id="support" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            7. Assistance & Support – Chatbot IA & Accompagnement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pour garantir une expérience utilisateur fluide et efficace, InnoLink propose un système d'assistance avancé:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 text-center"
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
        
        <div className="mt-16 bg-blue-600 rounded-xl p-8 text-white" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-3">Besoin d'aide ?</h3>
              <p>Notre équipe est disponible pour répondre à toutes vos questions sur la plateforme et vos projets.</p>
            </div>
            <div className="md:w-1/3 text-center md:text-right">
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-medium">
                Contacter le support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}