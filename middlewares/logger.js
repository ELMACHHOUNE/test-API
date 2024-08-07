// middlewares/logger.js
const logger = (req, res, next) => {
    const { method, url } = req;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${method} - ${url}`);
    next(); // Call the next middleware or route handler
  };
  
  module.exports = logger;
  