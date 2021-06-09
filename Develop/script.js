// Assignment code here

// FUNCTIONS NECESSARY FOR ACCEPTANCE CRITERIA

// functions to prompt user to choose which password criteria to include 

// function to prompt user for password length
let lengthSelect = function () {
  // debugger;
  let length = "";

  while (length === "" || length === null || length < 8 || length > 128) {
    length = window.prompt("How many characters long shall your password to be? Please enter a number between 8 and 128, inclusive.")
  }

  console.log("You have chosen a password length of " + length + " characters.");
  return length;
};

// function to prompt user for charset (lowercase, uppercase, numeric, and/or special characters))

let charSelect = function () {

  let lowercase, uppercase, numeric, special;
  let charSet = "";

  // function to ensure at least one character type must be accepted)
  while (!lowercase && !uppercase && !numeric && !special) {
    window.alert("You must choose at least one of the following to be featured in your password: lowercase characters, UPPERCASE characters, num3r1c values, $pec!al characters.")
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


// window.confirm("Shall your password include UPPERCASE characters?")

// // if else statement

// window.confirm("Shall your password include num3r1c values?")

// // if else statement

// window.confirm("Shall your password include $pec!al characters?")

// if else statement

// function to generate a password that meets criteria established based on user input

// likely a use of Math.floor(Math.random() * [length]

// function to display password in an alert or write it on the page

// window.display("Your password is " + [function output generated above])


// PASSWORD DATA TO BE STORED
// let password = {
//   length: lengthSelect(),
//   charSet: charSelect(),
//   // function to select number of characters in charSelect based on password.length
// }

// ****** //


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = lengthSelect();
  var charBank = charSelect();
  let charArr = charBank.split('');

  for (i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * charBank.length)
    console.log(charArr[randomIndex], randomIndex)
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = charBank;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
