// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength 
var lowCase 
var hasLowCase
var upCase
var hasUpCase
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var hasNum
var hasSpecialCharacter
var specialCharacter = [
  '[', '`', '!', '@',  '#', '$', '%',  //googled special characters array
  '^', '&', '*', '(',  ')', '_', '+',
  '-', '=', '[', ']',  '{', '}', ';',
  "'", ':', '"', '\\', '|', ',', '.',
  '<', '>', '/', '?',  '~', ']', '/'
]

// Write password to the #password input
function writePassword() {
  checkPasswordLength()
  checkLowCase()
  checkUpCase()
  checkNumeric()

  //write all calls for functions here


  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);


function checkPasswordLength(){
  passwordLength=prompt("Password must be in between 8 and 128 characters");
    if(passwordLength >= 8 && passwordLength <= 128){  //why isn't it working at 8?
    } 
    else(checkPasswordLength())

    }


  //  function checkLowCase(){
  //   confirm("Do you want to include lowercase letters?");

    function checkLowCase(){
      LowCase=prompt("Would you like to use lower case letters? Press y for yes, and n for no.")
      if(LowCase === "y" || LowCase === "n"){
        hasLowCase = true
      }
      else(checkLowCase())
      
   }
      
    function checkUpCase(){
      upCase=prompt("Would you like to use upper case letters? Press y for yes, and n for no.")
      if(upCase === "y" || upCase === "n"){
         hasUpCase = true
      }
      else(checkUpCase())
    }

    function checkNumeric(){
       numeric=prompt("Would you like to use numbers? Press y for yes, and n for no.")
       if(numeric === "y" || numeric === "n"){
         hasNum = true
       }
       else(checkNumeric())
    }

    function checkSpecialCharacter(){
      specialCharacter=prompt("Would you like to use special characters? Press y for yes, and n for no.")
      if(specialCharacter === "y" || specialCharacter === "n"){
        
      }
    }


//  if(upCase == "n"){
//    hasUpCase = false
//  }
 
//  else{
//    alert("Invalid selection.")
//    checkUpCase();
//  }
// }






// function checkLowCase(){
//   if (haslowcase=prompt("Would you like to use lower case letters?") == true) {
//     hasLowCase = "Input saved";
//   }
  
  
//   lowCase=prompt("Would you like to use lower case letters? Press y for yes, and n for no.");
//   if(lowCase == "y"){
//      hasLowCase = true
//   }

//   if(lowCase == "n"){
//     hasLowCase = false
//   }
//   else{
//     alert("Invalid selection.")
//     checkLowCase();
//   }
// }




// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
