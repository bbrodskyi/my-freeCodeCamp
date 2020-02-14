// Hint link: https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-repeat-a-string-repeat-a-string/16041

function repeatStringNumTimes(str, num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += str;
  }
  // repeat after me
  return result;
}

repeatStringNumTimes("abc", 3);
