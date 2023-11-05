import { getSpeechVoices } from './helpers.js';
import { utterance } from './index.js';

const voiceOptionSection = document.getElementById('voice-option-section');
const voiceSelect = document.getElementById('voice-select');

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
