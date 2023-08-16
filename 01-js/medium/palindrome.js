/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

/**
 * 
 * @param {string} str 
 * @returns {boolean}
 */

function isPalindrome(str) {
  
  let excludedCharacters = [' ', ',', '!', '?', '.']
  let charCodes = str.toLocaleLowerCase().split('').filter(c => !excludedCharacters.includes(c)).map(c => c.charCodeAt())
  return charCodes.every((codeFromStart, idx) => {
    let idxFromEnd = charCodes.length-1-idx
    let codeFromEnd = charCodes[idxFromEnd]
    return codeFromStart == codeFromEnd
  })
}

console.log(isPalindrome('Able, was I ere I saw Elba!'))

module.exports = isPalindrome;
