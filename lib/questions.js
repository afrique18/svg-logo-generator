const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Enter the shape you want',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for your logo:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color for your logo:',
    },  

];

module.exports = questions 