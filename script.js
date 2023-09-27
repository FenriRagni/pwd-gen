// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // console.log(passwordText);
  passwordText.value = password;
}
//sets our characteristic arrays using split()
// .split() turns a string into an array with each character when the parameter input is "" 
// since there is no deleation to split upon
var lowerArray = "abcdefghijklmnopqrstuvwxyz".split("");
var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numArray = "1234567890".split("");
var specArray = ' !"#$%&' + "'()*+,-./:;<=>?@[\\]^_`{|}~"; //special characters make strings "fun" >.<
specArray = specArray.split("");

// Math random gives us a value between 0 and 1
// which we multiply by a given number and then truncate in order to get a random integer
// that is between 0 and the given number
function randomNumber(size) {
  return Math.floor(Math.random() * size);
}

//uses a for loop to move through the array then swapping each element in the array with a random one elsewhere
//uses an array of declarations to change the given elements with each other by changing their values at the same time
function shuffle(array1) {
  console.log(array1);
  console.log(array1.length);
  for(var element1 = 0; element1 < array1.length; element1++) {
    var element2 = randomNumber(array1.length);
    [array1[element1],array1[element2]] = [array1[element2], array1[element1]];
  }
  console.log(array1);
  console.log(array1.length);
  return array1;
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

function generatePassword() {
  //declares local variables 
  var passLength; //holds password length
  var count = 0; //starts our count in the for loop
  var pass = []; //makes an empty array to hold our password
  var includedArray = []; //makes an empty array to hold our included characters
  var includeLower, includeUpper, includeNum, includeSpec; //declares vars to hold boolean values 

  //Asks user for password length and checks if it's between 8 and 128 
  passLength =  prompt("How long do you want your password to be? \n (Password must be bewteen 8 and 128 characters in length)");
  console.log("Chosen password length " + passLength); //verifies given passLength
  if(passLength === null) {
    return "You've chosen no password length";
  }
  else if(passLength < 8) {
    //alert("Password length cannot be shorter than 8 characters");
    return "Password length cannot be shorter than 8 characters";
  }
  else if(passLength > 128) {
    //alert("Password Length cannot be longer than 128 characters");
    return "Password length cannot be longer than 128 characters";
  }

  //Asks user if we should include lowercase letters
  includeLower = confirm("Do you want to include lowercase letters?\n (Okay for yes, Cancel for no)");
  if(includeLower) {
    includedArray = includedArray.concat(lowerArray);
    pass.splice(randomNumber(passLength), 0, lowerArray[randomNumber(lowerArray.length)]);
    count++;
    alert("You have chosen to include lowercase letters");
    console.log("includes lowercase");
  }
  else {
    alert("You have chosen to exclude lowercase letters");
  }
  
  //Asks user if we should include uppercase letters
  includeUpper = confirm("Do you want to include uppercase letters?\n (Okay for yes, Cancel for no)");
  if(includeUpper) {
    includedArray = includedArray.concat(upperArray);
    pass.splice(randomNumber(passLength), 0, upperArray[randomNumber(upperArray.length)]);
    count++;
    alert("You have chosen to include uppercase letters");
    console.log("includes uppercase");
  }
  else {
    alert("You have chosen to exclude uppercase letters");
  }

  //Asks user if we should include numeric letters
  includeNum = confirm("Do you want to include numeric characters?\n (Okay for yes, Cancel for no)");
  if(includeNum) {
    includedArray = includedArray.concat(numArray);
    pass.splice(randomNumber(passLength), 0, numArray[randomNumber(numArray.length)]);
    count++;
    alert("You have chosen to include numeric characters");
    console.log("includes numbers");
  }
  else {
    alert("You have chosen to exclude numeric characters");
  }

  //Asks user if we should include special letters
  includeSpec = confirm("Do you want to include special characters?\n (Okay for yes, Cancel for no)");  
  if(includeSpec) {
    includedArray = includedArray.concat(specArray);
    pass.splice(randomNumber(passLength), 0, specArray[randomNumber(specArray.length)]);
    count++;
    alert("You have chosen to include special characters");
    console.log("includes special");
  }
  else {
    alert("You have chosen to exclude special characters");
  }

  if(!includeLower && !includeUpper && !includeNum && !includeSpec) {
    return "You've chosen no characteristics for the password";
  }

  //shuffles the array to increase randomness so that a clump of numbers doesn't mean a clump of like characters
  includedArray = shuffle(includedArray);

  //loops to add the remaining number of characters randomly into our password
  //will only loop from wherever we started our count based on what was included/
  for(; count < passLength; count++) {
    pass.splice(randomNumber(passLength), 0, includedArray[randomNumber(includedArray.length)]);
  }
  console.log("Password length: " + pass.length); //outputs current pass.length for checks
  pass = pass.join("");
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