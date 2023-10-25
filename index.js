import { wordsByCategory } from './data.js';
import { getSpeechVoices } from './helpers.js';

// Start Area
const categoryList = document.getElementById('category-list');

// Practice Area
const practiceArea = document.getElementById('practice-area');
const selectedTopic = document.getElementById('selected-topic');
const wordInfo = document.getElementById('word-info');
const voiceSelect = document.getElementById('voice-select');
const voiceOptionSection = document.getElementById('voice-option-section');
const checkText = document.querySelector('#checkText');
const checkBtn = document.querySelector('#checkBtn');
// word navigator buttons
const playButton = document.getElementById('play-btn');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

// Set up some initial values
practiceArea.style.display = 'none';
prevButton.disabled = true;

let wordsToPlay = [];
let currentWordIndex = 0;

// todo: add shuffle button

// todo: submit function
// todo: submit on Enter
const compareWords = () => {
  const checkWord = wordsToPlay[currentWordIndex].toLowerCase();
  let checkCurentIndex = currentWordIndex;
  const userWord = checkText.value.toLowerCase();

  if(wordsToPlay.length !== ++checkCurentIndex) {
    if(checkWord === userWord) {
      console.info('good compare');
      nextButton.click();
      playButton.click();
    } else {
      console.error('bad compare');
    }
  } else {
    console.log('Excellent. Choose the next category.');
  }
}

const submitClick = () => compareWords();
const enterClick = (e) => {
  if(e.code === 'Enter') {
    compareWords();
  }
}

document.addEventListener('keyup', enterClick)
checkBtn.addEventListener('click', submitClick);
// todo: show answer after submit
// todo: scoring
// todo: filter words
// todo: styling
// todo: mobile responsive
// todo: highlight selected category
// todo: clean up and organize code

// Set up category list
Object.entries(wordsByCategory).forEach(([group, words]) => {
  // Create button for each category and append it to the list
  const button = document.createElement('button');
  button.textContent = group;
  categoryList.appendChild(button);

  // register onClick handler for each button
  button.addEventListener('click', () => {
    selectedTopic.textContent = `Category: ${group}`;
    practiceArea.style.display = 'block';
    wordsToPlay = words;
    currentWordIndex = 0;
    wordInfo.textContent = `${currentWordIndex + 1}/${wordsToPlay.length}`;
    checkText.value = "";
  });
});

// ============ START SpeechSynthesis set up ============
const utterance = new SpeechSynthesisUtterance();

const voicesPromise = getSpeechVoices();
let americanVoices = [];
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

voicesPromise.then((voices) => {
  if (isSafari) {
    voiceOptionSection.style.display = 'none';
    return;
  }

  americanVoices = voices.filter(
    (voice) => voice.lang === 'en-US' && voice.localService
  );
  utterance.voice = americanVoices[0];

  // set up voice options
  americanVoices.forEach((voice) => {
    const option = document.createElement('option');

    option.textContent = voice.name;
    option.dataset.name = voice.name;

    voiceSelect.appendChild(option);
  });
});

voiceSelect.addEventListener('change', function (e) {
  const voiceName = e.target.options[e.target.selectedIndex].dataset.name;
  utterance.voice = americanVoices.find((voice) => voice.name === voiceName);
});
// ============ END SpeechSynthesis set up ============

// ============ START Play, Prev, Next buttons ============
playButton.addEventListener('click', () => {
  utterance.text = wordsToPlay[currentWordIndex];
  window.speechSynthesis.speak(utterance);
});

prevButton.addEventListener('click', () => {
  if (nextButton.disabled) {
    nextButton.disabled = false;
  }
  currentWordIndex--;
  wordInfo.textContent = `${currentWordIndex + 1}/${wordsToPlay.length}`;

  if (currentWordIndex === 0) {
    prevButton.disabled = true;
  }
});

nextButton.addEventListener('click', () => {
  if (prevButton.disabled) {
    prevButton.disabled = false;
  }
  currentWordIndex++;
  wordInfo.textContent = `${currentWordIndex + 1}/${wordsToPlay.length}`;

  if (currentWordIndex === wordsToPlay.length - 1) {
    nextButton.disabled = true;
  }
});
// ============ END Play, Prev, Next buttons ============
