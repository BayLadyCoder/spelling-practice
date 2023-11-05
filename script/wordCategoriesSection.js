import { wordsByCategory } from '../scripts/data.js';
import { setSelectedWordList, setCurrentWordIndex } from './index.js';

const categoryList = document.getElementById('category-list');
const wordInfo = document.getElementById('word-info');
const selectedTopic = document.getElementById('selected-topic');
const practiceAreaSection = document.getElementById('practice-area-section');
const prevButton = document.getElementById('prev-btn');

// Set up category list
Object.entries(wordsByCategory).forEach(([group, wordList]) => {
  // Create button for each category and append it to the list
  const button = document.createElement('button');
  button.textContent = group;
  button.classList.add('btn');
  button.classList.add('btn-outline-light');

  categoryList.appendChild(button);

  // register onClick handler for each button
  button.addEventListener('click', () => {
    selectedTopic.textContent = `Category: ${group}`;
    practiceAreaSection.style.display = 'block';
    setSelectedWordList(wordList);
    setCurrentWordIndex(0);
    wordInfo.textContent = `1/${wordList.length}`;
    prevButton.disabled = true;
  });
});
