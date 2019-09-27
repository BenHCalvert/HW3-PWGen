// Set Variables
var charactersLet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var charactersNum = '0123456789';
var charactersSpec = '!@#$%^&*()';
var pwLen = prompt("");
var GenerateBtn = document.getElementById('btn btn-danger');
var OutputBox = document.getElementById('pwOutput');


// Generate string
function randomCharacters(letters) {
var result = '';
for (var i = 0; i < letters; i++) {
    result += charactersLet[Math.floor(Math.random() * charactersLet.length)];
}
return result;
// this next line doesnt work!!!
OutputBox.textContent = result;
}
// Console log the result
console.log(randomCharacters(pwLen));

// add result to output box



// pushing each random character into an array and joining each into a string
function randomCharactersBonus(letters) {
var newChars = [];
for (var i = 0; i < letters; i++) {
    newChars.push(charactersLet[Math.floor(Math.random() * charactersLet.length)]);
}
    return newChars.join('');
}
console.log(randomCharactersBonus(pwLen));
