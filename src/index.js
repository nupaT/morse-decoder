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
    let str = expr.match(/.{1,10}/g);             //cut a string of 10 elements
    for(let i = 0; i < str.length; i++){          //each of the elemetns...
      if(str[i] == '**********') str[i] = '**';   //if element == ********* replace by "space"
      let symb = str[i].match(/.{1,2}/g);         //cut a element of 2 symbol
      for(let n = 0; n < symb.length; n++){       //for each 2symbol check

        if(n < symb.length) {
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
      result += ' ';
    }
    result = result.split('  ')                 //split all by double spaces
                    .map(a => a.split(' ')      //split by other spaces
                    .map(b => MORSE_TABLE[b])   //replace dot-dash to letter or number
                    .join()).join(' ')          //join letter and words
                    .replace(/(,)/g, '');       //delete ","

    return result;
}

module.exports = {
    decode
}