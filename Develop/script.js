// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var thePass = []
  var arrayInUse = []

  var getPassLength = window.prompt("please select password length")

  var passwordLength = parseInt(getPassLength)

  if(passwordLength > 128 || passwordLength < 8){
    window.alert("please choose a number between 8 and 128")
    return
  }
  
  if(isNaN(passwordLength)){
    window.alert("please choose a number value")
    return
  }


  var getUpperCase = window.confirm("do you want your password to have uppercase characters?")
  var getLowerCase = window.confirm("do you want your password to have lowercase character?")
  var getNumeric = window.confirm("do you want your password to have numbers?")
  var getSpecChar = window.confirm("do you want your passwaord to have special characters?")

  var uppercaseChar = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
  var lowercaseChar = ['abcdefghijklmnopqrstuvwxyz']
  var specCharVal = ['!@#$%^&*+-/:;<>=?']
  var numericValue = ['0123456789']

  if (getUpperCase === true)
    arrayInUse.push(uppercaseChar)


  if (getLowerCase === true)
    arrayInUse.push(lowercaseChar)

  if (getSpecChar === true)
    arrayInUse.push(specCharVal)
  
  if (getNumeric === true)
    arrayInUse.push(numericValue)

var usableArray = arrayInUse.toString().split('')

var i = 0
  
do{ 
  thePass.push(usableArray[Math.floor(Math.random()*usableArray.length - 1)])
  i++;
} while (i < passwordLength);

let pass = thePass.join('')
return pass
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);











