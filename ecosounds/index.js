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

const navList = document.querySelector('.nav__list');
const main = document.querySelector('.main');

function changeBackground(event) {
    if (event.target.classList.contains('nav__item')) {
        main.style.backgroundImage = `url(./assets/img/${event.target.dataset.nav}.jpg)`;
      }
}

navList.addEventListener('click', changeBackground);


console.log('Извиняюсь, немного приболел. Постараюсь на днях доделать ещё функционал.\nПрошу просверить позже. Спасибо')