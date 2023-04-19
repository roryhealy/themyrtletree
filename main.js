const backgroundAudio = document.getElementById("backgroundAudio");
const playPauseButton = document.getElementById("playPause");
let audioPlaying = false;
let currentPage = 0;
document.getElementById('arrowLeft').style.opacity = 0;

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
    for (let element of document.querySelectorAll('.headphonesOff')) {
      element.className = 'headphonesOn';
    }
  }, 500);
  setTimeout(() => {
    for (let element of document.querySelectorAll('.headphonesOn')) {
      element.className = 'headphonesOff';
    }
  }, 4500);
  setTimeout(() => {
    for (let element of document.querySelectorAll('.credits')) {
      element.style.display = 'none';
    }
    for (let element of document.querySelectorAll('.controlButtonOff')) {
      element.className = 'controlButtonOn';
    }
    for (let element of document.querySelectorAll('.headphonesOff')) {
      element.style.display = 'none';
    }
    document.querySelector('#beginOff').style.display = 'none';
    document.querySelector('.navigationOff').className = 'navigationOn';
    playPauseAudio()
  }, 6500);
};

const previousPage = () => {
  currentPage -= 1;
  if (currentPage === 0) {
    document.getElementById('arrowLeft').style.opacity = 0;
  }
}

const nextPage = () => {
  currentPage += 1;
  if (currentPage === 1) {
    document.getElementById('arrowLeft').style.opacity = 1;
  }
}
