// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//generate array of options using ASII Character code Table
var lowercaseChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChoices = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", ";", ":", "'", '"', ",", "<", ".", ">", "/", "?"]
var numberChoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
    passwordText.value = generatePassword();
}

function generatePassword() {
    var passwordLength = parseInt(prompt("For password length, please pick a number from 8 - 128"));

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) return "";

    var lowercase = confirm("Would you like your password to use lowercase characters?")
    var uppercase = confirm("Would you like your password to include uppercase characters?")
    var numbers = confirm("Would you like your password to include numbers?")
    var symbols = confirm("Would you like your password to include special characters, or symbols?")

    // false && false === false
    // true && false === false
    // false && true === false
    // true && true === true

    // false || false === false
    // true || false === true
    // false || true === true
    // true || true === true

    // DeMorgan's Law
    if (!(lowercase || uppercase || numbers || symbols)) return ""
    // if(!lowercase && !uppercase && !numbers && !symbols) return ""

    var password = []
    var options = []

    if (lowercase) {
        options = options.concat(lowercaseChoices);
        password.push(pickRandomItem(lowercaseChoices))
    }
    if (uppercase) {
        options = options.concat(uppercaseChoices);
        password.push(pickRandomItem(uppercaseChoices))
    }
    if (numbers) {
        options = options.concat(numberChoices);
        password.push(pickRandomItem(numberChoices))
    }
    if (symbols) {
        options = options.concat(specialChoices);
        password.push(pickRandomItem(specialChoices))
    }

    // for(var i = 0; i < 10; i++){}

    /*
    var i = 0
    while(i < 10){  i++     }
    */

    while (password.length < passwordLength) {
        password.push(pickRandomItem(options))
    }

    // for (var i = password.length; i < passwordLength; i++) {
    //     password.push(pickRandomItem(options))
    // }

    return password.join("")
}

function pickRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}


// 25x^2 + 15x + 10
// 5(5x^2 + 3x + 2)