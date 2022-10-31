//Decleration
var generateBtn = document.querySelector("#generate");
var passLength = prompt("Put a number between 8-128 for password lenght ");
var loverCase = confirm("Would you like to have lowercase in your password?");
var upperCase = confirm("Would you like to have uppercase in your password");
var incNumeric = confirm("Would you like to have numbers in your password");
var incSpecial = confirm("Would you like to have special characters in your password");
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var specialCharacters = " !@#$%^&*()_+=-?></.,';][}{";

//Function for password generation
function generatePassword() {
  
  var newPassword = [];

  //I used 'if' for for password possibilities
  if (passLength >= 8 && passLength <= 128) {
    if (loverCase && upperCase && incNumeric && incSpecial) {
      for (i = 0; i < passLength; i++) {
        
        var randomSpecialcharacter = specialCharacters.charAt(
          Math.floor(Math.random() * specialCharacters.length)
        );
        var randomNumeric = numericCharacters.charAt(
          Math.floor(Math.random() * numericCharacters.length)
        );
        var randomLowerCase = lowerCharacters.charAt(
          Math.floor(Math.random() * lowerCharacters.length)
        );
        var randomUpperCase = upperCharacters.charAt(
          Math.floor(Math.random() * upperCharacters.length)
        );
       
        var randomChars = randomSpecialcharacter.concat(randomNumeric, randomLowerCase, randomUpperCase);
        
        var randomCharSelect = randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );
        newPassword.push(randomCharSelect);
        
        var passCharacters = newPassword.join("");
      }
      // combination of characters
    } else if (loverCase && incNumeric && incSpecial) {
      for (i = 0; i < passLength; i++) {
        var randomSpecialcharacter = specialCharacters.charAt(
          Math.floor(Math.random() * specialCharacters.length)
        );
        var randomNumeric = numericCharacters.charAt(
          Math.floor(Math.random() * numericCharacters.length)
        );
        var randomLowerCase = lowerCharacters.charAt(
          Math.floor(Math.random() * lowerCharacters.length)
        );

        var randomChars = randomSpecialcharacter.concat(randomNumeric, randomLowerCase);
        var randomCharSelect = randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );

        newPassword.push(randomCharSelect);
        
        var passCharacters = newPassword.join("");
      }
    } else if (loverCase && upperCase && incSpecial) {
      for (i = 0; i < passLength; i++) {
        var randomSpecialcharacter = specialCharacters.charAt(
          Math.floor(Math.random() * specialCharacters.length)
        );
        var randomUpperCase = upperCharacters.charAt(
          Math.floor(Math.random() * upperCharacters.length)
        );
        var randomLowerCase = lowerCharacters.charAt(
          Math.floor(Math.random() * lowerCharacters.length)
        );

        var randomChars = randomSpecialcharacter.concat(randomLowerCase, randomUpperCase);
        var randomCharSelect = randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );

        newPassword.push(randomCharSelect);
        
        var passCharacters = newPassword.join("");
      }
    } else if (loverCase && upperCase && incNumeric) {
      for (i = 0; i < passLength; i++) {
        var randomUpperCase = upperCharacters.charAt(
          Math.floor(Math.random() * upperCharacters.length)
        );
        var randomNumeric = numericCharacters.charAt(
          Math.floor(Math.random() * numericCharacters.length)
        );
        var randomLowerCase = lowerCharacters.charAt(
          Math.floor(Math.random() * lowerCharacters.length)
        );

        var randomChars = randomUpperCase.concat(randomNumeric, randomLowerCase);
        var randomCharSelect = randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );

        newPassword.push(randomCharSelect);
        
        var passCharacters = newPassword.join("");
      }
    } else if (incNumeric && incSpecial) {
      for (i = 0; i < passLength; i++) {
        var randomSpecialcharacter = specialCharacters.charAt(
          Math.floor(Math.random() * specialCharacters.length)
        );
        var randomNumeric = numericCharacters.charAt(
          Math.floor(Math.random() * numericCharacters.length)
        );

        var randomChars = randomSpecialcharacter.concat(randomNumeric);
        var randomCharSelect = randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );

        newPassword.push(randomCharSelect);
        
        var passCharacters = newPassword.join("");
      }
    } else if (loverCase && incSpecial) {
      for (i = 0; i < passLength; i++) {
        var randomSpecialcharacter = specialCharacters.charAt(
          Math.floor(Math.random() * specialCharacters.length)
        );
        var randomLowerCase = lowerCharacters.charAt(
          Math.floor(Math.random() * lowerCharacters.length)
        );

        var randomChars = randomSpecialcharacter.concat(randomLowerCase);
        var randomCharSelect = randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );

        newPassword.push(randomCharSelect);
        
        var passCharacters = newPassword.join("");
      }
    } else if (upperCase && incSpecial) {
      for (i = 0; i < passLength; i++) {
        var randomSpecialcharacter = specialCharacters.charAt(
          Math.floor(Math.random() * specialCharacters.length)
        );

        var randomUpperCase = upperCharacters.charAt(
          Math.floor(Math.random() * upperCharacters.length)
        );

        var randomChars = randomSpecialcharacter.concat(randomUpperCase);
        var randomCharSelect = randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );

        newPassword.push(randomCharSelect);
        
        var passCharacters = newPassword.join("");
      }
    } else if (loverCase && incNumeric) {
      for (i = 0; i < passLength; i++) {
        var randomNumeric = numericCharacters.charAt(
          Math.floor(Math.random() * numericCharacters.length)
        );
        var randomLowerCase = lowerCharacters.charAt(
          Math.floor(Math.random() * lowerCharacters.length)
        );

        var randomChars = randomNumeric.concat(randomLowerCase);
        
        var randomCharSelect = randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );

        newPassword.push(randomCharSelect);
        var passCharacters = newPassword.join("");
      }
    } else if (upperCase && incNumeric) {
      for (i = 0; i < passLength; i++) {
        var randomNumeric = numericCharacters.charAt(
          Math.floor(Math.random() * numericCharacters.length)
        );
        var randomUpperCase = upperCharacters.charAt(
          Math.floor(Math.random() * upperCharacters.length)
        );

        var randomChars = randomNumeric.concat(randomUpperCase);
        
        var randomCharSelect = randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );

        newPassword.push(randomCharSelect);
        var passCharacters = newPassword.join("");
      }
    } else if (loverCase && upperCase) {
      for (i = 0; i < passLength; i++) {
        var randomLowerCase = lowerCharacters.charAt(
          Math.floor(Math.random() * lowerCharacters.length)
        );
        var randomUpperCase = upperCharacters.charAt(
          Math.floor(Math.random() * upperCharacters.length)
        );

        var randomChars = randomLowerCase.concat(randomUpperCase);
        var randomCharSelect = randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );

        newPassword.push(randomCharSelect);
        
        var passCharacters = newPassword.join("");
      }
    } else if (loverCase) {
      for (i = 0; i < passLength; i++) {
        var randomLowerCase = lowerCharacters.charAt(
          Math.floor(Math.random() * lowerCharacters.length)
        );

        newPassword.push(randomLowerCase);
        var passCharacters = newPassword.join("");
      }
    }  else if (upperCase) {
      for (i = 0; i < passLength; i++) {
        var randomUpperCase = upperCharacters.charAt(
          Math.floor(Math.random() * upperCharacters.length)
        );

        newPassword.push(randomUpperCase);
        var passCharacters = newPassword.join("");
      }
    } else if (incNumeric) {
      for (i = 0; i < passLength; i++) {
        var randomNum = numericCharacters.charAt(
          Math.floor(Math.random() * numericCharacters.length)
        );

        newPassword.push(randomNumeric);
        var passCharacters = newPassword.join("");
      }
    }     
    else if (incSpecial) {
      for (i = 0; i < passLength; i++) {
        
        var randomSpecialcharacter = specialCharacters.charAt(
          Math.floor(Math.random() * specialCharacters.length)
        );

        newPassword.push(randomSpecialcharacter);
        var passCharacters = newPassword.join("");
      }
      // alert for unvalid characters
    }  else {
      var warning = alert(
        "Put a number between 8-128, refresh and try again"
      );
    }
    //alert if nothing is entered
  } else {
    var warning = alert(
      "Put a number between 8-128, refresh and try again"
    );
  }
  return passCharacters;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);