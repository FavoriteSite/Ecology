
// * ПОЯВЛЕНИЕ ПОЛЯ INPUT ПРИ НАЖАТИИ НА КНОПКУ-ИКОНКУ

let but = document.querySelector('.header__but');

but.addEventListener('click', showinput);

function showinput(e) {
   let searchInput = document.querySelector('.header__search');

   searchInput.classList.add('active');
   e.preventDefault();
}





// * ВЫДЕЛЕНИЕ ЦВЕТОМ АКТИВНОГО РАЗДЕЛА МЕНЮ

let link = document.querySelectorAll('.menu__link');


if (link.length > 0) {
   for (let i = 0; i < link.length; i++) {

      if (link[i].href == location.href)
         link[i].parentElement.classList.toggle('active');
   }

}






// * ПОКАЗ МЕНЮ БУРГЕР
let menu = document.querySelector('.icon-menu');

menu.addEventListener('click', function (e) {

   let parentMenu = document.querySelector('.menu__container');

   parentMenu.classList.toggle('show-item');
})





// * ПОДНЯТИЕ ВВЕРХ СТРАНИЦЫ ПРИ НАЖАТИИ НА СТРЕЛОЧКУ
let top1 = document.querySelector('.icon-top');

top1.addEventListener('click', function (top) {

   let head = document.querySelector('.header');
   head.scrollIntoView({
      block: 'center',
      behavior: 'smooth'
   });
})





// * SWIPER

new Swiper('.image-slider', {
   //стрелки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },



   //НАВИГАЦИЯ
   // 1  булеты, текущее положение
   pagination: {
      el: '.swiper-pagination',


      //* булеты
      type: 'bullets',
      //*переключать нажатием на булеты
      clickable: true,
      //* динамические булеты. Самая большая по середине выбранная
      dynamicBullets: true,

   },




   // * включение/отключение
   //*перетаскивание на пк мышью  / false - запрещено
   simulateTouch: true,

   // *чувствительность к перетаскиванию от 0 до 1 / 0  - запретить
   touchRatio: 1,

   //*угол срабатывания свайпа/перетаскивания на сенсорном устройстве
   touchAngle: 180,

   //*курсор перетаскивания при наведении на слайд выглядит как рука 
   grabCursor: true,




   //* управление клавиатурой
   keyboard: {
      //* включает или нет впринципе возможность управления клавиатурой
      enabled: true,
      // * переключение слайдов стрелочками вправо / влево
      pageUpDown: true,
   },


   //* управление колесом мышью
   mousewheel: {
      // * чувствительность колеса
      sensitivity: 1,
      //* класс объекта на котором будет крутиться колесо
      eventsTarget: ".image-slider",
   },

});