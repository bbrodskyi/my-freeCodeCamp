// Hint link: https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-factorialize-a-number/16013

function factorialize(num) {
  for (var product = 1; num > 0; num--) {
    product *= num;
  }
  return product;
}

console.log(factorialize(5));
