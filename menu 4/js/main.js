const bars = document.querySelectorAll('.bar');
const menu_logo = document.querySelector('.menu-logo');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const header = document.querySelector('header');


menu_logo.addEventListener('click', () => {
    bars[0].classList.add('bar-reduc');
    bars[1].classList.add('bar-reduc');
    bars[2].classList.add('bar-reduc');

    menu.classList.add('menu-show');
    body.classList.add('menu-body');
    header.classList.add('header-mod');
});


menu.addEventListener('click', () =>{
    bars[0].classList.remove('bar-reduc');
    bars[1].classList.remove('bar-reduc');
    bars[2].classList.remove('bar-reduc');

    menu.classList.remove('menu-show');
    body.classList.remove('menu-body');
    header.classList.remove('header-mod');
});
