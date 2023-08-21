const menu = document.querySelector('#mobile-menu'); // This targets the <div class="navbar__toggle" id="mobile-menu"> //
const menuLinks = document.querySelector('.navbar__menu'); // This targets the <ul class="navbar__menu"> //

// This will target the ul(unordered) list on the index.html //
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});