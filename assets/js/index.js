const navMenu = document.querySelector('#nav-menu'),
    navToggle = document.querySelector('#nav-toggle'),
    navClose = document.querySelector('#nav-close')

navToggle.addEventListener('click',function(){
    navMenu.classList.add('show-menu');
})
navClose.addEventListener('click',function(){
    navMenu.classList.remove('show-menu');
})

const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()=>{
    navMenu.classList.remove('show-menu')
}
navLink.forEach(link=>link.addEventListener('click',linkAction))

const blurHeader = ()=>{
    const header = document.querySelector('.header');
    this.scrollY >= 50 ? header.classList.add('blur-header') : 
    header.classList.remove('blur-header')
}

window.addEventListener('scroll',blurHeader)