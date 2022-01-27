console.log("1. Вёрстка соответствует макету. Ширина экрана 768px +48\n 2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки.\n Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n 3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22\nСуммарный балл: 75\n Не выполнено частично: кроме skills, если нажать на остальные пункты меню не срабатывает либо\n закрытие, либо переходит к разделу и нет скрола (не смог пока найти в чём косяк)");

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