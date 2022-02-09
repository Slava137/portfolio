const headerList = document.querySelector('.header__container');
const main = document.querySelector('.main');

function changeBackground(event) {
    if (event.target.classList.contains('nav__item')) {
        main.style.backgroundImage = `url(./assets/img/${event.target.dataset.nav}.jpg)`;
      } else if (event.target.classList.contains('logo')) {
        main.style.backgroundImage = `url(./assets/img/${event.target.dataset.nav}.jpg)`;
      }
}
headerList.addEventListener('click', changeBackground);

const navItems = document.querySelectorAll('.nav__item, .logo');

function changeColorNav(event) {
  navItems.forEach((el) => {
    el.classList.remove('active');
  })
  event.target.classList.add('active');
}
headerList.addEventListener('click', changeColorNav);

const mainBtn = document.querySelector('.main__button');
const audio = new Audio();
let isPlay = false;

mainBtn.addEventListener('click', function() {
  mainBtn.classList.toggle('active');
});

function playAudio(){
  if(!isPlay){
      audio.play();
      audio.currentTime = 0;
      isPlay = true;
  }
  else{
      audio.pause();
      isPlay = false;
  }
} 

mainBtn.addEventListener('click', playAudio);

function playNavAudio(el){
  if(el.target.classList.contains('nav__item')){
    audio.src = `./assets/audio/${el.target.dataset.nav}.mp3`;
    audio.currentTime = 0;
    isPlay = true;
    audio.play();    
    mainBtn.classList.toggle('active');
  } else if (el.target.classList.contains('logo')) {
    audio.src = `./assets/audio/${el.target.dataset.nav}.mp3`;
    audio.currentTime = 0;
    isPlay = true;
    audio.play();    
    mainBtn.classList.toggle('active');
  }
}  
headerList.addEventListener('click', playNavAudio);

console.log('Извиняюсь, немного приболел. Постараюсь на днях доделать ещё функционал.\nПрошу просверить позже. Спасибо')