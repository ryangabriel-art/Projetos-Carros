let prev = document.getElementById('prev');
let next = document.getElementById('next');
let conteiner = document.querySelector('.conteiner');
let itens = conteiner.querySelectorAll('.List .item');
let indicador = document.querySelector('.indicators');
let dots = indicador.querySelectorAll('ul li');
let list = conteiner.querySelector('.List')

let active = 0;
let firstPosition = 0;
let lastPosition = itens.length - 1;

function repeticao(){
     let itemOld = conteiner.querySelector('.List .item.active');
    itemOld.classList.remove('active');
 
     let dotsOld = indicador.querySelector('ul li.active');
    dotsOld.classList.remove('active');
    dots[active].classList.add('active');

    indicador.querySelector('.number').innerHTML = '0' + (active + 1)

}

next.addEventListener('click', () => {

    list.style.setProperty('--calculation', 1);
   
    if(active + 1 > lastPosition){
        active = 0
    } else {
        active = active + 1
    }
    repeticao();
    itens[active].classList.add('active');

})

prev.addEventListener('click', () => {

     list.style.setProperty('--calculation', -1);

    if(active - 1 < firstPosition){
        active = lastPosition;
    } else {
        active = active - 1;
    }
    repeticao();
    itens[active].classList.add('active');

})