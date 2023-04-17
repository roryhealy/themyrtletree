const backgroundAudio = document.getElementById("backgroundAudio");

const playAudio = () => {
  backgroundAudio.play();
};

const pauseAudio = () => {
  backgroundAudio.pause();
};

const stopAudio = () => {
  backgroundAudio.pause();
  backgroundAudio.currentTime = 0;
};
