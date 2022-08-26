const swiper1 = document.querySelector(".slider-container");
const swiper2 = document.querySelector(".swiper-container");
const burger = document.querySelector(".burger");
const close = document.querySelector(".menu__close");
const menu = document.querySelector(".menu");
const playButtonsFirst = document.querySelectorAll(".main-slider__play");

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

swiperSlider2.on('transitionEnd', () => {
    let videos = document.querySelectorAll(".first-slider video");
    videos.forEach((el) => {
        el.pause();      
    });
    playButtonsFirst.forEach((el) => {
        el.style.display = "block";
    });
})

burger.addEventListener('click', () => {
    menu.classList.add('menu--visible');
});

close.addEventListener('click', () => {
    menu.classList.remove('menu--visible');
});

playButtonsFirst.forEach((el) => {
    el.addEventListener('click', (e) => {
        
        let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
        e.currentTarget.style.display = 'none';
        video.play();
    });
});


// inputMask
let selector = document.querySelectorAll('input[type=tel]');

let im = new Inputmask('+7 (999) 999-99-99');

im.mask(selector);


// validate forms
let validateForms = function(selector, rules) {

	new window.JustValidate(selector, {
		rules: rules,
		submitHandler: function (form, values, ajax) {
			var formData = new FormData(form);

			var xhr = new XMLHttpRequest();


			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {

					if (xhr.status === 200) {
						console.log('Отправлено!')
					} else {

					}
				}
			}

			// Add any event handlers here...
			xhr.open('POST', "mail.php", true);
            xhr.send(formData);

            form.reset();
		},
	});
}

// validateForms('.mailing__form', { email: { required: true, email: true } }, 'mailing-window', 'materialy s proshloj konferencii');
validateForms('.newsletter__form', { email: { required: true, email: true }, tel: { required: true } });
validateForms('.subs-form', { email: { required: true, email: true } });
