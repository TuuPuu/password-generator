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

// EMPTY VARIABLES
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

// let numberChosenNumeric = "";
// function getUserNumericCharacterNumber() {
//   numberChosenNumeric = prompt(
//     "How many numerical characters would you like? Please pick between 2 and 32"A
//   );
//   return numberChosenNumeric;
// }

// GET NUBER OF RANDOM SPECIAL CHARACTERS BASED ON USER NUMBER SELECTION
// function createSpecialCharacterPassword() {
//   if (numberChosen < 2 || numberChosen > 32) {
//     alert("Please enter a number between 2 and 32");
//     getUserSpecialCharacterNumber();
//   } else {
//     for (let i = 0; i < numberChosen; i++) {
//       console.log(
//         specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
//       );
//     }
//   }
// }

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
