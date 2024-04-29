const caesarCipher = function (string, factor) {
  factor >= 26 ? (factor = factor % 26) : (factor = factor);

  const newString = [];

  const encodeUpper = function (letter) {
    let newASCII = letter.charCodeAt(0) + factor;

    if (newASCII >= 91) newASCII = newASCII - 26;

    return newASCII;
  };

  const encodeLower = function (letter) {
    let newASCII = letter.charCodeAt(0) + factor;

    if (newASCII >= 123) newASCII = newASCII - 26;

    return newASCII;
  };

  string.split("").forEach((c) => {
    const nonLetterRegex = /[^a-zA-Z]/;
    if (nonLetterRegex.test(c)) {
      newString.push(c);
    } else if (c.toLowerCase() == c) {
      const asciiCode = encodeLower(c);
      const character = String.fromCharCode(asciiCode);
      newString.push(character);
    } else {
      const asciiCode = encodeUpper(c);
      const character = String.fromCharCode(asciiCode);
      newString.push(character);
    }
  });

  return newString.join("");
};

module.exports = caesarCipher;
