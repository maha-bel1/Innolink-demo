export default function ProjectSpace() {
  const features = [
    "Déposer et structurer leurs projets de recherche",
    "Travailler en co-création avec des partenaires industriels",
    "Suivre l'avancement et mesurer l'impact des projets en temps réel",
    "Obtenir des suggestions IA pour optimiser la faisabilité et le financement du projet"
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image (Left) - Updated to show project collaboration */}
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
              alt="Équipe multidisciplinaire travaillant sur un projet de recherche" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>

          {/* Content (Right) */}
          <div className="md:w-1/2 md:pl-10" data-aos="fade-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              3. Espace Projets – Valorisation de la Recherche & Innovation
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Cette rubrique offre un espace collaboratif sécurisé où les chercheurs et entreprises peuvent :
            </p>
            <ul className="space-y-3 mb-6">
              {features.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* Added personalized support section */}
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-blue-800">
                <span className="font-semibold">Accompagnement sur mesure :</span> Chaque projet bénéficie d'un accompagnement personnalisé pour maximiser son potentiel d'innovation.
              </p>
            </div>

            {/* Centered button - Updated to be always centered */}
            <div className="flex justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md">
                Explorer les projets
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}