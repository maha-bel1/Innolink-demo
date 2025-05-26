import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS after React DOM renders
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
})
