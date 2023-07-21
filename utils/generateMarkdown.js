// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  // Customize the badge URL based on the licenses you want to support
  const licenseBadges = {
    MIT: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    Apache: "![License: Apache](https://img.shields.io/badge/License-Apache-blue.svg)",
    GPL: "![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)",
    // Add more licenses as needed...
  };

  return licenseBadges[license] || "";
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  // Customize the license URLs based on the licenses you want to support
  const licenseLinks = {
    MIT: "https://opensource.org/licenses/MIT",
    Apache: "https://www.apache.org/licenses/LICENSE-2.0",
    GPL: "https://www.gnu.org/licenses/gpl-3.0",
    // Add more licenses as needed...
  };

  return licenseLinks[license] || "";
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  const licenseLink = renderLicenseLink(license);
  return `## License

This project is licensed under the [${license} License](${licenseLink}).`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${renderLicenseLink(data.license) ? "- [License](#license)" : ""}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, please feel free to contact me:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
