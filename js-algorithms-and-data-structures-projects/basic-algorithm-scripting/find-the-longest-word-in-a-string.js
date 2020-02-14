// Hint link: https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-find-the-longest-word-in-a-string/16015

function findLongestWordLength(str) {
  let longest = "";
  for (let i = 0; i < str.split(" ").length; i++) {
    if (str.split(" ")[i].length > longest.length) {
      longest = str.split(" ")[i];
    }
  }
  return longest.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
