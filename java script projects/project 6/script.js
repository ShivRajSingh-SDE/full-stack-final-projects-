const video = document.getElementById('video');
const playToggle = document.querySelector('.switch input');

const toggleVideo = () => {
  if (video.paused) {
    video.play();
    playToggle.checked = false;
  } else {
    video.pause();
    playToggle.checked = true;
  }
};

playToggle.addEventListener('click', toggleVideo);