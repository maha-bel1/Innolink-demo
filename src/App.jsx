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

export default App