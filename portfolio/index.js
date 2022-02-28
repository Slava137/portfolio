const i18Obj = {
   'en': {
     'skills': 'Skills',
     'portfolio': 'Portfolio',
     'video': 'Video',
     'price': 'Price',
     'contacts': 'Contacts',
     'hero-title': 'Alexa Rise',
     'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
     'hire': 'Hire me',
     'skill-title-1': 'Digital photography',
     'skill-text-1': 'High-quality photos in the studio and on the nature',
     'skill-title-2': 'Video shooting',
     'skill-text-2': 'Capture your moments so that they always stay with you',
     'skill-title-3': 'Rotouch',
     'skill-text-3': 'I strive to make photography surpass reality',
     'skill-title-4': 'Audio',
     'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
     'winter': 'Winter',
     'spring': 'Spring',
     'summer': 'Summer',
     'autumn': 'Autumn',
     'price-sub-title-standart': 'Standpart',
     'price-sub-title-premium': 'Premium',
     'price-sub-title-gold': 'Gold',
     'price-description-1-span-1': 'One location',
     'price-description-1-span-2': '120 photos in color',
     'price-description-1-span-3': '12 photos in retouch',
     'price-description-1-span-4': 'Readiness 2-3 weeks',
     'price-description-1-span-5': 'Make up, visage',
     'price-description-2-span-1': 'One or two locations',
     'price-description-2-span-2': '200 photos in color',
     'price-description-2-span-3': '20 photos in retouch',
     'price-description-2-span-4': 'Readiness 1-2 weeks',
     'price-description-2-span-5': 'Make up, visage',
     'price-description-3-span-1': 'Three locations or more',
     'price-description-3-span-2': '300 photos in color',
     'price-description-3-span-3': '50 photos in retouch',
     'price-description-3-span-4': 'Readiness 1 week',
     'price-description-3-span-5': 'Make up, visage, hairstyle',
     'order': 'Order shooting',
     'contact-me': 'Contact me',
     'placeholder-email': 'E-mail',
     'placeholder-phone': 'Phone',
     'placeholder-message': 'Message',
     'send-message': 'Send message'
   },
   'ru': {
     'skills': 'Навыки',
     'portfolio': 'Портфолио',
     'video': 'Видео',
     'price': 'Цены',
     'contacts': 'Контакты',
     'hero-title': 'Алекса Райс',
     'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
     'hire': 'Пригласить',
     'skill-title-1': 'Фотография',
     'skill-text-1': 'Высококачественные фото в студии и на природе',
     'skill-title-2': 'Видеосъемка',
     'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
     'skill-title-3': 'Ретушь',
     'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
     'skill-title-4': 'Звук',
     'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
     'winter': 'Зима',
     'spring': 'Весна',
     'summer': 'Лето',
     'autumn': 'Осень',
     'price-sub-title-standart': 'Стандарт',
     'price-sub-title-premium': 'Премиум',
     'price-sub-title-gold': 'Золотой',
     'price-description-1-span-1': 'Одна локация',
     'price-description-1-span-2': '120 цветных фото',
     'price-description-1-span-3': '12 отретушированных фото',
     'price-description-1-span-4': 'Готовность через 2-3 недели',
     'price-description-1-span-5': 'Макияж, визаж',
     'price-description-2-span-1': 'Одна-две локации',
     'price-description-2-span-2': '200 цветных фото',
     'price-description-2-span-3': '20 отретушированных фото',
     'price-description-2-span-4': 'Готовность через 1-2 недели',
     'price-description-2-span-5': 'Макияж, визаж',
     'price-description-3-span-1': 'Три локации и больше',
     'price-description-3-span-2': '300 цветных фото',
     'price-description-3-span-3': '50 отретушированных фото',
     'price-description-3-span-4': 'Готовность через 1 неделю',
     'price-description-3-span-5': 'Макияж, визаж, прическа',
     'order': 'Заказать съемку',
     'contact-me': 'Свяжитесь со мной',
     'send-message': 'Отправить'
   }
 }

let burgerMenu = document.querySelector('.burger__menu');
let navTop = document.querySelector('.nav__top');
let body = document.querySelector('body');

burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
    navTop.classList.toggle('active');
    body.classList.toggle('active');
})

let navLink = document.querySelector('.nav__link');

navLink.addEventListener('click', function() {
    burgerMenu.classList.remove('active');
    navTop.classList.remove('active');
    body.classList.remove('active');
})

const portfolioBntWinter = document.querySelector('.winter_button');
const portfolioBntSpring = document.querySelector('.spring_button');
const portfolioBntSummer = document.querySelector('.summer_button');
const portfolioBntAutumn = document.querySelector('.autumn_button');
const portfolioImages = document.querySelectorAll('.portfolio__image');

 portfolioBntWinter.addEventListener('click', function() {
    portfolioImages.forEach((img, index) => img.src = `assets/img/winter/${index + 1}.jpg`);
    portfolioBntWinter.classList.add('active');
    portfolioBntAutumn.classList.remove('active');
    portfolioBntSummer.classList.remove('active');
    portfolioBntSpring.classList.remove('active');
 });
 
 portfolioBntSpring.addEventListener('click', function() {
    portfolioImages.forEach((img, index) => img.src = `assets/img/spring/${index + 1}.jpg`);   
    portfolioBntSpring.classList.add('active');
    portfolioBntSummer.classList.remove('active');
    portfolioBntAutumn.classList.remove('active');
    portfolioBntWinter.classList.remove('active');
 });

 portfolioBntSummer.addEventListener('click', function() {
    portfolioImages.forEach((img, index) => img.src = `assets/img/summer/${index + 1}.jpg`);
    portfolioBntSummer.classList.add('active');
    portfolioBntAutumn.classList.remove('active');
    portfolioBntWinter.classList.remove('active');
    portfolioBntSpring.classList.remove('active');        
 });

 portfolioBntAutumn.addEventListener('click', function() {
    portfolioImages.forEach((img, index) => img.src = `assets/img/autumn/${index + 1}.jpg`);
    portfolioBntAutumn.classList.add('active');
    portfolioBntWinter.classList.remove('active');
    portfolioBntSpring.classList.remove('active');
    portfolioBntSummer.classList.remove('active');    
 });

 const enBtn = document.querySelector('.en');
 const ruBtn = document.querySelector('.ru');


 ruBtn.addEventListener('click', function() {
   ruBtn.classList.add('active');
   enBtn.classList.remove('active');
   let lang = document.querySelectorAll('[data-i18r]');
   lang.forEach(el => {
      el.textContent = i18Obj['ru'][el.dataset.i18r]
      });
 });

 enBtn.addEventListener('click', function() {
   enBtn.classList.add('active');
   ruBtn.classList.remove('active');
   let lang = document.querySelectorAll('[data-i18r]');
   lang.forEach(el => {
      el.textContent = i18Obj['en'][el.dataset.i18r]
      });
 }); 
 

 console.log("1. Смена изображений в секции portfolio +25\n2.Перевод страницы на два языка +25\n3. Переключение светлой и тёмной темы +0\n4. Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +0\n5. Дополнительный функционал: сложные эффекты для кнопок при наведении +0\nСуммарный балл: 50\n Увы, отстаю по программе, пока ещё JS знаю лишь на этот уровень, попробую сделать ещё функционал во время Cross-Check. Если будет время, перепроверьте\n под конец Cross-Check ещё раз. Спасибо :\)");