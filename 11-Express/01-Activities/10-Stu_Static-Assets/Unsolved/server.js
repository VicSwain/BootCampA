const express = require('express');

const app = express();
const PORT = 3001;
const path = require('path');

// Serve images, css files, js files from the public directory
// Allows us to reference files with their relative path
// Example: http://localhost:3000/images/cat.jpg
// with this, you do not need the app.get
app.use(express.static('public'));
// original line, when using static this is not necessaryn as long as there is an index.html
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/')));

app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);
