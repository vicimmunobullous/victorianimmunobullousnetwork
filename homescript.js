document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded

    // Select the opening screen and main content elements
    var openingScreen = document.getElementById("opening-screen");
    var mainContent = document.getElementById("main-content");

    var h1Element = document.querySelector('.openingtext h1');
    var h2Element = document.querySelector('.openingtext h2');

    // Add event listeners for the animation end on each element
    h1Element.addEventListener("animationend", function () {
        // Hide h1 after its animation ends
        h1Element.style.opacity = 0;
    });

    h2Element.addEventListener("animationend", function () {
        // Hide h2 after its animation ends
        h2Element.style.opacity = 0;
    });

    openingScreen.addEventListener("animationend", function () {
        // Hide the opening screen and fade in the main content gradually
        setTimeout(function () {
            mainContent.style.opacity = "1";
            mainContent.style.display = "block";
            openingScreen.style.opacity = "0";
        }, 500);
        setTimeout(function () {
            openingScreen.style.display = "none";
        }, 3000);
    });  

});