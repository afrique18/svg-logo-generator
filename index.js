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
        }
    ])