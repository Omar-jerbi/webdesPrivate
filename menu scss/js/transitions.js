const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const menu_options = document.querySelector('.menu-options');
let x = 0;


menu.addEventListener('click', () =>{
    if(x%2 == 0){
        menu.classList.add('open');
        header.classList.add('hmod');
        menu_options.classList.add('showing');
        x++;
    }else{
        menu_options.classList.remove('showing');
        header.classList.remove('hmod')
        menu.classList.remove('open');
        x++;
    }
});

