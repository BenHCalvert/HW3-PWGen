// Set Variables
var charactersLet = 'abcdefghijklmnopqrstuvwxyz';
var charactersCap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charactersNum = '0123456789';
var charactersSpec = '!@#$%^&*()';
var GenerateBtn = document.getElementById('btn btn-danger');
var OutputBox = document.getElementById('pwOutput');
// Set variable with final PW for pushing to page
var FinalPW = ['abcdefghijklmnopqrstuvwxyz'];
var retVal = "";

// create variables for criteria selection toggle buttons
var specChar = true;
var capChar = true;
var numChar = true;

// set variables for each button/input
var specNBtn = document.getElementById("specN");
var specYBtn = document.getElementById("specY");
var capNBtn = document.getElementById("capN");
var capYBtn = document.getElementById("capY");
var numNBtn = document.getElementById("numN");
var numYBtn = document.getElementById("numY");
var copyBtn = document.getElementById("copy-button")
var pwLen = 0;
var generateBtn = document.getElementById("generate");


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

// get the value of the PW length input field, change it to an integer, set it to var pwLen and console log it
function getPWLen() {
    var pwLen = parseInt(document.getElementById("pwLen").value);
    console.log('PW Length', pwLen);    
};

// On click for generate button
generateBtn.onclick = function(){    
    getPWLen();
    console.log('retVal', retVal);
    generatePassword();
    // put password in Output box
    // OutputBox.textContent = FinalPW;
    console.log('Final Password', FinalPW)
};

// Function to generate password
function generatePassword() {    
    // isn't working - need a way to reset the final password before running charSelection
    var FinalPW = ['abcdefghijklmnopqrstuvwxyz'];
    charSelection();
        
    for (var i = 0, n = FinalPW.pwLen; i < pwLen; ++i) {
        retVal += FinalPW.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
};


// If statements that push different values into the array based on user input toggle switches
function charSelection() {

    if (specChar === true) {
        FinalPW.push(charactersSpec);
        // console.log(FinalPW);
    };

    if (capChar === true) {
        FinalPW.push(charactersCap);
        // console.log(FinalPW);
    };

    if (numChar === true) {
        FinalPW.push(charactersNum);
        // console.log(FinalPW);
    };

};

// Copy PW to clipboard (isn't working right now but I'm not sure why)
copyBtn.onclick = function() {
    console.log("copy button duh")
    var copyText = document.querySelector("#pwOutput");
    copyText.select();
    document.execCommand("copy");
}


