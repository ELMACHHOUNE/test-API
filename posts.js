// posts.js
const express = require('express');
const router = express.Router();

// Route to create a new post
router.post('/post', (req, res) => {
  const newPostData = req.body;
  // Logic to save the new post (e.g., saving to a database)

  // For demonstration, simply send back the received data
  res.status(201).send({
    message: 'Post created successfully!',
    post: newPostData
  });
});

// Route to handle a single post
router.route('/post/:slug')
  .get((req, res) => {
    const { slug } = req.params;
    // Fetch and render a single post based on the slug
    res.send(`Render post with slug: ${slug}`);
  })
  .put((req, res) => {
    const { slug } = req.params;
    const updatedPostData = req.body;
    // Update the post with the provided data
    res.send(`Update post with slug: ${slug} using data: ${JSON.stringify(updatedPostData)}`);
  })
  .delete((req, res) => {
    const { slug } = req.params;
    // Logic to delete the post with the given slug
    res.send(`Delete post with slug: ${slug}`);
  });

module.exports = router;
