// app.js
const express = require('express');
const bodyParser = require('body-parser');
const postsRouter = require('./posts');

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Route for root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Blog API!');
});

// Mount the posts router under '/blog'
app.use('/blog', postsRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
