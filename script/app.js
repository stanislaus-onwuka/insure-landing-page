const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const openHamburger = document.getElementById('hamburger-open');
const closeHamburger = document.getElementById('hamburger-close');

openHamburger.addEventListener('click', ()=>{
    mobileNav.classList.add('nav-out');
    closeHamburger.style.display = 'block';
    openHamburger.style.display = 'none'
})

closeHamburger.addEventListener('click', ()=>{
    mobileNav.classList.remove('nav-out');
    closeHamburger.style.display = 'none';
    openHamburger.style.display = 'block';
})
