export const getSpeechVoices = () => {
  return new Promise(function (resolve, reject) {
    const synth = window.speechSynthesis;
    let id;

    id = setInterval(() => {
      if (synth.getVoices().length !== 0) {
        resolve(synth.getVoices());
        clearInterval(id);
      }
    }, 10);
  });
};
