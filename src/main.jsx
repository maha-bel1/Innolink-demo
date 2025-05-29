import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS with responsive settings
const initAOS = () => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false,
    mirror: true,
    startEvent: 'DOMContentLoaded'
  })
}

// Handle device orientation
const handleOrientation = () => {
  const isLandscape = window.matchMedia("(orientation: landscape)").matches
  document.documentElement.classList.toggle('landscape', isLandscape)
  document.documentElement.classList.toggle('portrait', !isLandscape)
}

// Main render function
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Initialize responsive features
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  initAOS()
  
  // Handle initial orientation
  handleOrientation()
  
  // Add orientation change listener
  window.addEventListener('resize', handleOrientation)
  window.addEventListener('orientationchange', handleOrientation)
  
  // Cleanup on unmount
  return () => {
    window.removeEventListener('resize', handleOrientation)
    window.removeEventListener('orientationchange', handleOrientation)
  }
})
