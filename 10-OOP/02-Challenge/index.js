const fs = require('fs');
const inquirer = require('inquirer');
const { createSVG } = require('./svgGenerator');

// Function to prompt user for input
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo text:',
            validate: function(input) {
                return input.length <= 3 ? true : 'Please enter up to three characters.';
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hexadecimal):'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hexadecimal):'
        }
    ]);
}

// Main function
async function main() {
    try {
        const userInput = await promptUser();
        const { text, textColor, shape, shapeColor } = userInput;
        const svgContent = createSVG(text, textColor, shape, shapeColor);
        fs.writeFileSync('logo.svg', svgContent);
        console.log('Generated logo.svg');
    } catch (error) {
        console.error('Error:', error);
    }
}

main();

// SVG generator function
function createSVG(text, textColor, shape, shapeColor) {
    // Generating SVG content with specified dimensions (300x200)
    const svg = `
        <svg width="300" height="200">
            <rect width="300" height="200" fill="${shapeColor}" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="50">${text}</text>
        </svg>
    `;
    return svg;
}
