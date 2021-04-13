'use strict';


function toggleMenu() {
    // debugger
    var elHam = document.querySelector('.hamburger');

    if (elHam.classList.contains('is-active') &&
        document.body.classList.contains('menu-open')) {
        elHam.classList.toggle('is-active');
        document.body.classList.toggle('menu-open');
    } else {
        elHam.classList.toggle('is-active');
        document.body.classList.toggle('menu-open');
    }

}