let burgerMenu = document.querySelector('.burger__menu');
let navTop = document.querySelector('.nav__top');
let body = document.querySelector('body');

burgerMenu.addEventListener('click', function(){
    burgerMenu.classList.toggle('active');
    navTop.classList.toggle('active');
    body.classList.toggle('active');
})

let navLink = document.querySelector('.nav__link');

navLink.addEventListener('click', function(){
    burgerMenu.classList.remove('active');
    navTop.classList.remove('active');
    body.classList.toggle('active');
})

const portfolioBntWinter = document.querySelector('.winter_button');
const portfolioBntSpring = document.querySelector('.spring_button');
const portfolioBntSummer = document.querySelector('.summer_button');
const portfolioBntAutumn = document.querySelector('.autumn_button');
const portfolioImages = document.querySelectorAll('.portfolio__image');

 portfolioBntWinter.addEventListener('click', function() {
    portfolioImages.forEach((img, index) => img.src = `assets/img/winter/${index + 1}.jpg`);
 })
 
 portfolioBntSpring.addEventListener('click', function() {
    portfolioImages.forEach((img, index) => img.src = `assets/img/spring/${index + 1}.jpg`);
 })

 portfolioBntSummer.addEventListener('click', function() {
    portfolioImages.forEach((img, index) => img.src = `assets/img/summer/${index + 1}.jpg`);
 })

 portfolioBntAutumn.addEventListener('click', function() {
    portfolioImages.forEach((img, index) => img.src = `assets/img/autumn/${index + 1}.jpg`);
 })


 console.log("1. Смена изображений в секции portfolio +25\n2. Перевод страницы на два языка +0\n3. Переключение светлой и тёмной темы +0\n4. Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +0\n5. Дополнительный функционал: сложные эффекты для кнопок при наведении +0\nСуммарный балл: 25\n Увы, отстаю по программе, пока ещё JS знаю лишь на этот уровень, попробую сделать ещё функционал во время Cross-Check. Если будет время, перепроверьте\n под конец Cross-Check ещё раз. Спасибо :\)")