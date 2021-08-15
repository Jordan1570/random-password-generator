// Assignment Code

// When the generate password is clicked we need to ask the user what kind of characters they want in that password
// Check that password length is between 8 and 128 characters (do this through if statements. Only if statements can check conditions.)
// Validate that user has chosen at least one character type (We can do this through an if statement as well because if statements have the ability to check the value of variables)
// Once all criteria is met we generate the password and display it in the html

var generateBtn = document.querySelector("#generate");

var specialCharacters = ["!", "#", "$", "%", "&", "*", "/", "?","@"];
var numericalCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L" , "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var finalArray = []

// Write password to the #password input 
function passwordOptions() {
  var length=prompt("How long do you want the password to be?");
  if (length < 8) {
    alert("Your password must be at least 8 characters.");
    return
  }
  if (length > 128) {
    alert("Your password is too long.");
    return

  }
  var special=confirm("Would you like special characters?");

  var numerical=confirm("Would you like numerical characters?");

  var uppercase=confirm("Would you like uppercase characters?");

  var lowercase=confirm("Would you like lowercase characters?");
  
  var options={
    length: length, 
    hasSpecial: special,
    hasNumerical: numerical,
    hasUppercase: uppercase,
    hasLowercase: lowercase
  }; 
  return options;



}
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}
function generatePassword() {
var results=passwordOptions ();
console.log(results);

var finalArray=[];
var finalPassword=[];
var guaranteedCharacters=[];
if (results.hasLowercase===true) {
  finalArray=finalArray.concat(lowercaseCharacters);
  guaranteedCharacters.push(getRandom(lowercaseCharacters));
  console.log(finalArray)
}

if (results.hasUppercase===true) {
  finalArray=finalArray.concat(uppercaseCharacters)
  guaranteedCharacters.push(getRandom(uppercaseCharacters));
  console.log(finalArray)
}

if (results.hasSpecial===true) {
  finalArray=finalArray.concat(specialCharacters)
  guaranteedCharacters.push(getRandom(specialCharacters));
  console.log(finalArray)
}

if (results.hasNumerical===true) {
  guaranteedCharacters.push(getRandom(numericalCharacters));
  finalArray=finalArray.concat(numericalCharacters)
  console.log(finalArray)
}
for (var i = 0; i < results.length; i++) {
  var charSelect=getRandom(finalArray);
  finalPassword.push(charSelect);
}
for (var i = 0; i < guaranteedCharacters.length; i++) {
  finalPassword[i] = guaranteedCharacters[i];
}
return finalPassword.join("");
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
