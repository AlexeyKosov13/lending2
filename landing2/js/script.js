const swiper1 = document.querySelector(".slider-container");
const swiper2 = document.querySelector(".swiper-container");
const burger = document.querySelector(".burger");
const close = document.querySelector(".menu__close");
const menu = document.querySelector(".menu");

let swiperSlider1 = new Swiper(swiper1, {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 100,   
});

let swiperSlider2 = new Swiper(swiper2, {
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.btn-right',
        prevEl: '.btn-left',
      },
    
});

burger.addEventListener('click', () => {
    menu.classList.add('menu--visible');
});

close.addEventListener('click', () => {
    menu.classList.remove('menu--visible');
})