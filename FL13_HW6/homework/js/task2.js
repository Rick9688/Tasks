let word = prompt('input a word', '');
let wordLengh = word.length;
const half = 2;
let compare = isEven();
let middle = Math.floor(wordLengh / half);
if (word === '' || word === ' ') {
  alert('Invalid value');
} else if (compare) {
  alert(word[middle - 1] + word[middle]);
} else {
  alert(word[middle]);
}
function isEven() {
  return wordLengh % half === 0;
}
