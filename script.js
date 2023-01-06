const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;    
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(length, hasUpper, hasLower, hasNumber, hasSymbol);
});

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if(!password) { return };

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard!');
});

function generatePassword(length, upper, lower, number, symbol) {
    let generatedPassword = '';
    const typesCount = upper + lower +  number + symbol;
    const typesArr = [{upper}, {lower}, {number}, {symbol}]
    .filter(item => Object.values(item)[0]);

    if(typesCount === 0) {
        return '';
    }

    for(let i = 0; i < length; i += typesCount){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);
    return  finalPassword;
}

/*
    For more information visit: 
    https://www.w3schools.com/charsets/ref_html_ascii.asp
*/

//In the ASCII table there are 26 lower case letters from 97 to 122
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97);
}

//In the ASCII table there are 26 upper case letters from 65 to 90
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65);
}

//In the ASCII table there are 10 numbers from 48 to 57
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48);
}

//We are going to use a specific list of 20 characters
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

