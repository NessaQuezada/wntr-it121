
// First Import the express module using ES6 import syntax
import express from 'express';

// Now I create an express application
const app = express();

//I  Define the port number
const PORT = 3000;

// This is the route for my new  home page!!!
app.get('/', (req, res) => {
  res.send('<h1>Welcome to my Web Server</h1><p>This is the home page of my application.</p>');
});

// Route for the about page
app.get('/about', (req, res) => {
  res.send('<h1>About Me</h1><p>My name is Vanessa Garcia. I am a web development student.</p>');
});

// last line of defense catches 404 errors
app.use((req, res) => {
  res.status(404).send('<h1>404 Error</h1><p>The page you are looking for isn\'t here.</p>');
});

// now I start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});