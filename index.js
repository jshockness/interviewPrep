let count = {};
function firstUniqueChar(str) {
  for(let i=0; i<str.length; i++){
    let char = str[i];
    if(!(char in count)) {
      count[char] = 1;
    } else {
      count[char] = count[char] + 1;
    }
  }

  for(let i=0; i<str.length; i++) {
    let char = str[i];
    if (count[char] === 1) {
      return i;
    }
  }

  return -1;
}

str1 = "shockness";
str2 = "leetcode";
console.log(firstUniqueChar(str1));
console.log(firstUniqueChar(str2));