// Hint link: https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-sum-all-numbers-in-a-range/16083

function sumAll(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  console.log(sum);
  return sum;
}
