const express = require('express');
// Helper function to sort our data in ascending and descending order
const { sortData } = require('./sortData');
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

const sortHelper = (type) =>
  termData.sort(sortData('term', 'relevance', `${type}`));

// TODO: Add a comment describing the functionality of this route
// create express route 
app.get('/api/terms/', (req, res) => {
  // TODO: Add a comment describing the req.query object
// check 
console.log(req);
// const variable that ensure the users enters something returning 
  const hasQuery = Object.keys(req.query).length > 0;
  console.log(hasQuery);
// check for dsc query param
  if (hasQuery && req.query.sort === 'dsc') {
    return res.json(sortHelper('dsc'));
  }
// check for asc query param 
  if (hasQuery && req.query.sort === 'asc') {
    return res.json(sortHelper('asc'));
  }

  // If there is no query parameter, return terms
  return res.json(termData);
});

// TODO: Add a comment describing what this route will return
// assigning term param to be entered by user
app.get('/api/term/:term', (req, res) => {
  // TODO: Add a comment describing the content of req.params in this instance
  // const to store users param 
  const requestedTerm = req.params.term.toLowerCase();
// iterate through terms to find param match
  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      return res.json(termData[i]);
    }
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No term found');
});

// TODO: Add a comment describing what this route will return
//assigning category param 
app.get('/api/terms/:category', (req, res) => {
  const requestedCategory = req.params.category.toLowerCase();
  const result = [];

  for (let i = 0; i < termData.length; i++) {
    const currentTermCategory = termData[i].category;
    if (requestedCategory === currentTermCategory) {
      result.push(termData[i]);
    }
  }
  return res.json(result);
});

// TODO: Add a comment describing what this route will return

app.get('/api/categories', (req, res) => {
  const categories = termData.map((term) => term.category);

  const result = categories.filter((cat, i) => categories.indexOf(cat) === i);

  return res.json(result);
});

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT}`)
);
