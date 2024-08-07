// posts.js
const express = require('express');
const router = express.Router();
const validatePostData = require('./middlewares/validateRequest');

// In-memory storage for posts (for demonstration purposes)
const posts = [];

// Route to create a new post with validation
router.post('/post', validatePostData, (req, res) => {
  const newPostData = req.body;
  posts.push(newPostData); // Save the new post to the in-memory storage

  // For demonstration, simply send back the received data
  res.status(201).send({
    message: 'Post created successfully!',
    post: newPostData,
  });
});

// Route to handle a single post
router.route('/post/:slug')
  .get((req, res) => {
    const { slug } = req.params;
    const post = posts.find(p => p.slug === slug);

    if (post) {
      res.render('post', { post }); // Render the post using EJS
    } else {
      res.status(404).send(`Post with slug: ${slug} not found`);
    }
  })
  .put(validatePostData, (req, res) => {
    const { slug } = req.params;
    const updatedPostData = req.body;
    const postIndex = posts.findIndex(p => p.slug === slug);

    if (postIndex !== -1) {
      posts[postIndex] = updatedPostData; // Update the post in the in-memory storage
      res.send(`Update post with slug: ${slug} using data: ${JSON.stringify(updatedPostData)}`);
    } else {
      res.status(404).send(`Post with slug: ${slug} not found`);
    }
  })
  .delete((req, res) => {
    const { slug } = req.params;
    const postIndex = posts.findIndex(p => p.slug === slug);

    if (postIndex !== -1) {
      posts.splice(postIndex, 1); // Delete the post from the in-memory storage
      res.send(`Delete post with slug: ${slug}`);
    } else {
      res.status(404).send(`Post with slug: ${slug} not found`);
    }
  });

// Route to get all posts
router.get('/posts', (req, res) => {
  res.render('posts', { posts }); // Render the posts using EJS
});

module.exports = router;
