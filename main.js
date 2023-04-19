const backgroundAudio = document.getElementById("backgroundAudio");
const playPauseButton = document.getElementById("playPause");
let audioPlaying = false;
let currentPage = 0;
const pages = ["overview", "objectives", "howtoplay", "audiovisualstyles", "nameinspiration", "references"]
const arrowLeft = document.querySelector('#arrowLeft')
const arrowRight = document.querySelector('#arrowRight')
arrowLeft.style.opacity = 0;
arrowLeft.style.cursor = 'auto';

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
    document.querySelector(`#${pages[currentPage]}`).style.display = 'block';
    document.querySelector('.centre').style.marginTop = '22dvh';
    playPauseAudio()
  }, 6500);
};

const previousPage = () => {
  if (currentPage === 0) {
    return;
  } else if (currentPage === 1) {
    arrowLeft.style.cursor = 'auto';
    arrowLeft.style.opacity = 0;
  } else if (currentPage <= 5) {
    arrowRight.style.opacity = 1;
    arrowRight.style.cursor = 'pointer';
  }
  document.querySelector(`#${pages[currentPage]}`).style.display = 'none';
  currentPage -= 1;
  document.querySelector(`#${pages[currentPage]}`).style.display = 'block';
}

const nextPage = () => {
  if (currentPage === 5) {
    return;
  } else if (currentPage === 4) {
    arrowRight.style.opacity = 0;
    arrowRight.style.cursor = 'auto';
  } else if (currentPage >= 0) {
    arrowLeft.style.opacity = 1;
    arrowLeft.style.cursor = 'pointer';
  }
  document.querySelector(`#${pages[currentPage]}`).style.display = 'none';
  currentPage += 1;
  document.querySelector(`#${pages[currentPage]}`).style.display = 'block';
}
