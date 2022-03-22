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
                badge = `Meeting ID:	856 7471 3054
Dial In: +1 646 558 8656	Access Code: 856 7471 3054#
Register in advance for this meeting:
https://atlantaga-gov.zoom.us/meeting/register/tZErcO2vrzgqH9ArhFC4ZPNWdLs4yiiBa749`
                break;
            case 'B':
                badge = `Meeting ID:	832 4836 8602
Dial In: +1 646 558 8656	Access Code: 832 4836 8602#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tZcvc-GrqDMsGtbvnnKzpDF2BbUXxQuxx_N9`
                break;
            case 'C':
                badge = `Meeting ID:	934 4511 6340
Dial In: +1 646-558-8656 	Access Code: 934 4511 6340#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJcpc-yprz0pHtRSCH0nTWazoXg72njNpQ5R`
                break;
            case 'D':
                badge = `Meeting ID:	953 5469 3520
Dial In: +1 646-558-8656 	Access Code: 953 5469 3520#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJEucu2upzgvGNRkuGmiYcE2akuYMkFc1av`
                break;
            case 'E':
                badge = `Webinar ID: 920 3606 4688
Webinar ID: +1 929-436-2866
Register in advance for this meeting:
https://us06web.zoom.us/webinar/register/WN_TejPEO2GTDygUW6uq02yAg`
                break;
            case 'F':
                badge = `Meeting ID:	928 1513 1493
Dial In: +1 646-558-8656 	Access Code: 928 1513 1493#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJYlduyprTouE9c3GbvSNXk-QnBIMbRu-Zg3`
                break;
            case 'G':
                badge = `Meeting ID:	935 8093 0222
Dial In: +1 646-558-8656 	Access Code: 935 8093 0222#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJcof-mhrTsoGNbC6XrB8Sr6HKX7E8hPLfjH`
                break;
            case 'H':
                badge = `Meeting ID:	976 5253 7837
Dial In: +1 646-558-8656 	Access Code:  976 5253 7837#
Register in advance for this meeting:
https://zoom.us/j/97652537837`
                break;
            case 'I':
                badge = `Meeting ID:	926 1333 2610
                Dial In: +1 646-558-8656 	Access Code:  926 1333 2610#
                Register in advance for this meeting:
                https://us06web.zoom.us/meeting/register/tJYrduqrrTksG9Q0zhO-fIWbSdULod3adqpH
                `
                break;
            case 'J':
                badge = `Meeting ID:	914 9575 9127
Dial In: +1 646-558-8656 	Access Code:  914 9575 9127#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJUpfuyvqzIrGNPisSUqavtB5wdLiJTeHVFD`
                break;
            case 'K':
                badge = `Meeting ID:	961 2883 9632
Dial In: +1 646 558 8656	Access Code: 961 2883 9632#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJ0pfuuuqjosG9SFlf4neD6B5HLB18AX5zGe`
            break;
            case 'L':
                badge = `Meeting ID:	961 2883 9632
Dial In: +1 646 558 8656	Access Code: 961 2883 9632#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJIsdeGgrTIsGda9TZkaUfsNakMmS0zxpVe4`
            break;
            case 'M':
                badge = `Meeting ID:	972 3364 7127
Dial In: +1 646 558 8656	Access Code: 972 3364 7127#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJMvdOquqjwrGNMzjeUO15u88PSooneRz2Fp`
            break;
            case 'N':
                badge = `Meeting ID:	970 8448 6658
Dial In: +1 646 558 8656	Access Code: 970 8448 6658#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJMtf-2spj0sH9z2bFgZI2LX-Bna7OWVyoFq`
            break;
            case 'O':
                badge = `Meeting ID:	812 4045 1335
Dial In: +1 646 558 8656	Access Code: 812 4045 1335#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJIsdeGgrTIsGda9TZkaUfsNakMmS0zxpVe4`
            break;
            case 'P':
                badge = `Meeting ID:	940 8702 7097
Dial In: +1 646 558 8656	Access Code: 940 8702 7097#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJAtf-6orDwqE9MQK1U4WkG2s0y9ZSsZj55C`
            break;
            case 'Q':
                badge = `Meeting ID:	985 5727 1692
Dial In: +1 646 558 8656	Access Code: 985 5727 1692#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJwocu6qqTosE9bW-XHCnSGMWaOAnKCKqrkS`
            break;
            case 'R':
                badge = `Meeting ID:	886 2169 6544
Dial In: +1 646 558 8656	Access Code: 886 2169 6544#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tZwrdeiupz0vHtCSIPdEIa-N6avVbaNnGXlb`
            break;
            case 'S':
                badge = `Meeting ID:	993 2987 4388
Dial In: +1 646 558 8656	Access Code: 993 2987 4388#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJ0udeCgqT8pEtycXQZ9s7Tk4_0J_73DZmQD`
            break;
            case 'T':
                badge = `Meeting ID:	973 7964 7582
Dial In: +1 646 558 8656	Access Code: 973 7964 7582#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJMucOCuqjwvEtbo8Vddwe6J5Ykv5858FP9y`
            break;
            case 'V':
                badge = `Meeting ID:	992 1132 0112
Dial In: +1 646 558 8656	Access Code: 992 1132 0112#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJ0vduirrDsrG9Zu7U9P7xTvxATCljNqAgyJ`
            break;
            case 'W':
                badge = `Meeting ID:	916 2580 5725
Dial In: +1 646 558 8656	Access Code: 916 2580 5725#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJUrdeygrj4tGNFBx8eTSLrBvv1Zy4uPsqgD`
            break;
            case 'X':
                badge = `Meeting ID:	940 6017 9815
Dial In: +1 646 558 8656	Access Code: 940 6017 9815#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJAtcempqTIiG9Gd_h-5Tcordb6gJXHz14r1`
            break;
            case 'Y':
                badge = `Meeting ID:	956 6564 6943
Dial In: +1 646 558 8656	Access Code: 956 6564 6943#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJAtcempqTIiG9Gd_h-5Tcordb6gJXHz14r1`
            break;
            case 'Z':
                badge = `Meeting ID:	929 8209 4616
Dial In: +1 646 558 8656	Access Code: 929 8209 4616#
Register in advance for this meeting:
https://us06web.zoom.us/meeting/register/tJYkf-uopz8sG9J66kd94W5qRcrwP2Qb_jQ7`
            break;
            case 'APAB':
                badge = `Meeting ID: 947 9575 5692
Dial In: +1 646-558-8656
Access Code: 947 9575 5692#
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