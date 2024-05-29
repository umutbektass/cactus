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

        /*=============== SHOW SCROLL UP ===============*/
    const scrollUp = ()=>{
        const scrollUp = document.getElementById('scroll-up');

        this.scrollY>=350 ? scrollUp.classList.add('show-scroll') : 
        scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll',scrollUp)

         /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
      const sections = document.querySelectorAll('section[id]')
      
      const scrollActive = ()=>{
        const scrollDown = window.scrollY

        sections.forEach(current=>{
            const sectionHeight = current.offsetHeight,
                    sectionTop = current.offsetTop-58,
                    sectionId  = current.getAttribute('id'),
                    sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
                    if(scrollDown> sectionTop && scrollDown<=sectionTop + sectionHeight){
                        sectionClass.classList.add('active-link')
                    }
                    else{
                        sectionClass.classList.remove('active-link')
                    }
        })
      }
      window.addEventListener('scroll',scrollActive)

      const sr = ScrollReveal({
        origin:'top',
        distance:'80px',
        duration:750,
        delay:300
      })

      sr.reveal(`.home__img, .new__data, .care__img, .contact__content, .footer`)
      sr.reveal(`.home__data, .care__list, .contact__img`,{delay:500})
      sr.reveal(`.new__card`,{delay:500, interval:100})
      sr.reveal(`.shop__card`,{interval:100})

