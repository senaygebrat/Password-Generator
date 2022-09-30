// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength 
var lengthOfPassword 
var lowCase 
var upCase 
var password
var yesLowCase = false
var yesUpCase = false
var yesNum = false
var yesSpecialCharacter = false
var pw = "";
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacter = [
  '[', '`', '!', '@',  '#', '$', '%',  //googled special characters array
  '^', '&', '*', '(',  ')', '_', '+',
  '-', '=', '[', ']',  '{', '}', ';',
  "'", ':', '"', '\\', '|', ',', '.',
  '<', '>', '/', '?',  '~', ']', '/'
]
// var grandArray = []


function checkPasswordLength() {
  passwordLength=prompt("Password length must be in between 8 and 128 characters. Choose a number between 8 and 128.");
    if(passwordLength < 8 || passwordLength > 128){
      checkPasswordLength()  
    } 
}

function checkLowCase() {
  yesLowCase=confirm("Would you like to use lower case letters?")
}
      
function checkUpCase() {
  yesUpCase=confirm("Would you like to use upper case letters?")
}

function checkNumeric() {
  yesNum=confirm("Would you like to use numbers?")
}

function checkSpecialCharacter() { 
  yesSpecialCharacter=confirm("Would you like to use special characters?")
}

function checkGrandArray() {
  var grandArray = [];
  if(yesLowCase){
    grandArray = grandArray.concat(lowerCase);
  }
  if(yesUpCase){
    grandArray = grandArray.concat(upperCase);
  }
  if(yesNum){
    grandArray = grandArray.concat(numeric);
  }
  if(yesSpecialCharacter){
    grandArray = grandArray.concat(specialCharacter);
  }
  return grandArray;
}

function generatePassword() {
  // reset pw value so a page refresh is not needed
  // pw = ''


  // need to update for loop conditionals to dynamically render the correct amount
  // currently works for a password length of 12 and an even distribution of characters
  // if all are confirmed
  // if(yesLowCase === true){
    // var lower = ''
    // for (var i = 0; i < 3; i++){
    //   lower += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    //   }
    // pw += lowerCase
  // }
  // if(yesUpCase === true){
    // var upper = ''
    // for (var i = 0; i < 3; i++){
    //   upper += upperCase[Math.floor(Math.random() * upperCase.length)]
    //   }
    // pw += upperCase
  // }
  // if(yesNum === true){
    // var numbers = ''
    // for (var i = 0; i < 3; i++){
    //   numbers += numeric[Math.floor(Math.random() * numeric.length)]
    //   }
    // pw += numeric
  // }
  // if(yesSpecialCharacter === true){
    // var characters = ''
    // for (var i = 0; i < 3; i++){
    //   characters += specialCharacter[Math.floor(Math.random() * specialCharacter.length)]
    //   }
    // pw += specialCharacter
  }

  // if no options are confirmed return users to beginning propmt
  if(yesLowCase === false && yesUpCase === false && yesNum === false && yesSpecialCharacter === false){
    writePassword()
  }

  // for (var i = 0; i < parseInt(passwordLength); i++){
    // first one pick random array from what they said true too and a random selection
    // repeat until loop ends

    // password += pw.charAt(Math.floor(Math.random() * pw.length));
  // }
  // console.log({pw, password})
  // return pw
// }

// Write password to the #password input
function writePassword() {
  checkPasswordLength()
  checkLowCase()
  checkUpCase()
  checkNumeric()
  checkSpecialCharacter()
  checkGrandArray()
  console.log(checkGrandArray())
  

  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//reset grand array at end of program so doesn't accumulate

generateBtn.addEventListener("click", writePassword);
