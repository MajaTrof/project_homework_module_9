


document.getElementById('in').oninput = function () {
    let help = document.getElementById('help');
    help.innerHTML = 11111;
};

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const step = 5;

const alphabetArray = alphabet.split('');
let alphabet2 = '';
let alphabet2Array = [];


for (let i = 0; i < alphabetArray.length; i += 1) {

    /* якщо крок 5 тоді 
    і 5 - 0
    


    */

    
    if (i === alphabetArray.length - 1) {
        console.log(`n-1, ${alphabetArray[i]}`);
        alphabet2Array.push(alphabetArray[1]);
    } else {
        if (i === alphabetArray.length - 2) {
            console.log(`n-2, ${alphabetArray[i]}`);
            alphabet2Array.push(alphabetArray[0]);
        } else {
            alphabet2Array.push(alphabetArray[i + 2]);
        }
    }
}

console.log('alphabet', alphabet);
console.log('alphabet2', alphabet2);
console.log('alphabetArray', alphabetArray);
console.log('alphabet2Array', alphabet2Array);
