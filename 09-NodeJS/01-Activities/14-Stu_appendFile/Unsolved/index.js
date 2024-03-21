// TODO: What are we importing?
const fs = require('fs');
//  the appendFile will create the file if there is not one, otherwise it will just append
// TODO: Add comments to explain each of the three arguments of appendFile()
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!')
);
