//import cipher functions from encryptors.js
const encryptors = require('./encryptors.js');

//destructure individual functions from encryptors object
const {caesarCipher,symbolCipher,reverseCipher} = encryptors;


const encodeMessage = (str) => {
  return reverseCipher(caesarCipher(symbolCipher(str), 19));
}

const decodeMessage = (str) => {
  return symbolCipher(caesarCipher(reverseCipher(str), -19));
}


//user IO
const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

//program run
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);
