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
            message: 'NPU Designation?',
        },
        {
            type: 'input',
            name: 'date',
            message: 'Date?',
        },
    ]);
};


function getBadge(title) {
        switch(title) {
            case 'A':
                badge = ''
                break;
            case 'B':
                badge = ''
                break;
            case 'C':
                badge = ''
                break;
            case 'D':
                badge = ''
                break;
            case 'E':
                badge = ''
                break;
            case 'F':
                badge = ''
                break;
            case 'G':
                badge = ''
                break;
            case 'H':
                badge = ''
                break;
            case 'I':
                badge = ''
                break;
            case 'J':
                badge = ''
                break;
            case 'K':
                badge = ''
            break;
            case 'L':
                badge = ''
            break;
            case 'M':
                badge = ''
            break;
            case 'N':
                badge = ''
            break;
            case 'O':
                badge = ''
            break;
            case 'P':
                badge = ''
            break;
            case 'Q':
                badge = ''
            break;
            case 'R':
                badge = ''
            break;
            case 'S':
                badge = ''
            break;
            case 'T':
                badge = ''
            break;
            case 'V':
                badge = ''
            break;
            case 'W':
                badge = ''
            break;
            case 'X':
                badge = ''
            break;
            case 'Y':
                badge = ''
            break;
            case 'Z':
                badge = ''
            break;
            case 'APAB':
                badge = `Meeting ID: 947 9575 5692
Dial In: +1 646-558-8656 	Access Code: 947 9575 5692#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJAqfuyvqz4sE9aRG-HDEoLldjZtzVXF4uuK`
            break;
            }
        return badge
};

function ReadMeNOW(answers) {
    return `Meeting Agenda for NPU-${answers.title}

WHEN: ${answers.date}
${getBadge(answers.title)}`
;
};

const init = () => {
inquirify()
    .then((answers) => writeFileAsync('NPUNGLR8.txt', ReadMeNOW(answers)))
    .then(() => console.log('NPUNGLIFY!!'))
    .catch((err) => console.error(err));
};

init();