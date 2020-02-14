// Hint link: https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-slice-and-splice/301148

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let result = arr2;
  result.splice(n, 0, ...arr1);
  return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
