// Hint link: https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-truncate-a-string/16089

function truncateString(str, num) {
  // Clear out that junk in your trunk

  if (str.length > num) {
    let result = "";
    for (let i = 0; i < num; i++) {
      result += str[i];
    }
    result += "...";
    return result;
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
