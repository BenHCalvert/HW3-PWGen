// Set Variables
var charactersLet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var charactersNum = '0123456789';
var charactersSpec = '!@#$%^&*()';
var pwLen = prompt("");
var GenerateBtn = document.getElementById('btn btn-danger');
var OutputBox = document.getElementById('pwOutput');


// Generate string - Characters ************************************************
function randomCharacters(letters) {
var result = '';
for (var i = 0; i < letters; i++) {
    result += charactersLet[Math.floor(Math.random() * charactersLet.length)];
}
return result;
}
// Console log the result
console.log(randomCharacters(pwLen));

// Generate string - Spec Char ************************************************
function randomNum(letters) {
    var result = '';
    for (var i = 0; i < letters; i++) {
        result += charactersNum[Math.floor(Math.random() * charactersNum.length)];
    }
    return result;
}
// Console log the result
console.log(randomNum(pwLen));

// Generate string - Numbers ************************************************
function randomSpec(letters) {
    var result = '';
    for (var i = 0; i < letters; i++) {
        result += charactersSpec[Math.floor(Math.random() * charactersSpec.length)];
    }
    return result;
}
// Console log the result
console.log(randomSpec(pwLen));

console.log(randomNum(pwLen) + randomSpec(pwLen) + randomCharacters(pwLen));











// pushing each random character into an array and joining each into a string
function randomCharactersBonus(letters) {
var newChars = [];
for (var i = 0; i < letters; i++) {
    newChars.push(charactersLet[Math.floor(Math.random() * charactersLet.length)]);
}
    return newChars.join('');
}
console.log(randomCharactersBonus(pwLen));
