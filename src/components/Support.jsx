export default function Support() {
  const supportFeatures = [
    {
      icon: 'fas fa-robot',
      title: 'Chatbot IA',
      description: 'Réponses instantanées à vos questions fréquentes',
      delay: 100
    },
    {
      icon: 'fas fa-headset',
      title: 'Support personalisé',
      description: 'Équipe d\'experts en innovation et R&D',
      delay: 200
    },
    {
      icon: 'fas fa-hands-helping',
      title: 'Accompagnement sur mesure',
      description: 'Optimisation des collaborations et maximisation de l\'impact des projets',
      delay: 300
    }
  ];

  return (
    <section id="support" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            <span className="text-blue-600">7. Assistance & Support</span> – Chatbot IA & Accompagnement
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Pour garantir une expérience utilisateur fluide et efficace, InnoLink propose un système d'assistance avancé:
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {supportFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 hover:bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={feature.delay}
            >
              <div className="text-blue-600 text-3xl sm:text-4xl mb-4 sm:mb-6 flex justify-center">
                <i className={`${feature.icon} transition-transform duration-300 group-hover:scale-110`}></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 sm:p-8 text-white shadow-lg" data-aos="fade-up">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="lg:w-2/3 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Besoin d'aide ?</h3>
              <p className="text-sm sm:text-base text-blue-100">
                Notre équipe est disponible pour répondre à toutes vos questions sur la plateforme et vos projets.
              </p>
            </div>
            <div className="lg:w-1/3 flex justify-center lg:justify-end">
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 hover:shadow-lg transition-all duration-300 font-medium whitespace-nowrap shadow-md">
                <i className="fas fa-envelope mr-2"></i>
                Contacter le support
              </button>
            </div>
          </div>
        </div>

        {/* Additional Support Options (Mobile Only) */}
        <div className="mt-8 lg:hidden">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-3">Autres moyens de contact :</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <i className="fas fa-phone-alt text-blue-500 mr-2 w-5"></i>
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-comment-alt text-blue-500 mr-2 w-5"></i>
                <span>Chat en direct</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-calendar-alt text-blue-500 mr-2 w-5"></i>
                <span>Prendre rendez-vous</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}























































/* export default function Support() {
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
} */