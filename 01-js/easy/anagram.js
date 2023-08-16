/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

/**
 * 
 * @param {string} str1 
 * @param {string} str2 
 * @returns {boolean}
 */

function isAnagram(str1, str2) {
  // different lengths can't be anagram
  if(str1.length !== str2.length) return false
  
  let str2Codes = str2.toLowerCase().split('').map(c => c.charCodeAt())
  str1.toLowerCase().split('').map(c => c.charCodeAt()).forEach(code1 => {
    let charInStr2 = str2Codes.find(code2 => code2 == code1)
    if (!str2Codes || typeof charInStr2 == 'undefined') return false
    
    // remove the matching character from string 2 to handle duplications
    str2Codes.splice(str2Codes.indexOf(charInStr2), 1)
  })
  
  // if str2 has more characters
  if(str2Codes.length) return false
  
  return true
}

module.exports = isAnagram;
