function isPalindrome(word) {
  // Write your algorithm here
  let palindrome = word.split("").reverse().join("")
  if (word === palindrome) {
    return true;
  } else{
    return false;
  }
}
 //isPalindrome("mama");

/* 
  Add your pseudocode here

  Declare a function
  Set parameters of string
  Declare a split to the string
  reverse the split
  Declare a join
  input string;
  if (string === string)
    then
    return true,
  else
    return false
  output string
*/

/*
  Add written explanation of your solution here

  The code receives a string as a parameter in the function isPalindrome
  . uses the split to make the string of individual characters, then reverses the
  split with join. If the string input is equals to its palindrome then the return value is true
  else the return value is false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
