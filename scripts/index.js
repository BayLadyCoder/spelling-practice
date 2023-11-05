// GLOBAL VARIABLES

export const utterance = new SpeechSynthesisUtterance();

// =============== selectedWordList ===============
let selectedWordList = [];

export const setSelectedWordList = (newSelectedWordList) => {
  selectedWordList = newSelectedWordList;
};
export const getSelectedWordList = () => {
  return selectedWordList;
};

// =============== currentWordIndex ===============
let currentWordIndex = 0;

export const setCurrentWordIndex = (newWordIndex) => {
  currentWordIndex = newWordIndex;
};
export const getCurrentWordIndex = () => {
  return currentWordIndex;
};
