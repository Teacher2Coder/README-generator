const fs = require("fs");

// DONE: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    fs.appendFileSync("README.md", 
      "\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", 
      (err) => err && console.error(err))
  } else if (license === "Apache") {
    fs.appendFileSync("README.md", 
      "\n[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", 
      (err) => err && console.error(err))
  } else if (license === "Mozilla") {
    fs.appendFileSync("README.md",
      "\n[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)", 
      (err) => err && console.error(err))
  } else if (license === "BSD 3-Clause") {
    fs.appendFileSync("README.md", 
      "\n[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)", 
      (err) => err && console.error(err))
  } else if (license === "BSD 2-Clause") {
  fs.appendFileSync("README.md", 
    "\n[![License](https://img.shields.io/badge/License-BSD_2--Clause-blue.svg)](https://opensource.org/licenses/BSD-2-Clause)", 
    (err) => err && console.error(err))
  } else if (license === "CC0") {
    fs.appendFileSync("README.md", 
      "\n[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)", 
      (err) => err && console.error(err))
  } else if (license === "Boost") {
    fs.appendFileSync("README.md", 
      "\n[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)", 
      (err) => err && console.error(err))
  } else if (license === "Eclipse") {
    fs.appendFileSync("README.md", 
      "\n[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)", 
      (err) => err && console.error(err))
  } else if (license === "ISC") {
    fs.appendFileSync("README.md", 
      "\n[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)", 
      (err) => err && console.error(err))
  } else if (license === "WTFPL") {
    fs.appendFileSync("README.md", 
      "\n[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)", 
      (err) => err && console.error(err))
  } else if (license === "No License") {
    fs.appendFileSync("README.md", 
      "", 
      (err) => err && console.error(err))
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    fs.appendFileSync("README.md", 
    "\n[MIT](https://choosealicense.com/licenses/mit/)",
    (err) => err && console.error(err))
  } else if (license === "Apache") {
    fs.appendFileSync("README.md", 
      "\n[Apache](https://choosealicense.com/licenses/apache-2.0/)",
      (err) => err && console.error(err))
  } else if (license === "Mozilla") {
    fs.appendFileSync("README.md", 
      "\n[MPL 2.0](https://choosealicense.com/licenses/mpl-2.0/)",
      (err) => err && console.error(err))
  } else if (license === "BSD 3-Clause") {
    fs.appendFileSync("README.md", 
      "\n[BSD 3-Clause](https://choosealicense.com/licenses/bsd-3-clause/)",
      (err) => err && console.error(err))
  }else if (license === "BSD 2-Clause") {
    fs.appendFileSync("README.md", 
      "\n[BSD 2-Clause](https://choosealicense.com/licenses/bsd-2-clause/)",
      (err) => err && console.error(err))
  } else if (license === "CC0") {
    fs.appendFileSync("README.md", 
      "\n[CC0](https://choosealicense.com/licenses/cc0/)",
      (err) => err && console.error(err))
  } else if (license === "Boost") {
    fs.appendFileSync("README.md", 
      "\n[Boost](https://choosealicense.com/licenses/bsl-1.0/)",
      (err) => err && console.error(err))
  } else if (license === "Eclipse") {
    fs.appendFileSync("README.md", 
      "\n[Eclipse](https://choosealicense.com/licenses/epl-2.0/)",
      (err) => err && console.error(err))
  }else if (license === "ISC") {
    fs.appendFileSync("README.md", 
      "\n[ISC](https://choosealicense.com/licenses/isc/)",
      (err) => err && console.error(err))
  } else if (license === "WTFPL") {
    fs.appendFileSync("README.md", 
      "\n[WTFPL](https://choosealicense.com/licenses/wtfpl/)",
      (err) => err && console.error(err))
  } else if (license === "No License") {
    fs.appendFileSync("README.md", 
      "\nN/A",
      (err) => err && console.error(err))
  }
}

// DONE: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Creates badge and adds it to README
  renderLicenseBadge(license);
  // Creates link to license and adds it to the README
  renderLicenseLink(license);
}

// DONE: Create a function to generate markdown for README
function generateMarkdown(response) {
  // Writes the file and adds the Application's name to it
  fs.writeFileSync("README.md", `# ${response.appName}`, (err) => err && console.error(err));

  // Adds the Application's description
  fs.appendFileSync('README.md', `\n${response.description}`, (err) => err && console.error(err));

  // Adds a space to input the location of the deployed application
  fs.appendFileSync('README.md', `\n ### Link to deployed application`)

  // Adds the table of contents
  fs.appendFileSync('README.md', `\n \n## Table of Contents`, (err) => err && console.error(err));
  fs.appendFileSync('README.md', `\n* [Installation](#installation)`, (err) => err && console.error(err));
  fs.appendFileSync('README.md', `\n* [Usage](#usage)`, (err) => err && console.error(err));
  fs.appendFileSync('README.md', `\n* [License](#license)`, (err) => err && console.error(err));
  fs.appendFileSync('README.md', `\n* [Contributing](#contributing)`, (err) => err && console.error(err));
  fs.appendFileSync('README.md', `\n* [Tests](#tests)`, (err) => err && console.error(err));
  fs.appendFileSync('README.md', `\n* [Questions](#questions)`, (err) => err && console.error(err));

  // Adds the installation intructions
  fs.appendFileSync('README.md', `\n \n## Installation`, (err) => err && console.error(err));
  fs.appendFileSync('README.md', `\n${response.install}`, (err) => err && console.error(err));

  // Adds the usage instructions
  fs.appendFileSync('README.md', `\n \n## Usage`, (err) => err && console.error(err));
  fs.appendFileSync('README.md', `\n${response.usage}`, (err) => err && console.error(err));

  // Adds the license and the badge
  fs.appendFileSync('README.md', `\n \n## License`, (err) => err && console.error(err));
  renderLicenseSection(response.license);

  // Adds the contribution instructions
  fs.appendFileSync('README.md', `\n \n## Contributing`, (err) => err && console.error(err));
  fs.appendFileSync('README.md', `\n${response.contribute}`, (err) => err && console.error(err));

  // Adds the testing instructions
  fs.appendFileSync('README.md', `\n \n## Tests`, (err) => err && console.error(err));
  fs.appendFileSync('README.md', `\n${response.tests}`, (err) => err && console.error(err));

  // Adds contact info for questions
  fs.appendFileSync('README.md', `\n \n## Questions`, (err) => err && console.error(err));
  fs.appendFileSync('README.md', `\n* GitHub: [@${response.username}](https://www.github.com/${response.username})`, (err) => err && console.error(err));
  fs.appendFileSync('README.md', `\n* Email: ${response.email}`, (err) => err && console.error(err));

  // Lets user know that the README.md has been created
  console.log("README.md successfully created!");
}

module.exports = generateMarkdown;
