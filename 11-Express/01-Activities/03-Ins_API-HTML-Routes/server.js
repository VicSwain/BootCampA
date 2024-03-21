const express = require('express');

const PORT = 3001;
const app = express();

// We can send a body parameter to the client using the res.send() method. This body parameter can be a string, buffer, or even an array.
// a Buffer is a way to store and manipulate binary data in Node. js. Binary data refers to data that consists of binary values, as opposed to text data, which consists of characters and symbols. Examples of binary data include images, audio and video files, and raw data from a network.
app.get('/', (req, res) => {
  res.send(
    `<p>API - An application programming interface, is a computing interface that defines interactions between multiple software intermediaries</p>`
  );
});

// This method sends a JSON response with the correct content type.
app.get('/api', (req, res) => {
  // express way to return data 
  res.json({
    term: 'api',
    description:
      'An application programming interface, is a computing interface that defines interactions between multiple software intermediaries',
  });
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
