// Hint link: https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-confirm-the-ending/16006

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return (
    str.substr(str.length - 1 - (target.length - 1), str.length - 1) === target
  );
}

console.log(confirmEnding("Bastian", "n"));
