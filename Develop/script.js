// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//

// Add event listener to generate button
document.getElementById("generate").addEventListener("click",userInput)
function userInput(){
  document.getElementById("generate").innerHTML
  var getPassLength = window.prompt("please select password length")
  var getUpperCase = window.prompt("do you want your password to have uppercase characters?")
  var getLowerCase = window.prompt("do you want your password to have lowercase character?")
  var getnumeric = window.prompt("do you want your password to have numbers?")
  var getSpecChar = window.prompt("do you want your passwaord to have special characters?")
}
// ask user for length/ this should include a randomizer that will

// be from 8 too 128 characters

// ask user to confirm said char types and create randomizer

// password is generated