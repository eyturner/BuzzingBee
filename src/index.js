import {
  submitWord
} from './scoring.js';

import {
  setLetters,
  deleteLetter,
  getInput,
  shuffleLetters,
} from './DOMStuff.js';

const startGame = (() => {
  setLetters();
  let userInput = getInput();

  let buttons = document.querySelectorAll('.btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let userInput = getInput();
      let word = userInput.value.toUpperCase();
      switch (btn.id) {
        case 'del':
          deleteLetter();
          break;
        case 'shuf':
          shuffleLetters();
          break;
        case 'ent':
          if (submitWord(word)) {
            userInput.value = '';
          }
          break;
        default:
          console.log("ERROR");
          break;
      }
    });
  });

  userInput.addEventListener("keypress", function(e) {
    if (e.which == 13) {
      let userInput = getInput();
      let word = userInput.value.toUpperCase();
      if (submitWord(word)) {
        userInput.value = '';
      }
    }
  });
})();
