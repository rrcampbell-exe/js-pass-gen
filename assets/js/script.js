// universal variables and constants
const lowercase = document.querySelector("#lowercase")
const uppercase = document.querySelector("#uppercase")
const numeric = document.querySelector("#numeric")
const special = document.querySelector("#special")

let pwdDataObj = {
  length: "",
  charSet: []
}

// DISPLAY FUNCTIONS
function displayBody() {
  $(".card").fadeIn(2000)
}

function displayLengthPrompt() {
  $("#pwd-length-container").fadeIn(3000)
  $("#pwd-length-container").css("display", "flex")
}

function displayParameterPrompt() {
  $("#pwd-length-container").css("display", "none")
  $("#pwd-parameter-container").fadeIn(1500)
}

function hideLowercaseBox() {
  $("#lowercase, #lowercase-label").fadeOut(1500)
}

function hideUppercaseBox() {
  $("#uppercase, #uppercase-label").fadeOut(1500)
}

function hideNumericBox() {
  $("#numeric, #numeric-label").fadeOut(1500)
}

function hideSpecialBox() {
  $("#special, #special-label").fadeOut(1500)
}

function displayGenPwdBtn() {
  if (lowercase.checked || uppercase.checked || numeric.checked || special.checked) {
    $("#generate").fadeIn(1500)
  }
}

// function to evaluate password length
function lengthSelect() {
  let length = document.querySelector("#pwd-length").value;
  pwdDataObj.length = parseInt(length)
  console.log(pwdDataObj)
  console.log(typeof (pwdDataObj.length))


  if (length === "" || length === null || length < 8 || length > 128) {
    const lengthPlaceholder = document.querySelector("#pwd-length")
    lengthPlaceholder.value = ""
    lengthPlaceholder.placeholder = "Number must be between 8 and 128, inclusive!"
    $("#pwd-length").effect("shake", { times: 3 }, 500)
    return;
  } else {
    logPwdDataObj();
    displayParameterPrompt();
    return pwdDataObj.length;
  }
};

// event listener for click on button to submit password length
$("#pwd-length-submit").click(lengthSelect)

// display pwdDataObj
function logPwdDataObj() {
  console.log(pwdDataObj)
}

// event listener for lowercase checkbox
lowercase.addEventListener("change", function() {
  let lowerCharSet = "qwertyuiopasdfghjklzxcvbnm"
  if (this.checked) {
    pwdDataObj.charSet += lowerCharSet
    hideLowercaseBox();
    console.log(pwdDataObj)
  } 
})

// event listener for uppercase checkbox
uppercase.addEventListener("change", function() {
  let upperCharSet = "QWERTYUIOPASDFGHJKLZXCVBNM"
  if (this.checked) {
    hideUppercaseBox();
    pwdDataObj.charSet += upperCharSet
    console.log(pwdDataObj)
  }
})

// event listener for numeric checkbox
numeric.addEventListener("change", function() {
  let numberCharSet = "0123456789"
  if (this.checked) {
    hideNumericBox();
    pwdDataObj.charSet += numberCharSet
    console.log(pwdDataObj)
  }
})

// event listener for special checkbox
special.addEventListener("change", function() {
  let specialCharSet = "!#$%&'()*+,-./:;<=>?@][^_`}{|~"
  if (this.checked) {
    hideSpecialBox();
    pwdDataObj.charSet += specialCharSet
    console.log(pwdDataObj)
  }
})

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let passwordLength = pwdDataObj.length
  console.log(passwordLength);
  let charBank = pwdDataObj.charSet
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

// Run writePassword on "Generate Password" button click
$("#generate").click(writePassword)

// run these on load
displayBody();
displayLengthPrompt();
