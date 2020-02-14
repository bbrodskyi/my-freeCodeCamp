// Hint link: https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-title-case-a-sentence/16088

function titleCase(str) {
  let result = str.split(" ");
  for (let i = 0; i < result.length; i++) {
    result[i] =
      result[i].charAt(0).toUpperCase() + result[i].slice(1).toLowerCase();
    // console.log(result[i]);
  }
  return result.join(" ");
}

titleCase("I'm a little tea pot");
