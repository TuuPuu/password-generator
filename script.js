// PSEUDO CODE

// GET USER INPUT FOR NUMBER THEY WANT
// GENERATE A RANDOM NUMBER FOR SELECTION COEFFICIENT
// RANDOMLY SELECT SPECIAL CHARACTER
// RANDOMLY SELECT NUMERIC CHARACTER
// RANDOMLY SELECT LOWER CASE CHARACTER
// RANDOMLY SELECT UPPER CASE CHARACTER
// ADD ALL VALUES TOGETHER TO CREATE PASSWORD

// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// testing generating a random number based on array number

let maxNumOfItemsInArray = specialCharacters.length;
let number = Math.round(Math.random() * maxNumOfItemsInArray);
console.log(number);

// _______________________________________________________________________
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

/*// EMPTY VARIABLES
let numberChosenSpecial = "";

let specialCharacter = "";

// GET NUMBER OF CHARACTER INPUT FOR SPECIAL CHARACTER CODE
numberChosenSpecial = prompt(
  "How many special characters would you like? Please pick between 2 and 32"
);

// GET NUBER OF RANDOM SPECIAL CHARACTERS BASED ON USER NUMBER SELECTION
if (numberChosenSpecial < 2 || numberChosenSpecial > 32) {
  alert("Please enter a number between 2 and 32, press button again");
} else {
  for (let i = 0; i < numberChosenSpecial; i++) {
    console.log(
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    );
  }
} 
*/

// Function to prompt user for password options
function getPasswordOptions() {}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

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
