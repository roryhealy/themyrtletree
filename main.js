const backgroundAudio = document.getElementById("backgroundAudio");
const playPauseButton = document.getElementById("playPause")
let audioPlaying = false

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
  // First pause the audio
  playPauseAudio();

  // Then fade everything out

  // Finally, load in the new content
};
