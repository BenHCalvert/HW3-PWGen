// Set Variables
var charactersLet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var charactersNum = '0123456789';
var charactersSpec = '!@#$%^&*()';
var pwLen = document.getElementById('pwLen');
var GenerateBtn = document.getElementById('btn btn-danger');
var OutputBox = document.getElementById('pwOutput');
// Set variable with final PW for pushing to page
var FinalPW = PWGen(pwLen);

// create variables for criteria selection toggle buttons
var specChar = true;
var capChar = true;
var numChar = true;

// set variables for each button
var specNBtn = document.getElementById("specN");
var specYBtn = document.getElementById("specY");
var capNBtn = document.getElementById("capN");
var capYBtn = document.getElementById("capY");
var numNBtn = document.getElementById("numN");
var numYBtn = document.getElementById("numY")

// change variable based on user input

    // special charecters
specNBtn.onclick = function(){
    let specChar = false;
    console.log('Special Charecters', specChar);
};
specYBtn.onclick = function(){
    let specChar = true;
    console.log('Special Charecters', specChar);
};
    // capital charecters
capNBtn.onclick = function(){
    let capChar = false;
    console.log('Cap Charecters', capChar);
};
capYBtn.onclick = function(){
    let capChar = true;
    console.log('Cap Charecters', capChar);
};
    // numeric charecters
numNBtn.onclick = function(){
    let numChar = false;
    console.log('Num Charecters', numChar);
};
numYBtn.onclick = function(){
    let numChar = true;
    console.log('Num Charecters', numChar);
};

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


// pushing each random character into an array, then join to a string
function PWGen(letters) {
var newChars = [];
for (var i = 0; i < letters; i++) {
    newChars.push(charactersLet[Math.floor(Math.random() * charactersLet.length)]);
    newChars.push(charactersSpec[Math.floor(Math.random() * charactersLet.length)]);
    newChars.push(charactersNum[Math.floor(Math.random() * charactersLet.length)]);
}
    return newChars.join('');
}

// console log array result
console.log(PWGen(pwLen));

// put password in Output box
OutputBox.textContent = FinalPW;

// Copy PW to clipboard (isn't working right now but I'm not sure why)
function copy() {
    var copyText = document.querySelector("#pwOutput");
    copyText.select();
    document.execCommand("copy");
  }

//   New PW when generate button is clicked
// document.querySelector('.btn btn-danger').onclick = function(){
//     PWGen()
// }
