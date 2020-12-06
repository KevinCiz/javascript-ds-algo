/*
    Write a fucntion determines if a string is a palindrome. Do not
    Consider special characters or whitespace. A palindrome is a word
    or a sentence that is spelled the same way forward and backwards

    eg: A man, a plan, a canal - Panama
    eg: Go hang a salami im a lasagna hog
*/

function palindrome(str) {
  const lettersOnly = str
    .toLowerCase()
    .split(/[^a-z]+/)
    .join("")
    .split("");

  // Check if string revsered = not reverse
  const reversed = [...lettersOnly].reverse();

  return lettersOnly.join("") === reversed.join("");
}

console.log(palindrome("A man, a plan, a canal - Panama"));

function reverseWords(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("Kevin is the best"));
