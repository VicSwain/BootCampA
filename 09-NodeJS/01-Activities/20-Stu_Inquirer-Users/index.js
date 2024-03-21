const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./questions');
// const writeFile = require('./writeFile');
inquirer
.prompt (questions).then((data) => {
    console.log(data);
    fs.writeFile('log.txt', function (err) {
err ? console.error(err) : console.log('Success!')
    });
});
// );
// writeFile();