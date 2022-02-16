const button = document.querySelector('.main_button');
const textQuote = document.querySelector('.main_text');
const buttonEn = document.querySelector('.en');
const buttonRu = document.querySelector('.ru');
const heroImage = document.querySelector('.hero__image');
const audio = new Audio();

function playAudio() {
  audio.src = `./assets/op.mp3`;
  audio.play();   
}

const url = 'https://api.icndb.com/jokes/random';

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    textQuote.textContent = data.value.joke;    
}

async function getQuotes() {  
    const quotes = 'chuck-jokes-ru.json';
    const res = await fetch(quotes);
    const data = await res.json();
    addData(data);  
}

function addData(data) {
  let random = Math.floor(Math.random() * 619);
  textQuote.textContent = data.value[random].joke;
}

window.addEventListener("load", getData);

buttonEn.addEventListener('click', function() {
  buttonEn.classList.add('active');
  buttonRu.classList.remove('active');
  getData();
  playAudio();
});

buttonRu.addEventListener('click', function() {  
  buttonRu.classList.add('active');
  buttonEn.classList.remove('active');
  button.textContent = 'Ну давай!'
  getQuotes();
  playAudio();
});

button.addEventListener('click', function() {
  if (buttonEn.classList.contains('active')) {
    getData();
  } else if (buttonRu.classList.contains('active')) {
    getQuotes();
  }
  playAudio();
})

