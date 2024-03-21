const inquirer = require('inquirer');
const fs = require("fs")
const readMeQuestions = require(`./utils/readMeQuestions`)
const createReadMeTemplate = require("./utils/createReadMeTemplate")
// console.log("readMe Questions: ")

function app(){

  inquirer
  .prompt(readMeQuestions)
  .then((readMeData) => {
    console.log(readMeData)
    const template = createReadMeTemplate(readMeData)
    fs.writeFileSync("sampleReadMe.md", template)
    // readMeData.confirm === readMeData.password // condition
    //   ? console.log('Success!') // if the condition is true
    //   : console.log('You forgot your password already?!') // else if the condition is false
   } );
  }

  app()
   