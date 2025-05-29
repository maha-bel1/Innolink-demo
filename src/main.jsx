import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { securityHeaders } from './security'

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  mirror: false,
  disable: 'mobile'
})

// Apply security headers
Object.entries(securityHeaders).forEach(([key, value]) => {
  document.head.appendChild(
    Object.assign(document.createElement('meta'), {
      httpEquiv: key,
      content: value
    })
  )
})

// Error boundary for the entire app
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try refreshing the page.</h1>
    }

    return this.props.children
  }
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
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)

// Initialize responsive features
document.addEventListener('DOMContentLoaded', () => {
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
