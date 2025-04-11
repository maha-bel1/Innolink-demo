import memberImage from '../assets/images/pexels-fauxels-3183197.jpg';

export default function MemberSpace() {
  const benefits = [
    "Renseigner votre expertise, compétences et domaines de recherche",
    "Ajouter vos publications scientifiques, brevets et projets en cours",
    "Accéder à un réseau professionnel dynamique et échanger avec d'autres membres",
    "Recevoir des recommandations personnalisées grâce à l'Intelligence Artificielle intégrée"
  ]

  // Sample search filters
  const filters = [
    "Domaine de recherche",
    "Compétences techniques",
    "Localisation",
    "Type d'institution",
    "Disponibilité pour collaboration"
  ]

  return (
    <section id="members" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              1. Espace Membres – Profils Personnalisés & Réseau Professionnel
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              L'Espace Membres permet à chaque utilisateur de créer un profil détaillé et interactif. Que vous soyez chercheur, doctorant, industriel ou investisseur.
            </p>
            <ul className="space-y-3">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            {/* Enhanced Search Component */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Trouvez les partenaires idéaux
              </h3>
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Rechercher des membres par expertise, compétences, localisation..."
                  className="w-full px-4 py-3 pr-12 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400">
                  <i className="fas fa-search text-sm"></i>
                </button>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-600 mb-2">Filtres avancés :</h4>
                <div className="flex flex-wrap gap-2">
                  {filters.map((filter, index) => (
                    <button 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200"
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Plus de 5,000 profils disponibles</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition text-sm">
                  Recherche avancée
                </button>
              </div>
            </div>
            
            <button className="w-full mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition">
              Créer votre profil
            </button>
          </div>
          
          <div className="md:w-1/2" data-aos="fade-left">
            <img 
              src={memberImage} 
              alt="Professionnels discutant autour d'une table avec des documents de recherche" 
              className="rounded-lg shadow-xl object-cover h-full max-h-[500px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}