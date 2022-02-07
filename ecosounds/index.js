let mainBtn = document.querySelector('.main__button');

const audio = new Audio();

function playAudio() {
    audio.src = './assets/audio/forest.mp3';
    audio.currentTime = 0;
    audio.play();
  }
  
  function pauseAudio() {
    audio.pause();
  }

mainBtn.addEventListener('click', function() {
    mainBtn.classList.toggle('active');
    playAudio();
})

console.log('Извиняюсь, немного приболел. Постараюсь на днях доделать ещё функционал.\nПрошу просверить позже. Спасибо')