// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
// empty variable i push the unjoined password string in  
  var thePass = []
// empty variable i push the users selections into
  var arrayInUse = []
// asks user for password length
  var getPassLength = window.prompt("please select password length")
// turns password length into integer
  var passwordLength = parseInt(getPassLength)
// creates number boundary from 8 too 128
  if(passwordLength > 128 || passwordLength < 8){
    window.alert("please choose a number between 8 and 128")
    return
  }
  // forces user to choose number
  if(isNaN(passwordLength)){
    window.alert("please choose a number value")
    return
  }

// asks user what kind of password they want with boolean values
  var getUpperCase = window.confirm("do you want your password to have uppercase characters?")
  var getLowerCase = window.confirm("do you want your password to have lowercase character?")
  var getNumeric = window.confirm("do you want your password to have numbers?")
  var getSpecChar = window.confirm("do you want your passwaord to have special characters?")

  // string of values user chooses to have in password

  var uppercaseChar = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
  var lowercaseChar = ['abcdefghijklmnopqrstuvwxyz']
  var specCharVal = ['!@#$%^&*+-/:;<>=?']
  var numericValue = ['0123456789']
// pushes user choices too the var arrayInUse
  if (getUpperCase === true)
    arrayInUse.push(uppercaseChar)


  if (getLowerCase === true)
    arrayInUse.push(lowercaseChar)

  if (getSpecChar === true)
    arrayInUse.push(specCharVal)
  
  if (getNumeric === true)
    arrayInUse.push(numericValue)
// evolves variable arrayInUse and all the chosen values in it into a cohesive string of the users chosen inputs
    var usableArray = arrayInUse.toString().split('')

// sets counter value for do-while statement
    var i = 0
// executes code the number of times specified by user 
do{ 
// chooses random index from array of values
  thePass.push(usableArray[Math.floor(Math.random()*usableArray.length - 1)])
  i++;
// do...while conditional statement that executes until counter equals passwordLength
} while (i < passwordLength);
// joins thePass variable to equal one string in pass variable
let pass = thePass.join('')
// returns the users random password
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











