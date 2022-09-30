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

// whenever generate button is clicked, it will call the writePassword function
generateBtn.addEventListener("click", writePassword);


//end user chooses length of password
function checkPasswordLength() {
  passwordLength=prompt("Password length must be in between 8 and 128 characters. Choose a number between 8 and 128.");
    if(passwordLength < 8 || passwordLength > 128){
      checkPasswordLength()  
    } 
}


//end user can confirm or decline if they would like to use lower case letters
function checkLowCase() {
  yesLowCase=confirm("Would you like to use lower case letters?")
}
     
//end user can confirm or decline if they would like to use upper case letters
function checkUpCase() {
  yesUpCase=confirm("Would you like to use upper case letters?")
}

//end user can confirm or decline if they would like to use numbers
function checkNumeric() {
  yesNum=confirm("Would you like to use numbers?")
}

//end user can confirm or decline if they would like to use special characters
function checkSpecialCharacter() { 
  yesSpecialCharacter=confirm("Would you like to use special characters?")
}

//running a function checking if each input was selected yes, then
//to concat each array into the next from a random selection of the array
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
  
//in a case where no selections are made for password criteria, it will revert
//to the beginning and force the user to make a different choice
  if(yesLowCase === false && yesUpCase === false && yesNum === false && yesSpecialCharacter === false){

    writePassword()
  }

  return grandArray;

}

//based on input from arrays the password will be generated
function generatePassword() {

  var pw = "";
  var grandestArray = checkGrandArray()
  function characterValue() {
    var character = grandestArray[Math.floor(Math.random() * grandestArray.length)]
    return character
  }

    for (var i = 0; i < passwordLength; i++){
      pw = pw + characterValue()
    }
    return pw;
    
  }


//calls the functions to run the code
function writePassword() { 
  checkPasswordLength()
  checkLowCase()
  checkUpCase()
  checkNumeric()
  checkSpecialCharacter()
  checkGrandArray()

  
  //determines password
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


