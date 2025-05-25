export default function Preloader() {
  return (
    <div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 transition-opacity duration-500"
      role="status"
      aria-label="Loading"
    >
      {/* Logo with bounce animation */}
      <div className="relative mb-6">
        <img 
          src="/src/assets/images/innolinklogo.png"  
          alt="InnoLink Logo" 
          className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border-2 border-white/20 shadow-lg animate-bounce"
          style={{ animationDuration: '2s' }}
          loading="eager"
        />
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 animate-ping" 
             style={{ animationDuration: '3s' }}></div>
      </div>

      {/* Spinner with smooth animation */}
      <div className="relative mb-6 sm:mb-8">
        <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-4 border-blue-200 border-t-blue-400"></div>
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-2 border-white/10"></div>
      </div>

      {/* Brand text with fade-in animation */}
      <div className="text-center animate-fadeIn">
        <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">InnoLink</span>
        <span className="block text-sm sm:text-base text-blue-100 mt-1">by Dowok</span>
      </div>

      {/* Loading progress bar */}
      <div className="w-40 sm:w-56 h-1.5 bg-white/10 rounded-full overflow-hidden mt-6 sm:mt-8">
        <div 
          className="h-full bg-blue-300 rounded-full animate-loadingBar"
          style={{ animationDuration: '2.5s' }}
        ></div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes loadingBar {
          0% { width: 0%; }
          80% { width: 90%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  )
}




















/*export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-blue-900 transition-opacity duration-500">
      <img 
        src="/src/assets/images/b139d66d0c97ff06c97d6dffd4899954.jpg"  
        alt="InnoLink Logo" 
        className="h-16 w-16 rounded mb-4 animate-pulse"
      />
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400 mb-6"></div>
      <span class="text-2xl font-bold text-white">InnoLink</span>
      <span class="ml-1 text-sm text-white">by Dowok</span>
    </div>
  )
}*/