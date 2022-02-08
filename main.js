// Seleziono l'icona del menu hamburger
const iconHamburger = document.querySelector(".fas.fa-bars");
console.log(iconHamburger);

// Seleziono hamburger-menu html
const hamburgerMenu = document.querySelector(".hamburger-menu");
console.log(hamburgerMenu);

// Al clic del mouse apro il menu
iconHamburger.addEventListener("click", function(){
    
        console.log("menù aperto");
    
        hamburgerMenu.classList.add("active");  
        console.log(hamburgerMenu);
    }
    
)

// Seleziono l'icona della chiusura menu
const iconClose = document.querySelector(".fas.fa-times");
console.log(iconClose);


// Al clic del mouse chiudo il menu
iconClose.addEventListener("click", function(){

        console.log("menù chiuso");

        hamburgerMenu.classList.remove("active");
        console.log(hamburgerMenu);
    }
)