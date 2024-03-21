
// express allows you to write APIs, handle HTTP requets, and impleent middleware into your server side app
// fetch a url in our app, sits on server side, and runs on node, de facto standard for creating routes in Node.js apps
// core of express are routes, 
// routes allow us to send recieve data
// HTTP Methods
// post-submits data to the specified resource 
// get retrieves a resource from the server
// delete deletes a specificed resourse
// put/patch updated a specified resource with a payload

// we use the Fetch API to make requets to the express.js server

// Import Express.js
const express = require('express');

// Import built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require('path');

// Initialize an instance of Express.js conventional variable name for express is app
const app = express();

// Specify on which port the Express.js server will run
const PORT = 3001;

// Static middleware pointing to the public folder
app.use(express.static('public'));

// Create Express.js routes for default '/', '/send' and '/routes' endpoints
app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/sendFile.html'))
);

app.get('/routes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/routes.html'))
);

// listen() method is responsible for listening for incoming connections on the specified port 
// set up to listen for requests
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

