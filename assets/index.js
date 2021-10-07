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
            message: '',
        },
        {
            type: 'input',
            name: 'toc',
            message: '',
        },
        {
            type: 'input',
            name: 'instal',
            message: '',
        },
        {
            type: 'input',
            name: 'use',
            message: '',
        },
        {
            type: 'input',
            name: 'lic',
            message: '',
        },
        {
            type: 'input',
            name: 'contr',
            message: '',
        },
        {
            type: 'input',
            name: 'test',
            message: '',
        },
        {
            type: 'input',
            name: 'ques',
            message: '',
        },
    ])
    .then((answers) => {
        const ReadMeNOW = generateReadME(answers);

        fs.writeFile('ReadMeNOW.md', ReadMeNOW, (err) =>
        err ? console.log(err) : console.log('You can ReadMeNOW!')
        );
    });
    