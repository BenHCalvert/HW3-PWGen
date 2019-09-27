// Set Variables
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var pwLen = prompt("");


// Generate string
function randomCharacters(letters) {
var result = '';
for (var i = 0; i < letters; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
}
return result;
}
// Console log the result
console.log(randomCharacters(pwLen));


// Bonus version pushing each random character into an array and joining each into a string
function randomCharactersBonus(letters) {
var newChars = [];
for (var i = 0; i < letters; i++) {
    newChars.push(characters[Math.floor(Math.random() * characters.length)]);
}
return newChars.join('');
}
console.log(randomCharactersBonus(pwLen));
