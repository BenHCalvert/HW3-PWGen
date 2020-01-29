// Set Variables
var charactersLet = 'abcdefghijklmnopqrstuvwxyz';
var charactersCap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charactersNum = '0123456789';
var charactersSpec = '!@#$%^&*()';
var GenerateBtn = document.getElementById('btn btn-danger');
var OutputBox = document.getElementById('pwOutput');
var FinalPW = 'abcdefghijklmnopqrstuvwxyz';
var retVal = "";
var test = true
var pwLen = 0;
var pwArr = [];

// create variables for criteria selection toggle buttons
let specChar = true;
let capChar = true;
let numChar = true;

// set variables for each button/input
var specNBtn = document.getElementById("specN");
var specYBtn = document.getElementById("specY");
var capNBtn = document.getElementById("capN");
var capYBtn = document.getElementById("capY");
var numNBtn = document.getElementById("numN");
var numYBtn = document.getElementById("numY");
var copyBtn = document.getElementById("copy-button")
var generateBtn = document.getElementById("generate");


// change variable based on user input

 // special charecters
specNBtn.onclick = function(){
    let specChar = false;
    if (test) {console.log('Special Charecters', specChar)};
};
specYBtn.onclick = function(){
    let specChar = true;
    if (test) {console.log('Special Charecters', specChar)};
};
 
// capital charecters
capNBtn.onclick = function(){
    let capChar = false;
    if (test) {console.log('Cap Charecters', capChar)};
};
capYBtn.onclick = function(){
    let capChar = true;
    if (test) {console.log('Cap Charecters', capChar)};
};
 
// numeric charecters
numNBtn.onclick = function(){
    let numChar = false;
    if (test) {console.log('Num Charecters', numChar)};
};
numYBtn.onclick = function(){
    let numChar = true;
    if (test) {console.log('Num Charecters', numChar)};
};

// get the value of the PW length input field, change it to an integer, set it to var pwLen and console log it
function getPWLen(pwLen) {
    pwLen = parseInt(document.getElementById("pwLen").value);
    if (test) {console.log('PW Length', pwLen)};    
};

// On click for generate button
generateBtn.onclick = function(specChar, capChar, numChar, pwLen){    
    getPWLen(pwLen);    
    charSelection(specChar, capChar, numChar);
    generatePassword();
    // put password in Output box
    OutputBox.textContent = FinalPW;
    if (test) {console.log('Final Password', FinalPW)}
};

// Function to generate password,change FinalPW to an array and set length based on pwLen
function generatePassword(FinalPW) {  
    pwArr = FinalPW.split();
    for (var i = 0, n = pwArr.pwLen; i < pwLen; ++i) {
        retVal += pwArr.charAt(Math.floor(Math.random() * pwLen));
    }
    return retVal;
};


// If statements that push different values into the array based on user input toggle switches
function charSelection(specChar, capChar, numChar) {

    if (specChar === true) {
        FinalPW += charactersSpec;        
    };

    if (capChar === true) {
        FinalPW += charactersCap;        
    };

    if (numChar === true) {
        FinalPW += charactersNum;        
    }; 
   
    return FinalPW; 
    

};

// Copy PW to clipboard
copyBtn.onclick = function() {
    if (test) {console.log("copy button duh")}
    var copyText = document.getElementById("pwOutput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Your new password has been copied to the clipboard. The password is: " + copyText.value);
};



