const inquirer = require('inquirer');
const fs = require('fs');

const generateReadME = (answers) =>

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
            type: 'input',
            name: 'lic',
            message: 'License:',
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
    