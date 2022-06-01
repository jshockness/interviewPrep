function firstUniqueChar(str) {
  let count = {};
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


function validParens(str) {
  let hashTable = {"{":"}", "[":"]", "(":")"};
  let stack = [];

  for(let i=0; i<str.length; i++) {
    let char = str[i]
    if(char in hashTable) {
      stack.push(hashTable[char]);
    } else if (stack.length > 0 && stack[stack.length -1] === char) {
      stack.pop();
    } else {
      return false;
    }
  }
  if(stack.length === 0) {
    return true;
  } else{
    return false;
  }
}

str3 = "([]){}[]{()}";
str4 = "{[()]}{()}";
console.log(validParens(str3));
console.log(validParens(str4));

// Recursive
function uniquePaths(matrix) {

  function traverse(x, y) {
    if (x < 0 || y < 0 || x >= matrix[0].length || y >= matrix.length) {
      return 0;
    } else if (matrix[y][x] === 1) {
      return 0;
    } else if (x === matrix[0].length - 1 && y === matrix.length - 1) {
      return 1;
    }

    matrix[y][x] = 1;
    let sum = 0;
    sum += traverse(x+1, y);
    sum += traverse(x-1, y);
    sum += traverse(x, y+1);
    sum += traverse(x, y-1);
    matrix[y][x] = 0;
    return sum;
  }
  return traverse(0, 0);
}
matrix = [[0,0,0,0],[0,0,0,0],[0,0,0,0]];

console.log(uniquePaths(matrix));