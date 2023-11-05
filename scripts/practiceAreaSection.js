import {
  utterance,
  getSelectedWordList,
  setCurrentWordIndex,
  getCurrentWordIndex,
} from './index.js';

const playButton = document.getElementById('play-btn');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const wordInfo = document.getElementById('word-info');

// ============ START Play, Prev, Next buttons ============
playButton.addEventListener('click', () => {
  const selectedWordList = getSelectedWordList();
  const currentWordIndex = getCurrentWordIndex();

  utterance.text = selectedWordList[currentWordIndex];
  window.speechSynthesis.speak(utterance);
});

prevButton.addEventListener('click', () => {
  if (nextButton.disabled) {
    nextButton.disabled = false;
  }
  const currentWordIndex = getCurrentWordIndex();
  const selectedWordList = getSelectedWordList();
  const newWordIndex = currentWordIndex - 1;

  wordInfo.textContent = `${newWordIndex + 1}/${selectedWordList.length}`;
  setCurrentWordIndex(newWordIndex);

  if (newWordIndex === 0) {
    prevButton.disabled = true;
  }
});

nextButton.addEventListener('click', () => {
  if (prevButton.disabled) {
    prevButton.disabled = false;
  }

  const currentWordIndex = getCurrentWordIndex();
  const selectedWordList = getSelectedWordList();
  const newWordIndex = currentWordIndex + 1;

  wordInfo.textContent = `${newWordIndex + 1}/${selectedWordList.length}`;
  setCurrentWordIndex(newWordIndex);

  if (newWordIndex === selectedWordList.length - 1) {
    nextButton.disabled = true;
  }
});
// ============ END Play, Prev, Next buttons ============

// form
const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const inputText = document.getElementById('input-text');
  const selectedWordList = getSelectedWordList();
  const currentWordIndex = getCurrentWordIndex();

  if (!inputText.value) {
    return alert('Please type something.');
  }
  if (inputText.value === selectedWordList[currentWordIndex]) {
    alert("That's correct. ✅ Good job!");
  } else {
    alert("That's incorrect. ❌ Let's try again");
  }

  // reset input field
  inputText.value = '';
});
