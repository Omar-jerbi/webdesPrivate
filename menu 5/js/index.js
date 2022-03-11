const dlswitch = document.querySelector('input');
const body = document.querySelector('body');
const selected = document.querySelector('.selected');

let x = 0;
dlswitch.addEventListener('click', ()=>{
   if(x%2 == 0){
        body.classList.add('dark');
        selected.classList.add('dark-selected');
        x++;
   }else{
        body.classList.remove('dark');
        selected.classList.remove('dark-selected');
        x++;
   }
});