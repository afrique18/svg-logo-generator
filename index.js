const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Triangle, Square } = require('./lib/shapes');
const questions = require('./lib/questions');

const init = () => {
  inquirer.prompt(questions)
  .then((data)) => {
    console.log('Create svg file...');
    switch (`$(data)`){
      case 'Square':
        console.log('Square is being created...')
        const square = new square (data.fill, data.stroke, data.strokeWidth, data.test, data.textColor, data.width);
        fs.writeFile('lib/logo.svg', square.renderSquare(), (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log('Boom! Square is now created')
          }
        })
    }
  }
} 
inquirer
    .prompt([
        {
            type: 'input',
      name: 'color',
      message: 'Enter the color for your logo:',
    },
    {
      type: 'input',
      name: 'shape',
      message: 'Enter the shape for your logo:',
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text for your logo:',
    },
  ])
  .then((answers) => {
    // Generate the SVG code based on the user's input
    const svgCode = generateSVG(answers.color, answers.shape, answers.text);

    // Save the SVG code to a file
    fs.writeFile('logo.svg', svgCode, (err) => {
      if (err) throw err;
      console.log('Logo generated and saved as logo.svg');
    });
  })
  .catch((error) => {
    console.error(error);
  });

    function generateSVG(color, shape, text) {
        // SVG code template
        const svgTemplate = `<svg svg>';
          <rect width="200" height="200" fill="${color}" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="32">${text}</text>
          <circle cx="100" cy="100" r="50" fill="transparent" stroke="white" stroke-width="4" />
        </svg>`;
      
        // Replace placeholders in the SVG template with user input
        const svgCode = svgTemplate
          .replace('${color}', color)
          .replace('${text}', text)
          .replace('${shape}', shape);
      
        return svgCode;
      }