function areAnagrams(word1, word2) {
  const sortLetters = word =>
    word.toLowerCase().replace(/\s/g, "").split("").sort().join("");

  return sortLetters(word1) === sortLetters(word2);
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false