// Assignment code here

// FUNCTIONS NECESSARY FOR ACCEPTANCE CRITERIA

  // functions to prompt user to choose which password criteria to include 
    // function to prompt user for password length
    var lengthSelect = function() {
      window.prompt("How many characters long shall your password to be? Please enter a number between 8 and 128, inclusive.")

      // if else statement

    };

    // function to prompt user for charset (lowercase, uppercase, numeric, and/or special characters))
    // question: should the below be window.prompt, or is window.confirm preferable in this case?

    var charSelect = function() {
      window.confirm("Shall your password include lowercase characters?")

      // if else statement

      window.confirm("Shall your password include UPPERCASE characters?")

      // if else statement

      window.confirm("Shall your password include num3r1c values?")

      // if else statement

      window.confirm("Shall your password include $pec!al characters?")

      // if else statement

    };

  // function to validate selection criteria (at least one character type must be accepted)

  // function to generate password meeting criteria established based on user input

    // likely a use of Math.floor(Math.random() * [qty of items in size of array as constructed based on user feedback]

  // function to display password in an alert or write it on the page

    // window.display("Your password is " + [function output generated above])


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
