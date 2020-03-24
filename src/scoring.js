import {
  addNewWord,
  deleteLetter,
  shuffleLetters,
  getLetters
} from './DOMStuff.js';

let dictURL = 'https://gist.githubusercontent.com/h3xx/1976236/raw/bbabb412261386673eff521dddbe1dc815373b1d/wiki-100k.txt';
let letters = getLetters();
let mainLetter = letters[6];
let prevAns = [];
let validWords = [];
let score = 0;
let maxScore = 0;

const inPrevAns = (word, prevArray) => {
  for (let word2 of prevArray) {
    if (word == word2) {
      return true;
    }
  }
  return false;
}

const inValidWords = (word) => {
  for (let word2 of validWords) {
    word2 = word2.toUpperCase();
    if (word2 == word) {
      return true;
    }
  }
  return false;
}

const inLetters = (word) => {
  for (var i = 0; i < word.length; i++) {
    if (!letters.includes(word[i])) {
      return false;
    }
  }
  return true;
}

const getDictionary = async () => {
  const response = await fetch(dictURL);
  const text = await response.text();
  const dict = text.split('\n');
  return dict;
}

//returns a list of all valid words in the dictionary
const setValidWordsAndMaxScore = async (letters) => {
  console.log("ATTEMPTING DICTIONARY");
  let dict = await getDictionary();
  console.log("COMPLETE");
  let found = [];
  for (var i = 0; i < dict.length; ++i) {
    var word = dict[i];
    word = word.toUpperCase();
    if (word.length > 3) {
      if (word.includes(mainLetter)) {
        if (inLetters(word)) {
          if (!inPrevAns(word, found)) {
            found.push(word);
            maxScore += scoreAnswer(word);
          }
        }
      }
    }
  }
  validWords = found;
}

const verify = (word) => {
  if (word.length < 4) {
    console.log("Too short");
    return false;
  } else if (!word.includes(mainLetter)) {
    console.log("No", mainLetter);
    return false;
  } else if (inPrevAns(word, prevAns)) {
    console.log("Already found!")
    return false;
  } else if (!inLetters(word)) {
    console.log("Used a wrong letter");
    return false;
  } else if (!inValidWords(word)) {
    console.log("Not a real word!");
    return false;
  }
  return true;
}

const updateRank = () => {
  let rank = document.getElementById('rank');
  if (score == 0) {
    rank.innerHTML = 'Beginner';
  } else if (score < maxScore / 40) {
    rank.innerHTML = 'Good Start!';
  } else if (score < maxScore / 20) {
    rank.innerHTML = 'Moving Up!';
  } else if (score < maxScore / 10) {
    rank.innerHTML = 'Good!';
  } else if (score < maxScore / 5) {
    rank.innerHTML = 'Solid!';
  } else if (score < maxScore / 3) {
    rank.innerHTML = 'Great!';
  } else if (score < maxScore / 2) {
    rank.innerHTML = 'Amazing!'
  } else if (score < maxScore) {
    rank.innerHTML = 'Genius!';
  } else {
    rank.innerHTML = 'Queen Bee!!';
  }
}

const updateScore = () => {
  let currScore = document.getElementById('score');
  currScore.innerHTML = score + '/' + maxScore;
}


//Assuming we've already verified it is legal word
const scoreAnswer = (word) => {
  if (word.length == 4) {
    return 1;
  } else if (word.length < 7) {
    return word.length;
  } else {
    return word.length + 7
  }
}

//returns true if word counts, false otherwise
const submitWord = (word) => {
  let validAns = verify(word);
  if (validAns) {
    prevAns.push(word);
    score += scoreAnswer(word);
    addNewWord();
    updateScore();
    updateRank();

    return true;
  }
  return false;
}

setValidWordsAndMaxScore(letters);

export {
  submitWord
};
