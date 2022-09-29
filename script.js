// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength 
var lowCase 
var hasLowCase
var upCase
VAR hasUpCase
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharacter = [
  '[', '`', '!', '@',  '#', '$', '%',  //googled special characters array
  '^', '&', '*', '(',  ')', '_', '+',
  '-', '=', '[', ']',  '{', '}', ';',
  "'", ':', '"', '\\', '|', ',', '.',
  '<', '>', '/', '?',  '~', ']', '/'
]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function checkPasswordLength(){
  passwordLength=prompt("Password must be in between 8 and 128 characters");
    if(passwordLength <= 8 || passwordLength >= 128){
      alert("Password invalid, try again!");
      checkPasswordLength();
    }
}

function checkLowCase(){
  lowCase=prompt("Would you like to use lower case letters? Press y for yes, and n for no.");
  if(lowCase == "y"){
     hasLowCase = true
  }

  if(lowCase == "n"){
    hasLowCase = false
  }
  else{
    alert("Invalid selection.")
    checkLowCase();
  }
}

function checkUpCase(){
  upCase=prompt("Would you like to use upper case letters? Press y for yes, and n for no.")
  if(upCase == "y"){
    hasUpCase = true
 }

 if(upCase == "n"){
   hasUpCase = false
 }
 
 else{
   alert("Invalid selection.")
   checkUpCase();
 }
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


checkPasswordLength()
checkLowCase()
checkUpCase()