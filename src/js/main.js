/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav__menu'),
      navToggel = document.getElementById('nav__toggle'),
      navClose = document.querySelector('.close'),
      navItem= document.querySelectorAll('.nav__item');





if(navToggel) {
    navToggel.addEventListener('click', function () {
        navMenu.classList.add('show__menu')
    })
}
if(navClose) {
    navClose.addEventListener('click' , function () {
        navMenu.classList.remove('show__menu')
    })
}

navItem.forEach(item => {
    item.addEventListener('click', function ( ){
        navMenu.classList.remove('show__menu')
    })
})






/*===== MENU SHOW =====*/
/* Validate if constant exists */


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/


/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 