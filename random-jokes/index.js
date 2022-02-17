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
});

console.log(`1.Вёрстка +10:\n- на странице есть цитата и кнопка для смены цитаты +5;\n
- в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5;\n
2.При загрузке страницы приложения отображается рандомная цитата +10;\n
3.При перезагрузке страницы цитата обновляется (заменяется на другую) +10;\n
4.Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +10;\n
5.Смена цитаты сопровождается любым другим эффектом, например, изменяется изображение или меняется фоновый цвет страницы, или проигрывается звук и т.д  +10;\n
6.Можно выбрать один из двух языков отображения цитат: +10;\n
7.Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +0;\n
высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо`);