var header = document.querySelector('header'); 
var headerCon = document.querySelector('.header-content');


window.addEventListener('scroll', () => {
    header.classList.toggle('bg-white', this.window.scrollY > 0);
    headerCon.classList.toggle('width80', this.window.scrollY > 0);
})



const nav = document.querySelector('nav'); 
const bars = document.querySelector('#bars'); 

bars.addEventListener('click', () => {
    nav.classList.toggle('open');
    bars.classList.toggle('fa-x');
})