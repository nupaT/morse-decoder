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
      let symb = str[i].match(/.{1,2}/g);
      for(let n = 0; n < symb.length; n++){
      alert('symb ' + symb[n]);
      alert ('n ' + n);

      switch (str[n]){

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

        //alert(result);
        }
      }
      alert(result);  
     // }
    }
    


    return str;
}

module.exports = {
    decode
}