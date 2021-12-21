// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = prompt("Enter the length of your password");
  var hasNumbers = confirm("Include numbers?");
  var hasLower = confirm("Include lowercase characters?");
  var hasUpper = confirm("Include uppercase characters?");
  var hasSpecial = confirm("Include special characters?");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
