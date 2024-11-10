class genPassword {
  generateStrongPassword() {
    const alpha = [
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
    const char = [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "[",
      "]",
      "~",
      "}",
      "|",
      "{",
      "`",
      "_",
      "?",
      "=",
      ";",
      ":",
      ".",
      "+",
      ",",
    ];
    const num = Math.floor(Math.random() * 10); // Random number between 0-9
    const capLetter = alpha[Math.floor(Math.random() * alpha.length)]; // Random uppercase letter
    const smallLetter =
      alpha[Math.floor(Math.random() * alpha.length)].toLowerCase(); // Random lowercase letter
    const specialChar = char[Math.floor(Math.random() * char.length)]; // Random special character

    // Random password length (between 8 and 12 characters for strength)
    const passwordLength = Math.floor(Math.random() * (12 - 8 + 1)) + 8;

    // Combine all characters in the password
    let password = `${num}${capLetter}${smallLetter}${specialChar}`;

    // Fill up the rest of the password to the desired length
    const allCharacters = alpha.concat(char); // All possible characters (uppercase, lowercase, special)
    while (password.length < passwordLength) {
      const randomChar =
        allCharacters[Math.floor(Math.random() * allCharacters.length)];
      password += randomChar;
    }

    // Shuffle the password to randomize the character order
    password = password
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    // Display the password
    document.getElementById("passwordDisplay").innerText = password;
  }

  generateWeakPassword() {
    console.log("password2");
  }

  generateSuperStrongPassword() {
    console.log("password3");
  }
}

let word = new genPassword();
