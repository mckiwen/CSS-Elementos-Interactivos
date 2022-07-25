window.addEventListener("load", inicio);
function inicio() {
    document.getElementById("switch").addEventListener("click", switchTheme, false);
    document.getElementById("checkbox").addEventListener("click", habilitar, false);
    document.getElementById("menu-icon").addEventListener("click", desplegaMenu, false);
    document.getElementById("adelante").addEventListener("click", transiciones, false);
    document.getElementById("switch").addEventListener("click", interruptor, false);

    // Listener by className
    var elements = document.getElementsByClassName("accordion-title");

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', displayAccordion, false);
    }
}


function switchTheme(){
    document.getElementsByTagName('body')[0].classList.toggle('dark-theme');
}

// Habilitar button - checkbox checked
function habilitar() {
    var checkBox = document.getElementById("checkbox");
    var button = document.getElementById("adelante");
    if (checkBox.checked == true) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

// Desplegar Menu lateral
function desplegaMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("display-menu");

    var opacity = document.getElementById("main-opacity");
    opacity.classList.toggle("main-opacity-display");
}

// Transiciones antes - despues del spinner
function transiciones() {
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "flex";
    setTimeout(transicion2, 2000);
}
function transicion2() {
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "flex";
}

// Traslada el interruptor dark-mode
function interruptor() {
    document.getElementById("switch-1").classList.toggle("switch-translate");
}

// Accordion
function displayAccordion() {
    var disElements = document.getElementsByClassName("display-accordion");
    for (var i = 0; i < disElements.length; i++) {
        if(disElements[i] != this.nextElementSibling){
            disElements[i].classList.toggle("display-accordion");
        }        
    }

    var disElements2 = document.getElementsByClassName("rotate-icon");
    for (var i = 0; i < disElements2.length; i++) {
        if(disElements2[i] != this.children[1]){
            disElements2[i].classList.toggle("rotate-icon");
        }        
    }
    this.children[1].classList.toggle("rotate-icon");
    this.nextElementSibling.classList.toggle("display-accordion");
}