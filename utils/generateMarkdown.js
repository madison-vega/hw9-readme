// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.descript} 


## Table of Contents 

${data.table}



## Installation

${data.install}

## Usage 

${data.usage}


## License

${data.license}

## Contributing

${data.contribute}

## Tests

${data.test}

## Questions

If you have any further questions please feel free to contact me at ${data.email}.  
You can also view my Github profile for further contact options and to view my portfolio ${data.github}.



`;
}

module.exports = generateMarkdown;