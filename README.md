# SVG Logo Maker

## Description
The SVG Logo Maker is a command-line application that allows users to generate a simple logo in SVG format based on their inputs. Users can customize the text, text color, shape, and shape color, and the application will generate an SVG file (logo.svg) accordingly.

This project is built using Node.js, and it leverages the Inquirer package for handling user inputs and Jest for unit testing of the shape classes.

## Table of Contents

Installation
Usage
Testing
Example
Technologies
License

## Installation

Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/svg-logo-maker.git
cd svg-logo-maker
Install Dependencies:

Make sure Node.js is installed on your system, then install the required packages using npm:

bash
Copy code
npm install
The application depends on the following packages:

inquirer for user input
jest for running unit tests
Initialize Jest in package.json:

json
Copy code
"scripts": {
   "test": "jest"
}

## Usage
Run the Application:

To generate an SVG logo, run the following command:

bash
Copy code
node index.js
Follow the Prompts:

The application will prompt you to:

Enter up to 3 characters for the text in your logo.
Select the text color (either by keyword or hexadecimal value).
Choose a shape (Circle, Square, or Triangle).
Specify the shape's color (either by keyword or hexadecimal value).

## Generated File:

After the prompts, the application will create an SVG file named logo.svg in the root directory. This file can be opened in any browser or SVG viewer to see the logo.

## Testing
Unit tests for the shape classes (Circle, Square, and Triangle) are included in the project. To run the tests, use the following command:

bash
Copy code
npm test
The tests validate that each shape renders correctly with the appropriate color.

## Example
Here’s a basic example of user input and the resulting SVG:

User Input:

Text: ABC
Text Color: white
Shape: Circle
Shape Color: blue
Generated SVG (logo.svg):

## Technologies

Node.js: JavaScript runtime used for building the application.

Inquirer.js: A library for gathering user inputs in a command-line environment.

Jest: JavaScript testing framework used for unit testing.

SVG: Scalable Vector Graphics used for the logo generation.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Demo
Check out the video demonstration of the application (https://1drv.ms/v/c/2cebbbbed41529a2/EVSu1Xgj3AJKqDnteyTFw7EB235NxalOuQ0nVVvqESf2Pg?e=w1tHJ2).
