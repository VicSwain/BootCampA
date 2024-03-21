const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  console.info(`${req.method} request received for diagnostics`);
  readFromFile('./routes/diagnostics.js').then((data) => res.json(JSON.parse(data)));


  
  

// POST Route for a error logging
diagnostics.post('/', (req, res) => {

  const { time, errors, tip, topic, username } = req.body;

  if (req.body) {
    const newDiagnostic = {
      time,
      errors,
      tip,
      topic,
      username,
      error_id: uuid(),
    };
  // TODO: Logic for appending data to the db/diagnostics.json file
    readAndAppend(newDiagnostic, './db/diagnostics.json');
    res.json(`Tip added successfully 🚀`);
  } else {
    res.error('Error in adding tip');
  }
});
  
});

module.exports = diagnostics;
