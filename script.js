// Elements de la page HTML
const body = document.querySelector('body');
const header = document.querySelector('header');

// Bouton "btn"
const button = document.querySelector(".btn");

// Event lorsque l'utilisateur scroll
window.onscroll = function() {scrollFunction()};

// Verification afin de faire apparaitre ou non le bouton "scroll to top"
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}
// Fonction "scroll to top" permettant de remonter en haut de la page
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Icon du menu hamburger
const menu = document.querySelector(".menu");
// barre de navigation
const navLinks = document.querySelector(".navLinks");

// permet d'afficher la menu hamburger
menu.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu");
})


// Darkmode
const darkMode = document.querySelector(".darkMode");

// Change le thème de la page en mode sombre
darkMode.addEventListener("click", function() {
    body.classList.toggle("darkMode")
})