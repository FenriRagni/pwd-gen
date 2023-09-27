// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(passwordText);
  passwordText.value = password;
}

// .split() turns a string into an array with each character when the parameter input is "" 
// since there is no deleation to split upon
var lowerArray = "abcdefghijklmnopqrstuvwxyz".split("");
var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numArray = "1234567890".split("");
var specArray = ' !"#$%&' + "'()*+,-./:;<=>?@[\\]^_`{|}~"; //special characters make strings "fun" >.<
specArray = specArray.split("");
function randomNumber(size) {
  return Math.floor(Math.random() * size);
}


// var temp = [];
// for(x = 0; x < specArray.length; x++){
//   console.log(specArray[x]);
// }
//leaving here for testing
// temp.splice(1, 0, "test");
// temp.splice(4, 0, "test2");
// temp.splice(0, 0, "test4")
// temp.splice(4, 0, "test3");
// console.log(temp)

function generatePassword(){
  var passLength;
  var count = 0;
  var pass = [];
  var includedArray = [];
  var includeLower, includeUpper, includeNum, includeSpec;

  passLength =  prompt("How long do you want your password to be? \n (must be bewteen 8 and 128 characters in length)");
  if(passLength < 8) {
    alert("Password length cannot be shorter than 8 characters");
    return;
  }
  else if(passLength > 128) {
    alert("Password Length cannot be longer than 128 characters!");
    return;
  }
  includeLower = confirm("Do you want to include lowercase letters?\n (Okay for yes, Cancel for no)");
  includeUpper = confirm("Do you want to include uppercase letters?\n (Okay for yes, Cancel for no)");
  includeNum = confirm("Do you want to include numeric characters?\n (Okay for yes, Cancel for no)");
  includeSpec = confirm("Do you want to include special characters?\n (Okay for yes, Cancel for no)");
  if(includeLower) {
    includedArray = includedArray.concat(lowerArray);
    pass.splice(randomNumber(size), 0, randomNumber(lowerArray.length));
    count++;
  }
  if(includeUpper) {
    includedArray = includedArray.concat(upperArray);
    pass.splice(randomNumber(size), 0, randomNumber(upperArray.length));
    count++;
  }
  if(includeNum) {
    includedArray = includedArray.concat(numArray);
    pass.splice(randomNumber(size), 0, randomNumber(numArray.length));
    count++;
  }
  if(includeSpec) {
    includedArray = includedArray.concat(specArray);
    pass.splice(randomNumber(size), 0, randomNumber(specArray.length));
    count++;
  }


  return pass;
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
//



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);