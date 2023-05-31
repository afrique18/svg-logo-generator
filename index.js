const {Shape, Triangle, Circle, Square }
const inquirer = require('inquirer');
const fs = require('fs');

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
        const svgTemplate = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
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