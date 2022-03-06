const button = document.querySelector('.button_nav');
const home = document.querySelector('.a-home');
const about = document.querySelector('.a-about');

const main = document.querySelector('main');


button.addEventListener("click", byebye);

main.addEventListener("click", comebackplz);

home.addEventListener("click", comebackplz);
about.addEventListener("click", comebackplz);



function comebackplz(){
    home.classList.remove('come_in');
    about.classList.remove('come_in2');
    button.classList.remove('go_away');

}


function byebye(){
    button.classList.add('go_away');
    home.classList.add('come_in');
    about.classList.add('come_in2');
}




const h = document.querySelector('.home');
const w = document.querySelector('.welcome');
const a = document.querySelector('.about');
const header = document.querySelector('header');


home.addEventListener("click", displayhome);
about.addEventListener("click", displayabout);



function displayabout(){
    h.classList.add('hidden');
    w.classList.add('hidden');
    a.classList.remove('hidden');
}

function displayhome(){
    h.classList.remove('hidden');
    w.classList.add('hidden');
    a.classList.add('hidden');
}





