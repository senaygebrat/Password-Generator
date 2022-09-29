// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength 
var lowerCase = []
var upperCase = []
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




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


checkPasswordLength()