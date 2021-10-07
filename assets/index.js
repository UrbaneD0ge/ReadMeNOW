const inquirer = require('inquirer');

const generateReadME = (answers) =>

inquirer 
    .prompt([
        {
            type: 'input',
            name: '',
            message: '',
        },
        {
            type: 'input',
            name: '',
            message: '',
        },
        {
            type: 'input',
            name: '',
            message: '',
        },
        {
            type: 'input',
            name: '',
            message: '',
        },
        {
            type: 'input',
            name: '',
            message: '',
        },
        {
            type: 'input',
            name: '',
            message: '',
        },
        {
            type: 'input',
            name: '',
            message: '',
        },
    ])
fs.writeFile('ReadMeNOW.md', ReadMeNOW, (err)) =>
err ? console.log(err) : console.log('You dont have to go 192.168.0.1, but you cant stay here.');
