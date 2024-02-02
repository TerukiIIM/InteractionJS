// formulaire
let form = document.querySelector(".form");
// Elements du formulaire 
let adressCode = document.querySelector("#adressCode");
let psw = document.querySelector("#password");
let samePsw = document.querySelector("#confirmPassword");

// Autres
// Vérification isNumber et isCaracter
const regExNum = /[0-9]/

// Message de confirmation
let h1 = document.querySelector(".succes")


form.addEventListener("submit", function(event) {
    // Empêche l'actualisation après avoir submit
    event.preventDefault();

    // Vérification si le code postal est constitué que de nombre
    if (!adressCode.value.match(regExNum)) {
        alert("Le code postal n'est pas correct (syntaxe :12345)");
    };

    // Vérification si le mot de passe est le même que la confirmation
    if (samePsw.value !== psw.value && psw.value !== samePsw.value) {
        alert("Le mot de passe et la confirmation ne correspondent pas");
    } else {
        // Faire disparaitre le form
        form.style.display = "none";
        // Faire apparaitre le message de confirmaation
        h1.style.display = "block";
    }
});