import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import MemberSpace from './components/MemberSpace'
import MatchingIntelligent from './components/MatchingIntelligent'
import ProjectSpace from './components/ProjectSpace'
import Funding from './components/Funding'
import TechWatch from './components/TechWatch'
import Events from './components/Events'
import Support from './components/Support'
import WhyChoose from './components/WhyChoose'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [deviceType, setDeviceType] = useState('desktop')

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
      mirror: false,
      anchorPlacement: 'top-bottom'
    })

    // Handle preloader
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    // Check device type
    const checkDevice = () => {
      const width = window.innerWidth
      if (width < 475) {
        setDeviceType('xs')
      } else if (width < 640) {
        setDeviceType('sm')
      } else if (width < 768) {
        setDeviceType('md')
      } else if (width < 1024) {
        setDeviceType('lg')
      } else if (width < 1280) {
        setDeviceType('xl')
      } else {
        setDeviceType('2xl')
      }
    }

    // Initial check
    checkDevice()

    // Add resize listener with debounce
    let resizeTimer
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(checkDevice, 250)
    })

    return () => {
      clearTimeout(timer)
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', checkDevice)
    }
  }, [])

  // Component loading strategy with responsive animations
  const renderComponent = (Component, deviceProps = {}, aosProps = {}) => (
    <div 
      className={`w-full ${deviceType === 'xs' || deviceType === 'sm' ? 'px-4' : 'px-6'}`}
      data-aos={aosProps.animation || "fade-up"} 
      data-aos-delay={aosProps.delay || "100"}
      data-aos-duration={aosProps.duration || "1000"}
      data-aos-easing={aosProps.easing || "ease-out-cubic"}
    >
      <Component {...(deviceType === 'xs' || deviceType === 'sm' ? deviceProps : {})} />
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header deviceType={deviceType} />
          
          {/* Hero Section - Full Width */}
          <div data-aos="fade-in" data-aos-delay="0">
            <Hero isMobile={deviceType === 'xs' || deviceType === 'sm'} />
          </div>
          
          {/* Other Sections - Contained Width */}
          <main className="flex-1 w-full max-w-[1536px] mx-auto">
            {renderComponent(Features, { isMobile: deviceType === 'xs' || deviceType === 'sm' }, { animation: "fade-up", delay: "200" })}
            {renderComponent(MemberSpace, { compact: deviceType === 'xs' || deviceType === 'sm' }, { animation: "zoom-in", delay: "300" })}
            {renderComponent(MatchingIntelligent, { isMobile: deviceType === 'xs' || deviceType === 'sm' }, { animation: "fade-left", delay: "400" })}
            {renderComponent(ProjectSpace, { compact: deviceType === 'xs' || deviceType === 'sm' }, { animation: "fade-right", delay: "500" })}
            {renderComponent(Funding, { compact: deviceType === 'xs' || deviceType === 'sm' }, { animation: "flip-up", delay: "600" })}
            {renderComponent(TechWatch, { isMobile: deviceType === 'xs' || deviceType === 'sm' }, { animation: "zoom-in", delay: "700" })}
            {renderComponent(Events, { compact: deviceType === 'xs' || deviceType === 'sm' }, { animation: "fade-up", delay: "800" })}
            {renderComponent(Support, { isMobile: deviceType === 'xs' || deviceType === 'sm' }, { animation: "fade-left", delay: "900" })}
            {renderComponent(WhyChoose, { compact: deviceType === 'xs' || deviceType === 'sm' }, { animation: "fade-right", delay: "1000" })}
          </main>
          
          <Footer deviceType={deviceType} />
        </>
      )}

      {/* Mobile-specific overlay */}
      {(deviceType === 'xs' || deviceType === 'sm') && (
        <div className="fixed bottom-4 right-4 z-50" data-aos="fade-up" data-aos-delay="1100">
          <button className="bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 transition">
            <i className="fas fa-comment-alt text-xl"></i>
          </button>
        </div>
      )}
    </div>
  )
}

export default App

































































































































































/*import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import MemberSpace from './components/MemberSpace'
import MatchingIntelligent from './components/MatchingIntelligent'
import ProjectSpace from './components/ProjectSpace'
import Funding from './components/Funding'
import TechWatch from './components/TechWatch'
import Events from './components/Events'
import Support from './components/Support'
import WhyChoose from './components/WhyChoose'
import Footer from './components/Footer'
import Preloader from './components/Preloader'


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header  />
          <main>
            <Hero />
            <Features />
            <MemberSpace />
            <MatchingIntelligent />
            <ProjectSpace />
            <Funding />
            <TechWatch />
            <Events />
            <Support />
            <WhyChoose />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App*/