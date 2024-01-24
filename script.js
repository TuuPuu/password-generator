let password = "";
// _______________________________________________________________________

// GENERATE PASSWORD
function generatePassword() {
  // ensure password is clear at start
  password = "";

  // _______________________________________________________________________

  /* SPECIAL CHARACTER SELECTION */
  // Array of special characters to be included in password
  const specialCharacters = [
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
    let randomNumber = Math.floor(Math.random() * maxNumOfItemsInArray);

    // get random item from array based on random number
    let chosenSpecialCharacter = specialCharacters[randomNumber];

    password = password + chosenSpecialCharacter;

    return password;
  }

  // controls how many times we run function for Special Character depending on how many user wants
  function executeSpecialCharacter(a) {
    for (i = 0; i < a; i++) {
      getSpecialCharacter();
    }
  }

  // execute function for Special Character (a) number of times
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
          console.log("______PASSWORD GENERATION SUMMARY______");
          console.log("Number of Special Characters chosen:", userNumber);
        } else {
          alert(
            "🙈 Uh Oh, Invalid input. Please enter a number between 1 and 8."
          );
          return;
        }
      } else {
        alert("🙈 Uh Oh, Invalid input. Please enter a whole number.");
        return;
      }
    } else {
      alert("🙈 Uh Oh, Invalid input. Please enter a valid number.");
      return;
    }

    return userNumber; // Return the converted number instead of the original string
  }

  // gets user input to get value of (a) and checks it is a number in our range
  let a = getUserInputSpecial();

  executeSpecialCharacter(a);

  // _______________________________________________________________________

  /* NUMERIC CHARACTER SELECTION */
  // Array of numeric characters to be included in password
  const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  function getNumericCharacter() {
    // testing generating a random number based on array number
    let maxNumOfItemsInArray = numericCharacters.length;
    let randomNumber = Math.floor(Math.random() * maxNumOfItemsInArray);

    // get random item from array based on random number
    let chosenNumericCharacter = numericCharacters[randomNumber];

    password = password + chosenNumericCharacter;

    return password;
  }

  // controls how many times we run function for Numeric Character depending on how many user wants
  function executeNumericCharacter(b) {
    for (i = 0; i < b; i++) {
      getNumericCharacter();
    }
  }

  // execute function for Numeric Character (b) number of times
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
          console.log("Number of Numeric Characters chosen:", userNumber);
        } else {
          alert(
            "🙈 Uh Oh, Invalid input. Please enter a number between 1 and 8."
          );
          return;
        }
      } else {
        alert("🙈 Uh Oh, Invalid input. Please enter a whole number.");
        return;
      }
    } else {
      alert("🙈 Uh Oh, Invalid input. Please enter a valid number.");
      return;
    }

    return userNumber; // Return the converted number instead of the original string
  }

  // gets user input to get value of (b) and checks it is a number in our range
  let b = getUserInputNumeric();

  executeNumericCharacter(b);
  // _______________________________________________________________________

  /* LOWER CASE CHARACTER SELECTION */
  // Array of lowercase characters to be included in password
  const lowerCasedCharacters = [
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

  function getlowerCasedCharacter() {
    // testing generating a random number based on array number
    let maxNumOfItemsInArray = lowerCasedCharacters.length;
    let randomNumber = Math.floor(Math.random() * maxNumOfItemsInArray);

    // get random item from array based on random number
    let chosenLowerCaseCharacter = lowerCasedCharacters[randomNumber];

    password = password + chosenLowerCaseCharacter;

    return password;
  }

  // controls how many times we run function for Lower Cased Character depending on how many user wants
  function executeLowerCasedCharacter(c) {
    for (i = 0; i < c; i++) {
      getlowerCasedCharacter();
    }
  }

  // execute function for Lower Cased Character (c) number of times
  function getUserInputLowerCased() {
    let userInput = prompt(
      `🔡 How many Lower Cased Characters would you like? 
    Enter a number between 1 and 8:`
    );

    // change input into number
    let userNumber = parseInt(userInput, 10);

    // checks if input is valid
    if (!isNaN(userNumber)) {
      if (Number.isInteger(userNumber)) {
        if (userNumber >= 1 && userNumber <= 8) {
          // Checks if within the desired range
          console.log("Number of Lower Cased Characters chosen:", userNumber);
        } else {
          alert(
            "🙈 Uh Oh, Invalid input. Please enter a number between 1 and 8."
          );
          return;
        }
      } else {
        alert("🙈 Uh Oh, Invalid input. Please enter a whole number.");
        return;
      }
    } else {
      alert("🙈 Uh Oh, Invalid input. Please enter a valid number.");
      return;
    }

    return userNumber; // Return the converted number instead of the original string
  }

  // gets user input to get value of (c) and checks it is a number in our range
  let c = getUserInputLowerCased();

  executeLowerCasedCharacter(c);

  // _______________________________________________________________________

  /* UPPER CASE CHARACTER SELECTION */
  // Array of uppercase characters to be included in password
  const upperCasedCharacters = [
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

  function getUpperCasedCharacter() {
    // testing generating a random number based on array number
    let maxNumOfItemsInArray = upperCasedCharacters.length;
    let randomNumber = Math.floor(Math.random() * maxNumOfItemsInArray);

    // get random item from array based on random number
    let chosenUpperCaseCharacter = upperCasedCharacters[randomNumber];

    password = password + chosenUpperCaseCharacter;

    return password;
  }

  // controls how many times we run function for Upper Cased Character depending on how many user wants
  function executeUpperCasedCharacter(d) {
    for (i = 0; i < d; i++) {
      getUpperCasedCharacter();
    }
  }

  // execute function for Upper Cased Character (d) number of times
  function getUserInputUpperCased() {
    let userInput = prompt(
      `🔠 Finally, How many Upper Cased Characters would you like? 
    Enter a number between 1 and 8:`
    );

    // change input into number
    let userNumber = parseInt(userInput, 10);

    // checks if input is valid
    if (!isNaN(userNumber)) {
      if (Number.isInteger(userNumber)) {
        if (userNumber >= 1 && userNumber <= 8) {
          // Checks if within the desired range
          console.log("Number of Upper Cased Characters chosen:", userNumber);
        } else {
          alert(
            "🙈 Uh Oh, Invalid input. Please enter a number between 1 and 8."
          );
          return;
        }
      } else {
        alert("🙈 Uh Oh, Invalid input. Please enter a whole number.");
        return;
      }
    } else {
      alert("🙈 Uh Oh, Invalid input. Please enter a valid number.");
      return;
    }

    return userNumber; // Return the converted number instead of the original string
  }

  // gets user input to get value of (d) and checks it is a number in our range
  let d = getUserInputUpperCased();

  executeUpperCasedCharacter(d);

  console.log(`Generated password is: ${password}`);
  return password;
}

// _______________________________________________________________________

// FINAL OUTPUT AND DISPLAY OF PASSWORD
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // check to ensure password is appropriate minimum length
  if (password.length < 8) {
    console.log("Please start again, chose valid numbers between 1 & 8");
    let sorryMessage = ` Uh Oh, Password too short!
    Sorry, please start again >.<
    Try and chose at least 2 values for each character type 🙊`;
    passwordText.value = sorryMessage;

    // displays password on document
  } else passwordText.value = password;
}

// _______________________________________________________________________

// EVENT LISTENER TO BEGIN PASSWORD GENERATION ON CLICK
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
