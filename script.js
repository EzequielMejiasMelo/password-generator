// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return;
}

function generatePassword() {
  //arrays with characters
  var specialCharaters = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
  ];

  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var lowerCasedCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var upperCasedCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // inputs for password decisions
  var passwordLength = prompt("Enter the length of your password");
  var hasNumbers = confirm("Include numbers?");
  var hasLower = confirm("Include lowercase characters?");
  var hasUpper = confirm("Include uppercase characters?");
  var hasSpecial = confirm("Include special characters?");

  // creates array and adds chosen chars to array
  var possibleChars = ""
  if (hasNumbers) {
    for (let x in numericCharacters) {
      possibleChars += numericCharacters[x];
    };
  }

  if (hasSpecial) {
    for (let x in specialCharaters) {
      possibleChars += specialCharaters[x];
    };
  }

  if (hasUpper) {
    for (let x in upperCasedCharacters) {
      possibleChars += upperCasedCharacters[x];
    };
  }

  if (hasLower) {
    for (let x in lowerCasedCharacters) {
      possibleChars += lowerCasedCharacters[x];
    };
  }

  // creates password 
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * possibleChars.length);
    password += possibleChars[randomNumber];
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
