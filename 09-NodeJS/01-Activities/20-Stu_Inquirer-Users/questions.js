const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'username',
    },
    {
      type: 'list',
      message: 'What languages do you know?',
      name: 'language',
      choices: ['HTML', 'JS', 'CSS']  
    },

    {
        type: 'checkbox',
        message: 'What is your preffered method of communication?',
        name: 'communication',
        choices: ['Phone', 'Text', 'E-Mail']
    },
];

module.exports = questions;