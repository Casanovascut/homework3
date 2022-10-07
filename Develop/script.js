// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//---------------------------------------------------------------------------------------------

// Add event listener to generate button
document.getElementById("generate").addEventListener("click",userInput)
function userSelection(){
  const getPassLength = ("please select password length"))
  
}
function userInput(){
  document.getElementById("generate").innerHTML userSelection()
}
// storing the prompt values here untill i figure out how to return the users selection
  //var getUpperCase = window.prompt("do you want your password to have uppercase characters?")
  //var getLowerCase = window.prompt("do you want your password to have lowercase character?")
  //var getnumeric = window.prompt("do you want your password to have numbers?")
  //var getSpecChar = window.prompt("do you want your passwaord to have special characters?")