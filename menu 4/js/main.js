const bars = document.querySelectorAll('.bar');
const menu_logo = document.querySelector('.menu-logo');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const header = document.querySelector('header');
const dl = document.querySelector('.dl');


const spanlight = document.querySelector('.ltag');
const spandark = document.querySelector('.dtag');

let x = 0;
dl.addEventListener('click', () =>{
    if(x%2 == 0){
        body.classList.add('dark');
        bars[0].classList.add('border-dark');
        bars[1].classList.add('border-dark');
        bars[2].classList.add('border-dark');
        header.classList.add('header-border-dark');
        spandark.classList.remove('highlight');
        spanlight.classList.add('highlight');
        x++;
    }else{
        body.classList.remove('dark');
        bars[0].classList.remove('border-dark');
        bars[1].classList.remove('border-dark');
        bars[2].classList.remove('border-dark');
        header.classList.remove('header-border-dark');
        spandark.classList.add('highlight');
        spanlight.classList.remove('highlight');
        x++;
    }
});


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
