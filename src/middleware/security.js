import { rateLimitConfig, corsOptions } from '../security';

// Rate limiting middleware
export const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const now = Date.now();
  const windowStart = now - rateLimitConfig.windowMs;

  // In a real application, you would use Redis or a similar store
  // This is a simple in-memory implementation
  if (!req.app.locals.rateLimit) {
    req.app.locals.rateLimit = new Map();
  }

  const userRequests = req.app.locals.rateLimit.get(ip) || [];
  const recentRequests = userRequests.filter(time => time > windowStart);

  if (recentRequests.length >= rateLimitConfig.max) {
    return res.status(429).json({
      error: 'Too many requests',
      message: 'Please try again later'
    });
  }

  recentRequests.push(now);
  req.app.locals.rateLimit.set(ip, recentRequests);
  next();
};

// CORS middleware
export const corsMiddleware = (req, res, next) => {
  const origin = req.headers.origin;
  
  if (corsOptions.origin.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', corsOptions.methods.join(','));
    res.setHeader('Access-Control-Allow-Headers', corsOptions.allowedHeaders.join(','));
    res.setHeader('Access-Control-Max-Age', corsOptions.maxAge);
    
    if (corsOptions.credentials) {
      res.setHeader('Access-Control-Allow-Credentials', 'true');
    }
  }

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  next();
};

// XSS Protection middleware
export const xssProtection = (req, res, next) => {
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
};

// Content Security Policy middleware
export const cspMiddleware = (req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.example.com;"
  );
  next();
};

// Request validation middleware
export const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: 'Validation Error',
        message: error.details[0].message
      });
    }
    next();
  };
};

// Authentication middleware
export const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({
      error: 'Authentication Error',
      message: 'No token provided'
    });
  }

  try {
    // In a real application, you would verify the JWT token here
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      error: 'Authentication Error',
      message: 'Invalid token'
    });
  }
}; 