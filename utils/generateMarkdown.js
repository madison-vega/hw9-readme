

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
  } else {
    return `The license for this project is ${data.license}`
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.descript} 


## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)


## Installation

${data.install}

## Usage 

${data.usage}

## Credits

${data.credit}

## License

${renderLicenseSection (data.license)}


## Tests

${data.test}

## Questions

If you have any further questions please feel free to contact me at ${data.email}.  
You can also view my Github profile for further contact options and to view my portfolio [Github Profile](https://github.com/${data.github}).



`;
}

module.exports = generateMarkdown;