import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Innolink-demo/',
  plugins: [react()],
  // Environment variables configuration
  envPrefix: 'VITE_',
  // Only expose specific environment variables
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL)
  },
  // Server configuration for security headers
  server: {
    headers: {
      // Prevent clickjacking
      'X-Frame-Options': 'SAMEORIGIN',
      // Prevent MIME type sniffing
      'X-Content-Type-Options': 'nosniff',
      // Enable XSS protection
      'X-XSS-Protection': '1; mode=block',
      // Control referrer information
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      // Enable HSTS
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
      // Prevent browser from detecting the MIME type
      'X-Download-Options': 'noopen',
      // Prevent IE from executing downloads in your site's context
      'X-Permitted-Cross-Domain-Policies': 'none',
      // Content Security Policy with enhanced security rules
      'Content-Security-Policy': `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
        style-src 'self' 'unsafe-inline' https:;
        font-src 'self' data: https:;
        img-src 'self' data: https:;
        connect-src 'self' https:;
        frame-ancestors 'self';
        form-action 'self';
        base-uri 'self';
        object-src 'none';
        worker-src 'self' blob:;
        media-src 'self' https:;
        manifest-src 'self';
        upgrade-insecure-requests;
        block-all-mixed-content;
      `.replace(/\s+/g, ' ').trim()
    },
    // Enable CORS
    cors: {
      origin: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true
    },
    // Rate limiting
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:3000',
        changeOrigin: true,
        secure: true,
        ws: true,
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        }
      }
    }
  },
  // Build configuration
  build: {
    // Enable source maps in production for better error tracking
    sourcemap: true,
    // Minify the output
    minify: 'terser',
    // Terser options for better minification
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Rollup options
    rollupOptions: {
      output: {
        // Split chunks for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['aos']
        }
      }
    }
  }
})
