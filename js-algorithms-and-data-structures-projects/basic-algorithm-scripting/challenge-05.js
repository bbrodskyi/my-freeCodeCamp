// Hint link: https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-return-largest-numbers-in-arrays/16042

function largestOfFour(arr) {
    let largestArr = [];
    for (let i = 0; i < arr.length; i++) {
      let largestInt = arr[i][0];
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] > largestInt) {
          largestInt = arr[i][j];
        }
      }
      largestArr.push(largestInt);
      //console.log(largestArr);  
    }
    // console.log(largestArr);
    return largestArr;
}
  
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  