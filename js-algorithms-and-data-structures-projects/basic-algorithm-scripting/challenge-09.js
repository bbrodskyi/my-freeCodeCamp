// Hint link: https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-finders-keepers/16016

function findElement(arr, func) {
    // let num = 0;
    for (let i =0; i < arr.length; i++) {
      // console.log(arr[i]);
      if (func(arr[i])) {
        //console.log(arr[i]);
        return arr[i];
      }
    }
    return undefined;
    
    // return num;
}
  
findElement([1, 2, 3, 4], num => num % 2 === 0);
  