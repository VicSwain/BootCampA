// TODO: Import express
const express = require('express');
// TODO: Import 'terms.json' file
const terms = require('./terms.json')  
const path = require('path');
const PORT = 3001;

// TODO: Initialize app variable
const app = express();

app.get('/', (req, res) => res.send('Visit http://localhots:3001/api'));
// TODO: Create a route for a GET request that will return the content of our `terms.json` file
// api is the name we give it that will show up in the url. 
app.get('/api', (req, res) => {
  res.json(terms)
    })

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


