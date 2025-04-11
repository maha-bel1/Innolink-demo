import heroImage from '../assets/images/9e937f88dbcb3b29af72bf3a136f2c9a.jpg';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center h-full">
        <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            InnoLink by Dowok – Connecter la Recherche à l'Innovation
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Transformons les idées en impact grâce à une collaboration intelligente entre chercheurs, entreprises et investisseurs.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-200 transition">
              Démarrer maintenant
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
          <img 
            src={heroImage} 
            alt="Team of researchers and business professionals analyzing data" 
            className="rounded-lg shadow-2xl object-cover w-full max-w-[600px] h-[70vh] min-h-[400px]"
          />
        </div>
      </div>
    </section>
  )
}