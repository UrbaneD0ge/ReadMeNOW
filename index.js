const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// inquirer prompts and stores responses
const inquirify = () => {
    return inquirer.prompt([
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
            name: 'instal',
            message: 'Installation:',
        },
        {
            type: 'input',
            name: 'use',
            message: 'Usage Information:',
        },
        {
            type: 'list',
            name: 'lic',
            message: 'License:',
            choices: ['Apache', 'BSD-3', 'BSD-2', 'Creative Commons 4.0 International', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Zlib'],
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
    ]);
};


function getBadge(lic) {
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
            case '':
                badge = ''
                break;
    }
        return badge
};

function ReadMeNOW(answers) {
    return `# ${answers.title}

${getBadge(answers.lic)}    

## Description

##### ${answers.descr}

## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    * 
### Installation

##### ${answers.instal}

### Usage

##### ${answers.use}

### License

##### ${answers.lic}

### Contributing

##### ${answers.contr}

### Tests

##### ${answers.test}

### Questions

##### ${answers.ques}
`
;
};

const init = () => {
inquirify()
    .then((answers) => writeFileAsync('ReadMeNOW.md', ReadMeNOW(answers)))
    .then(() => console.log('You can ReadMeNOW!'))
    .catch((err) => console.error(err));
};

init();