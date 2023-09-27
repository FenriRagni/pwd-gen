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

//each characteristic exists in an array containing only those characters
//generatePassword() should prompt for the length of the password
//if length of password is > 128 or less < 8  give appropriate alert and exit generatePassword()
//once passLength is within parameters:
//prompt user to include Lowercase letters hold in var, if yes add lowerArray to includedArray, alert(confirming their choice)
//prompt user to include Uppercase letters hold in var, if yes add upperArray to includedArray, alert(confirming their choice)
//prompt user to include Numeric values hold in var, if yes add numArray to includedArray, alert(confirming their choice)
//prompt user to include Special characters hold in var, if yes add specArray to includedArray, alert(confirming their choice)
//if no characteristics are selected alert user and exit generatePassword()
//for each chosen characteristic choose one at random from characteristic array to add to password
//once one of each characteristic has been chosen we choose randomly from the includedArray until we reach the password length
//we then output the password to the main screen



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);