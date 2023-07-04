const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Triangle, Square } = require('./lib/shapes');
const questions = require('./lib/questions');

const init = () => {
  inquirer.prompt(questions)
  .then((data) => {
    console.log('Create svg file...');
    switch (`${data.shape}`) {
      case 'Circle':
        console.log('Circle is being created...')
        const circle = new Circle ( data.text, data.textColor);
        fs.writeFile('lib/logo.svg', circle.renderCircle(), (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log('Circle is now created!');
          }
        });
        break;
      case 'Triangle':
        console.log('Triangle is being created...')
        const triangle = new Triangle ( data.text, data.textColor);
        fs.writeFile('lib/logo.svg', triangle.renderTriangle(), (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log('Triangle is now created!');
          }
        });
        break;
      case 'Square':
          console.log('Square is being created...')
          const square = new Square ( data.text, data.textColor);
          fs.writeFile('lib/logo.svg', square.renderSquare(), (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log('Square is now created!');
            }
          });
        break;  
    }
  });
} 
init();


