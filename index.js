const inquirer = require('inquirer');
const fs = require('fs');

const generateReadME = (answers) =>
`
# ${answers.title}
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
            choices: ["Apache", "Boost", "BSD-3", "BSD-2", "CC0", "Attribution 4.0 International", "Attribution-ShareAlike 4.0 International", "Eclipse", "GNU", "IBM", "ISC", "MIT", "Mozilla", "Open Data Commons", "Perl", "SIL", "Unlicense","WTFPL", "Zlib"]
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
    .then((answers) => {
        const ReadMeNOW = generateReadME(answers);

        fs.writeFile('ReadMeNOW.md', ReadMeNOW, (err) =>
        err ? console.log(err) : console.log('You can ReadMeNOW!')
        );
    });
    