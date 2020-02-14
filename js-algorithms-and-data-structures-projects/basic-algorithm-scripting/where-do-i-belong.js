// Hint link: https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-where-do-i-belong/16094/10

function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) {
      console.log(a);
      return a;
    }
  }
  return arr.length;
}

getIndexToIns([10, 20, 30, 40, 50], 35); // should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30); // should return 2.
getIndexToIns([40, 60], 50); // should return 1.
getIndexToIns([3, 5, 10], 3); // should return 0.
getIndexToIns([3, 3, 5, 20], 5); // should return 2.
getIndexToIns([2, 10, 20], 19); // should return 2.
getIndexToIns([2, 5, 10], 15); // should return 3.
getIndexToIns([], 1); // should return 0
