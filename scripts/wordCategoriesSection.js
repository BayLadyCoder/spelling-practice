import { wordsByCategory } from './data.js';
import {
  setSelectedWordList,
  setCurrentWordIndex,
  setSelectedCategory,
  getSelectedCategory,
} from './index.js';

const categoryList = document.getElementById('category-list');
const wordInfo = document.getElementById('word-info');
const selectedTopic = document.getElementById('selected-topic');
const practiceAreaSection = document.getElementById('practice-area-section');
const prevButton = document.getElementById('prev-btn');

// Set up category list
Object.entries(wordsByCategory).forEach(([categoryName, wordList], index) => {
  // Create button for each category and append it to the list
  const button = document.createElement('button');
  button.textContent = categoryName;
  button.dataset.category = categoryName;

  button.classList.add('btn');

  if (index === 0) {
    button.classList.add('btn-light');
  } else {
    button.classList.add('btn-dark');
  }

  categoryList.appendChild(button);

  // register onClick handler for each button
  button.addEventListener('click', () => {
    selectedTopic.textContent = `Category: ${categoryName}`;
    wordInfo.textContent = `1/${wordList.length}`;
    prevButton.disabled = true;

    const previouslySelectedCategory = getSelectedCategory();
    const prevCategoryButton = document.querySelector(
      `[data-category='${previouslySelectedCategory}']`
    );

    prevCategoryButton.classList.remove('btn-light');
    prevCategoryButton.classList.add('btn-dark');

    button.classList.remove('btn-dark');
    button.classList.add('btn-light');

    setSelectedCategory(categoryName);
    setSelectedWordList(wordList);
    setCurrentWordIndex(0);
  });
});
