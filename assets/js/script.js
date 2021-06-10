// Assignment code here

// function to prompt user for password length
let lengthSelect = function () {
  let length = "";

  while (length === "" || length === null || length < 8 || length > 128) {
    length = window.prompt("How many characters long shall your password be? Please enter a number between 8 and 128, inclusive.")
  }
  return length;
};

// function to prompt user for charset choices (lowercase, uppercase, numeric, and/or special characters))

let charSelect = function () {

  let lowercase, uppercase, numeric, special;
  let charSet = "";

  // function to ensure at least one character type must be accepted)
  while (!lowercase && !uppercase && !numeric && !special) {
    window.alert("You must choose at least one of the following to be featured in your password: lowercase letters, UPPERCASE letters, num3r1c values, $pec!al characters.")
    lowercase = window.confirm("Shall your password include lowercase letters?")
    uppercase = window.confirm("Shall your password include uppercase letters?")
    numeric = window.confirm("Shall your password include numeric characters?")
    special = window.confirm("Shall your password include special characters?")

    // if user chooses to include lowercase letters, append lowercase letters to charSet
    if (lowercase) {
      charSet += "qwertyuiopasdfghjklzxcvbnm"
    }
    // if user chooses to include uppercase letters, append uppercase letters to charSet
    if (uppercase) {
      charSet += "QWERTYUIOPASDFGHJKLZXCVBNM"
    }
    // // if user chooses to include numeric values, append numeric values to charSet
    if (numeric) {
      charSet += "0123456789"
    }
    // if user chooses to include special characters, append special characters to charSet
    if (special) {
      charSet += "!#$%&'()*+,-./:;<=>?@][^_`}{|~"
    }
  }
  return charSet;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let passwordLength = lengthSelect();
  let charBank = charSelect();
  let charArr = charBank.split('');
  let finalPassword = "";

  for (i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * charBank.length)
    console.log(charArr[randomIndex])
    finalPassword += (charArr[randomIndex])
  }

  let passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
