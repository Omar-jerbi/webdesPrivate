const dl = document.querySelector('.dl');

let x = 0;

dl.addEventListener('click', () =>{
    if(x%2 == 0){
        const body = document.querySelector('body');
        body.classList.add('dark');
        
        const bar = document.querySelectorAll('.bar');
        bar[0].classList.add('dark-menu');
        bar[1].classList.add('dark-menu');
        bar[2].classList.add('dark-menu');
        x++;
    }else{
        const body = document.querySelector('body');
        body.classList.remove('dark');
        
        const bar = document.querySelectorAll('.bar');
        bar[0].classList.remove('dark-menu');
        bar[1].classList.remove('dark-menu');
        bar[2].classList.remove('dark-menu');
        x++;
    }
});


const menu_logo = document.querySelector('.menu-logo');
const menu_options = document.querySelector('.menu-options');
let x2 = 0;

menu_logo.addEventListener('click', () =>{
    if(x2%2 == 0){
        menu_logo.classList.add('rotate');
        menu_options.classList.add('showing');
        x2++
    }else{
        menu_options.classList.remove('showing');
        menu_logo.classList.remove('rotate');
        x2++
    }
});