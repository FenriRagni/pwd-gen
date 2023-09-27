// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(passwordText);
  passwordText.value = password;
}

function generatePassword(){
  var passLength;
  var includeLower;
  var includeUpper;
  var includeNum;
  var includeSpec;

  passLength =  prompt("How long do you want your password to be? \n (must be bewteen 8 and 128 characters in length)");
  if(passLength < 8) {
    alert("Password length cannot be shorter than 8 characters");
    return;
  }
  else if(passLength > 128) {
    alert("Password Length cannot be longer than 128 characters!");
    return;
  }
  else {

  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);