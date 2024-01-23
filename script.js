// PSEUDO CODE

// GET USER INPUT FOR NUMBER THEY WANT
// GENERATE A RANDOM NUMBER FOR SELECTION COEFFICIENT
// RANDOMLY SELECT SPECIAL CHARACTER
// RANDOMLY SELECT NUMERIC CHARACTER
// RANDOMLY SELECT LOWER CASE CHARACTER
// RANDOMLY SELECT UPPER CASE CHARACTER
// ADD ALL VALUES TOGETHER TO CREATE PASSWORD
// VARIABLE FOR PASSWORD
let password = "";

// start functions from here- leave pw variable on the outside

/* SPECIAL CHARACTER SELECTION */
// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
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

function getSpecialCharacter() {
  // testing generating a random number based on array number
  let maxNumOfItemsInArray = specialCharacters.length;
  let randomNumber = Math.round(Math.random() * maxNumOfItemsInArray);
  // console.log(randomNumber);

  // get random item from array based on random number
  let chosenSpecialCharacter = specialCharacters[randomNumber];
  // console.log(chosenSpecialCharacter);

  password = password + chosenSpecialCharacter;

  return password;
}

// controls how many times we run function for Special character depending on how many user wants
function executeSpecialCharacter(a) {
  for (i = 0; i < a; i++) {
    getSpecialCharacter();
  }
}

// execute function for Special Character x number of times
function getUserInputSpecial() {
  let userInput = prompt(
    `㊕ How many Special Characters would you like? 
    Enter a number between 1 and 8:`
  );

  // change input into number
  let userNumber = parseInt(userInput, 10);

  // checks if input is valid
  if (!isNaN(userNumber)) {
    if (Number.isInteger(userNumber)) {
      if (userNumber >= 1 && userNumber <= 8) {
        // Checks if within the desired range
        console.log("User input:", userNumber);
      } else {
        alert("Uh Oh, Invalid input. Please enter a number between 1 and 8.");
        return;
      }
    } else {
      alert("Uh Oh, Invalid input. Please enter a whole number.");
      return;
    }
  } else {
    alert("Uh Oh, Invalid input. Please enter a valid number.");
    return;
  }

  return userNumber; // Return the converted number instead of the original string
}

// gets user input to get value of x and checks it is a number in our range
let a = getUserInputSpecial();

executeSpecialCharacter(a);

// _______________________________________________________________________

/* NUMERIC CHARACTER SELECTION */
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function getNumericCharacter() {
  // testing generating a random number based on array number
  let maxNumOfItemsInArray = numericCharacters.length;
  let randomNumber = Math.round(Math.random() * maxNumOfItemsInArray);
  // console.log(randomNumber);

  // get random item from array based on random number
  let chosenNumericCharacter = numericCharacters[randomNumber];
  // console.log(chosenNumericCharacter);

  password = password + chosenNumericCharacter;

  return password;
}

// controls how many times we run function for Numeric character depending on how many user wants
function executeNumericCharacter(b) {
  for (i = 0; i < b; i++) {
    getNumericCharacter();
  }
}

// execute function for Numeric Character x number of times
function getUserInputNumeric() {
  let userInput = prompt(
    `🔢 How many Numeric Characters would you like? 
    Enter a number between 1 and 8:`
  );

  // change input into number
  let userNumber = parseInt(userInput, 10);

  // checks if input is valid
  if (!isNaN(userNumber)) {
    if (Number.isInteger(userNumber)) {
      if (userNumber >= 1 && userNumber <= 8) {
        // Checks if within the desired range
        console.log("User input:", userNumber);
      } else {
        alert("Uh Oh, Invalid input. Please enter a number between 1 and 8.");
        return;
      }
    } else {
      alert("Uh Oh, Invalid input. Please enter a whole number.");
      return;
    }
  } else {
    alert("Uh Oh, Invalid input. Please enter a valid number.");
    return;
  }

  return userNumber; // Return the converted number instead of the original string
}

// gets user input to get value of x and checks it is a number in our range
let b = getUserInputNumeric();

executeNumericCharacter(b);
// _______________________________________________________________________

/* LOWER CASE CHARACTER SELECTION */
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

// _______________________________________________________________________

/* UPPER CASE CHARACTER SELECTION */
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

// _______________________________________________________________________
// FINAL OUTPUT AND EVENT LISTENER TO BEGIN PASSWORD GENERATION
console.log(password);
// put this wayy at the bottom-starts code by button press
let button = document.getElementById("generate");

button.addEventListener("click", generatePassword);

// _______________________________________________________________________
// OLD STARTER CODE IGNORE
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
