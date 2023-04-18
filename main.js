const backgroundAudio = document.getElementById("backgroundAudio");
const playPauseButton = document.getElementById("playPause");
let audioPlaying = false;

const playPauseAudio = () => {
  if (audioPlaying === true) {
    playPauseButton.innerHTML = playPauseButton.innerHTML.replace('pause', 'play');
    backgroundAudio.pause();
    audioPlaying = false;
  } else {
    playPauseButton.innerHTML = playPauseButton.innerHTML.replace('play', 'pause');
    backgroundAudio.play();
    audioPlaying = true;
  }
};

const stopAudio = () => {
  backgroundAudio.currentTime = 0;
  audioPlaying = true;
  playPauseAudio();
};

const begin = () => {
  // Switch credits to media controls
  document.querySelector('#begin').id = 'beginOff';
  for (let element of document.querySelectorAll('.credits')) {
    element.id = 'creditsOff';
  }
  setTimeout(() => {
    for (let element of document.querySelectorAll('.credits')) {
      element.style.display = 'none';
    }
    for (let element of document.querySelectorAll('.controlButtonOff')) {
      element.className = 'controlButtonOn';
    }
  }, 1000);
  playPauseAudio()
};
