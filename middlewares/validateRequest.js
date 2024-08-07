// middlewares/validateRequest.js
const validatePostData = (req, res, next) => {
    const { title, content, author } = req.body;
  
    if (!title || !content || !author) {
      return res.status(400).json({
        message: 'Missing required fields: title, content, and author',
      });
    }
  
    next(); // Proceed if validation is successful
  };
  
  module.exports = validatePostData;
  