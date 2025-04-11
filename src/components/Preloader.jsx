export default function Preloader() {
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
}