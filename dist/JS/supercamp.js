//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function (){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else{
        header.classList.remove('navbar-fixed');
    }
};
//caraousel testimoni 
let slidercarousel = document.getElementById('slidercarousel');
let slids = document.getElementById('slids');
let card = slids.getElementsByTagName('li');

let elementToShow = 3;
if(document.body.clientWidth<1000){
    elementToShow = 1;
}else if(document.body.clientWidth<1500){
    elementToShow = 2;
}

let slidercarouselWidth = slidercarousel.clientWidth;

let cardWidth = slidercarouselWidth/elementToShow;

slids.style.width = card.length*cardWidth+'px';
slids.style.transition='margin';
slids.style.transitionDuration='1s';

for (let index = 0; index < card.length; index++) {
    const element = card[index];
    element.style.width = cardWidth+'px';
}

function before(){
    if(+slids.style.marginLeft.slice(0, -2) != -cardWidth * (card.length - elementToShow))
        slids.style.marginLeft = ((+slids.style.marginLeft.slice(0, -2)) - cardWidth)+'px'
}

function after() {
    if (+slids.style.marginLeft.slice(0, -2) != 0)
        slids.style.marginLeft = ((+slids.style.marginLeft.slice(0, -2)) + cardWidth)+'px'
}