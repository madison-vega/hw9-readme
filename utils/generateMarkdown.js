
// function to generate the readme
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

 This is licensed under ${data.license}


## Tests

${data.test}

## Questions

If you have any further questions please feel free to contact me at ${data.email}.  
You can also view my Github profile for further contact options and to view my portfolio 
[${data.github}](https://github.com/${data.github}).



`;
}

module.exports = generateMarkdown;