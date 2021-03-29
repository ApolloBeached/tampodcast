function navSlide() {

    // Hämtar olika divs
    const burger = document.querySelector(".burger"); //Hämtar burger CSS som möjliggör att visa 3 parallellt horizontella strecken
    const nav = document.querySelector(".nav-links"); 
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        // Växlar navigationen beroende på enhetens storlek
        nav.classList.toggle("nav-active");
        
        //Animerar länkarna då något klickas på en av navigations knapparna
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`; // Skapar en animation då man öppnar navigationen då enheten är mindre i storlek
            }
        });
        
        
        burger.classList.toggle("toggle"); //Burger animationen
    });
    
}

navSlide(); // Kör navSlide funktionen