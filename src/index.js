const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let str = expr.match(/.{1,10}/g);
    for(let i = 0; i < str.length; i++){
      if(str[i] == '**********') str[i] = '**';
      let symb = str[i].match(/.{1,2}/g);
      for(let n = 0; n < symb.length; n++){

        if(n) {
          switch (symb[n]){

            case '00':
              break;

            case '10':
              result += '.';
              break;

            case '11':
              result += '-';
              break;

            default:
            result += ' ';
            break;
          }
        } else result += ' '
      }
    }
    result = result.split('  ').map(a => a.split(' ').map(b => MORSE_TABLE[b]).join()).join(' ').replace(/(,)/g, '');


    return result;
}

module.exports = {
    decode
}