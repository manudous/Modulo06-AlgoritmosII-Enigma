// Variables;

var plainAlphabet =     "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
var string = "";
var result = "";


// De la primera forma

// function toEncript(string, plainAlphabet, encryptedAlphabet){
//     var result = "";
//     for(var i = 0; i < string.length; i++){
//         for (var j = 0; j < string.length; j++){
//             if(plainAlphabet[j] === string[i]){
//                 result += encryptedAlphabet[j];
//             } 
//         }
//     }
//     return console.log(result);
// }

// toEncript(string, plainAlphabet, encryptedAlphabet);

// function toPlain(string, plainAlphabet, encryptedAlphabet){
//     var result = "";
//     for(var i = 0; i < string.length; i++){
//         for (var j = 0; j < string.length; j++){
//             if(encryptedAlphabet[j] === string[i]){
//                 result += plainAlphabet[j];
//             } 
//         }
//     }
//     return console.log(result);
// }

// toPlain(string, plainAlphabet, encryptedAlphabet)

// Utilizando el método IndexOf();

var toEncrypt = (string, plainAlphabet, encryptedAlphabet) =>{
    for(str of string){
        result += encryptedAlphabet[plainAlphabet.indexOf(str.toLowerCase())];
    }
    return result;
}

// toEncript(string, plainAlphabet, encryptedAlphabet);

var toDecrypt = (string, plainAlphabet, encryptedAlphabet) =>{
    for(str of string){
        result += plainAlphabet[encryptedAlphabet.indexOf(str.toLowerCase())];
    }
    return result;
}

// toPlain(string, plainAlphabet, encryptedAlphabet)

// Events

document.getElementById('enCryptbtn').addEventListener('click', encrypt);
document.getElementById('deCryptbtn').addEventListener('click', decrypt);


function encrypt(){
    var input = document.getElementById('textEncrypt').value;
    var encrypt = toEncrypt(input, plainAlphabet, encryptedAlphabet);
    return document.getElementById('textDecrypt').innerHTML = encrypt;
}

function decrypt(){
    var input = document.getElementById('textDecrypt').value;
    var encrypt = toDecrypt(input, plainAlphabet, encryptedAlphabet);
    return document.getElementById('textEncrypt').innerHTML = encrypt;
}

