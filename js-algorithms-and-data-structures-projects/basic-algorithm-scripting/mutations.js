// Hint link: https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-mutations/16025

function mutation(arr) {
  let arrOne = arr[0].toLowerCase().split("");
  let arrTwo = arr[1].toLowerCase().split("");
  for (var i = 0; i < arrTwo.length; i++) {
    if (arrOne.indexOf(arrTwo[i]) < 0) return false;
  }
  return true;
}
