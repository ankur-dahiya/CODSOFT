const menuBtn = document.querySelector(".mobile");
const navMenu = document.querySelector(".nav-menu");

function mobileMenu(){
    navMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");
}

function closeMenu(){
    navMenu.classList.toggle("active");
}