// Assignment code here

// FUNCTIONS NECESSARY FOR ACCEPTANCE CRITERIA

  // functions to prompt user to choose which password criteria to include 
    
    // function to prompt user for password length
      let lengthSelect = function() {
        debugger;
        let length = "";

        while (length === "" || length === null || length < 8 || length > 128 ) {
          length = window.prompt("How many characters long shall your password to be? Please enter a number between 8 and 128, inclusive.")
        }

        console.log("You have chosen a password length of " + length + " characters.");
        return length;
      };

    // function to prompt user for charset (lowercase, uppercase, numeric, and/or special characters))

      let charSelect = function() {

        let charSet = "";

        // function to ensure at least one character type must be accepted)
        while (charSet === "" || charSet === null) {
          window.alert("You must choose at least one of the following to be featured in your password: lowercase characters, UPPERCASE characters, num3r1c values, $pec!al characters.")
          lowercase = window.confirm("Shall your password include lowercase letters?")

          // if user chooses to include lowercase letters, log to console and add array of lowercase letters to lowercase variable
          if(lowercase) {
            console.log("You have chosen to include lowercase letters in your password.");
            let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
          }
          else {
            console.log("You have chosen to exclude lowercase letters from your password.");
            lowercase = ""
          }
          return lowercase; 
        }
      };

        window.confirm("Shall your password include UPPERCASE characters?")

        // if else statement

        window.confirm("Shall your password include num3r1c values?")

        // if else statement

        window.confirm("Shall your password include $pec!al characters?")

        // if else statement

  // function to generate a password that meets criteria established based on user input

    // likely a use of Math.floor(Math.random() * [length]

  // function to display password in an alert or write it on the page

    // window.display("Your password is " + [function output generated above])


// PASSWORD DATA TO BE STORED
let password = {
  length = lengthSelect(),
  charSet = charSelect(),
  // function to select number of characters in charSelect based on password.length
}

// ****** //


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
