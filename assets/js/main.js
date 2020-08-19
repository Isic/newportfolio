/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 

/* DARK MODE SWITCH */
document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        changeOpacity();
      } else {
        changeOpacityBack();
      }
    });
  });

  function changeOpacity() {
    document.querySelectorAll(".nav__link").forEach(el => {
        el.style.color = "#fff";
    });
    document.body.style.background = "#0E2431";
    document.body.style.color = "#fff";
    document.querySelector(".l-header").style.background = "#021922";
    document.querySelector(".nav__logo").style.color = "#fff";
    document.querySelectorAll(".home__social-icon").forEach( icon => {
        icon.style.color = "#fff";
    });
    document.querySelector(".footer").style.background = "#021922";
}
    function changeOpacityBack() {
        document.querySelectorAll(".nav__link").forEach(el => {
            el.style.color = "#0e2431";
        });
        document.body.style.background = "#fff";
        document.body.style.color = "#0e2431";
        document.querySelector(".l-header").style.background = "#fff";
        document.querySelector(".nav__logo").style.color = "#0e2431";
        document.querySelector(".footer").style.background = "#0e2431";
    }

