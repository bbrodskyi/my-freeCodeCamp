// Hint link: https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-falsy-bouncer/16014

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (!arr[i]) {
      arr.splice(i, 1);
      // console.log(arr);
      i--;
    }
    // console.log(arr);
  }
  return arr;
}
