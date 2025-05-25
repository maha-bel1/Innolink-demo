import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Device orientation handler
const handleOrientationChange = () => {
  if (window.matchMedia("(orientation: portrait)").matches) {
    document.documentElement.classList.add('portrait')
    document.documentElement.classList.remove('landscape')
  } else {
    document.documentElement.classList.add('landscape')
    document.documentElement.classList.remove('portrait')
  }
}

// Initialize AOS with responsive settings
const initAOS = () => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    disable: window.innerWidth < 640, // Disable animations on mobile if needed
    startEvent: 'DOMContentLoaded'
  })
}

// Main render function
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Responsive initialization
document.addEventListener('DOMContentLoaded', () => {
  // Handle initial orientation
  handleOrientationChange()
  
  // Add orientation change listener
  window.addEventListener('resize', handleOrientationChange)
  
  // Initialize AOS
  initAOS()
  
  // Cleanup on unmount
  return () => {
    window.removeEventListener('resize', handleOrientationChange)
  }
})
























/*import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

 Initialize AOS after React DOM renders
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
})*/
