/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  function sortString(str){
    return str.replace(/\s+/g,'').toLowerCase().split('').sort().join('');
  }

  return sortString(str1)==sortString(str2);
}

module.exports = isAnagram;

console.log(isAnagram('Tablet','battle'));
console.log(isAnagram('hello', 'world'))
console.log(isAnagram('openai', 'open'))
