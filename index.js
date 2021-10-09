const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const md = require()

const generateReadME = (answers) =>
`
# ${answers.title}
${answers.badge}
## Description
##### ${answers.descr}
## Table of Contents
##### 
*  ${answers.toc}
### Installation
##### ${answers.instal}
### Usage Information
##### ${answers.use}
### License
##### ${answers.lic}
### Contributing
##### ${answers.contr}
### Tests
##### ${answers.test}
### Questions
##### ${answers.ques}
`;

// inquirer prompts and stores responses
inquirer 
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Project title?',
        },
        {
            type: 'input',
            name: 'descr',
            message: 'Description:',
        },
        {
            type: 'input',
            name: 'toc',
            message: 'Table of Contents:',
        },
        {
            type: 'input',
            name: 'instal',
            message: 'Installation:',
        },
        {
            type: 'input',
            name: 'use',
            message: 'Usage Information:',
        },
        {
            type: 'checkbox',
            name: 'lic',
            message: 'License:',
            choices: ["Apache", "BSD-3", "BSD-2", "Creative Commons 4.0 International", "Eclipse", "GNU", "IBM", "ISC", "MIT", "Mozilla", "Zlib"]
        },
        {
            type: 'input',
            name: 'contr',
            message: 'Contributing:',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Tests:',
        },
        {
            type: 'input',
            name: 'ques',
            message: 'Questions:',
        },
    ])
    .then((lic) => {
        switch(lic) {
            case 'Apache':
                badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
                break;
            case 'BSD-3':
                badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
                break;
            case 'BSD-2':
                badge = '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
                break;
            case 'Creative Commons 4.0 International':
                badge = '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)(http://creativecommons.org/licenses/by/4.0/)'
                break;
            case 'Eclipse':
                badge = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
                break;
            case 'GNU':
                badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)'
                break;
            case 'IBM':
                badge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
                break;
            case 'MIT':
                badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
                break;
            case 'Mozilla':
                badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
                break;
            case 'Zlib':
                badge = '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
                break;
    }
        return badge
    })
    .then((answers) => {
        const ReadMeNOW = generateReadME(answers);

        fs.writeFile('ReadMeNOW.md', ReadMeNOW, (err) =>
        err ? console.log(err) : console.log('You can ReadMeNOW!')
        );
    });