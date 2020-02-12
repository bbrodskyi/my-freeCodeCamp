// Hint link: https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-chunky-monkey/16005

function chunkArrayInGroups(arr, size) {
    // // Break it up.
    let result = [];
    let i = 0;
  
    while (i < arr.length) {
      result.push(arr.slice(i, i + size));
      i += size;
    }
  
    return result;
}
  
  
  
  
  
  