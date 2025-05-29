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
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  // Get environment variables
  const enableAnimations = import.meta.env.VITE_ENABLE_ANIMATIONS === 'true'
  const appTitle = import.meta.env.VITE_APP_TITLE || 'InnoLink Platform'
  const appDescription = import.meta.env.VITE_APP_DESCRIPTION || 'Your Innovation Platform'

  useEffect(() => {
    // Initialize AOS with responsive settings if animations are enabled
    if (enableAnimations) {
      AOS.init({
        duration: 1000,
        once: false,
        offset: 50,
        easing: 'ease-out-cubic',
        mirror: true,
        anchorPlacement: 'top-bottom',
        disable: false,
        startEvent: 'DOMContentLoaded',
        disableMutationObserver: false,
        delay: 0
      })
    }

    // Handle preloader
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    // Enhanced device detection
    const checkDevice = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const isLandscape = width > height

      // Set device type
      if (width < 475) {
        setDeviceType('xs')
        setIsMobile(true)
        setIsTablet(false)
      } else if (width < 640) {
        setDeviceType('sm')
        setIsMobile(true)
        setIsTablet(false)
      } else if (width < 768) {
        setDeviceType('md')
        setIsMobile(false)
        setIsTablet(true)
      } else if (width < 1024) {
        setDeviceType('lg')
        setIsMobile(false)
        setIsTablet(true)
      } else if (width < 1280) {
        setDeviceType('xl')
        setIsMobile(false)
        setIsTablet(false)
      } else {
        setDeviceType('2xl')
        setIsMobile(false)
        setIsTablet(false)
      }

      // Add orientation class to body
      document.body.classList.toggle('landscape', isLandscape)
      document.body.classList.toggle('portrait', !isLandscape)
    }

    // Initial check
    checkDevice()

    // Add resize listener with debounce
    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(checkDevice, 250)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)

    // Refresh AOS on route change if animations are enabled
    if (enableAnimations) {
      const refreshAOS = () => {
        AOS.refresh()
      }

      window.addEventListener('scroll', refreshAOS)
      window.addEventListener('resize', refreshAOS)

      return () => {
        clearTimeout(timer)
        clearTimeout(resizeTimer)
        window.removeEventListener('resize', handleResize)
        window.removeEventListener('orientationchange', handleResize)
        window.removeEventListener('scroll', refreshAOS)
        window.removeEventListener('resize', refreshAOS)
      }
    }

    return () => {
      clearTimeout(timer)
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }, [enableAnimations])

  // Enhanced component rendering with responsive props
  const renderComponent = (Component, deviceProps = {}, aosProps = {}) => {
    const responsiveProps = {
      isMobile,
      isTablet,
      deviceType,
      ...deviceProps
    }

    const aosAttributes = enableAnimations ? {
      'data-aos': aosProps.animation || "fade-up",
      'data-aos-delay': aosProps.delay || "100",
      'data-aos-duration': aosProps.duration || "1000",
      'data-aos-easing': aosProps.easing || "ease-out-cubic",
      'data-aos-mirror': "true",
      'data-aos-once': "false"
    } : {}

    return (
      <div 
        className={`
          w-full 
          ${isMobile ? 'px-4' : isTablet ? 'px-6' : 'px-8'}
          ${aosProps.className || ''}
        `}
        {...aosAttributes}
      >
        <Component {...responsiveProps} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header isMobile={isMobile} isTablet={isTablet} deviceType={deviceType} />
          
          {/* Hero Section - Full Width */}
          <div 
            {...(enableAnimations ? {
              'data-aos': "fade-in",
              'data-aos-delay': "0",
              'data-aos-mirror': "true",
              'data-aos-once': "false"
            } : {})}
            className="w-full"
          >
            <Hero isMobile={isMobile} isTablet={isTablet} deviceType={deviceType} />
          </div>
          
          {/* Main Content - Responsive Container */}
          <main className="flex-1 w-full max-w-[1536px] mx-auto">
            {renderComponent(Features, { isMobile, isTablet }, { animation: "fade-up", delay: "200" })}
            {renderComponent(MemberSpace, { isMobile, isTablet }, { animation: "zoom-in", delay: "300" })}
            {renderComponent(MatchingIntelligent, { isMobile, isTablet }, { animation: "fade-left", delay: "400" })}
            {renderComponent(ProjectSpace, { isMobile, isTablet }, { animation: "fade-right", delay: "500" })}
            {renderComponent(Funding, { isMobile, isTablet }, { animation: "flip-up", delay: "600" })}
            {renderComponent(TechWatch, { isMobile, isTablet }, { animation: "zoom-in", delay: "700" })}
            {renderComponent(Events, { isMobile, isTablet }, { animation: "fade-up", delay: "800" })}
            {renderComponent(Support, { isMobile, isTablet }, { animation: "fade-left", delay: "900" })}
            {renderComponent(WhyChoose, { isMobile, isTablet }, { animation: "fade-right", delay: "1000" })}
          </main>
          
          <div 
            {...(enableAnimations ? {
              'data-aos': "fade-up",
              'data-aos-delay': "1100",
              'data-aos-mirror': "true",
              'data-aos-once': "false"
            } : {})}
          >
            <Footer isMobile={isMobile} isTablet={isTablet} deviceType={deviceType} />
          </div>
        </>
      )}

      {/* Mobile-specific overlay */}
      {isMobile && (
        <div 
          className="fixed bottom-4 right-4 z-50" 
          {...(enableAnimations ? {
            'data-aos': "fade-up",
            'data-aos-delay': "1200",
            'data-aos-mirror': "true",
            'data-aos-once': "false"
          } : {})}
        >
          <button 
            className="bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
            aria-label="Chat support"
          >
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