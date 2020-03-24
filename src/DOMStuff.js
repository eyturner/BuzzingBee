let input = document.getElementById('userInput');
let prevWordsDiv = document.getElementById('previousWords');
let scoreRank = document.getElementById('scoreRank');

let letters = ['D', 'H', 'I', 'K', 'O', 'W', 'N'];

const setLetters = () => {
  let hexes = document.querySelectorAll('.middle')
  hexes.forEach((hex, i) => {
    hex.innerHTML = letters[hex.id];
  });
}

const getLetters = () => letters;

const getInput = () => input

const addNewWord = () => {
  let word = input.value.toUpperCase();
  let newWord = document.createElement('div');
  newWord.innerHTML = word;
  prevWordsDiv.appendChild(newWord);
}

const deleteLetter = () => {
  let word = input.value;
  word = word.substring(0, word.length - 1);
  input.value = word;
}

const shuffleLetters = () => {
  let mainLetter = letters[6];
  let toShuffle = letters.slice(0, letters.length - 1);
  toShuffle.sort(() => Math.random() - 0.5);
  toShuffle.push(mainLetter);
  letters = toShuffle;
  setLetters();
}

export {
  setLetters,
  addNewWord,
  deleteLetter,
  shuffleLetters,
  getInput,
  getLetters
};
