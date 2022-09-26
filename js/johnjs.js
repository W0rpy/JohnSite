let buttonBurger = document.querySelector('.burger');
let navMenu = document.querySelector('.nav_menu');
buttonBurger.addEventListener('click', function () {
   buttonBurger.classList.toggle('active');
   navMenu.classList.toggle('active');
})