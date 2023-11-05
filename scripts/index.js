import { wordsByCategory } from './data.js';

// GLOBAL VARIABLES

export const utterance = new SpeechSynthesisUtterance();

// =============== selectedWordList ===============
let selectedWordList = wordsByCategory.People;

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

// =============== selectedCategory ===============
let selectedCategory = 'People';

export const setSelectedCategory = (newCategory) => {
  selectedCategory = newCategory;
};
export const getSelectedCategory = () => {
  return selectedCategory;
};

// Set up initial values on app starts
const selectedTopic = document.getElementById('selected-topic');
const wordInfo = document.getElementById('word-info');

selectedTopic.textContent = `Category: ${selectedCategory}`;
wordInfo.textContent = `1/${selectedWordList.length}`;
