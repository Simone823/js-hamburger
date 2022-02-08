// Seleziono l'icona del menu hamburger
const iconHamburger = document.querySelector(".fas.fa-bars");
console.log(iconHamburger);

// Seleziono hamburger-menu html
const hamburgerMenu = document.querySelector(".hamburger-menu");
console.log(hamburgerMenu);

// Al clic del mouse apro il menu
iconHamburger.addEventListener("click", function(){
    
        console.log("menù aperto");
    

        hamburgerMenu.style.display = "block";   
        console.log(hamburgerMenu);
    }
    
)