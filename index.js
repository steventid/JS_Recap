window.addEventListener("load", function() {
    
    let menuButton = document.querySelector("#menuButton");
    let sideMenu = document.querySelector("#sideMenu");
    let content = document.querySelector("#content");
    let text = document.querySelector("#text");
    let menuSliding = false;
    let menuHidden = true;
    let currentPage = 0;

    let buttonArray = document.getElementsByTagName("button");
    let paraArray = document.getElementsByClassName("hidden");

    for(let i=1; i< buttonArray.length; i++) {
        buttonArray[i].addEventListener("click", function() {
            text.classList.add("fadeOut");
            currentPage = i-1;
        });
    }

    menuButton.addEventListener("click", function() {
        if(menuSliding) return;
        if(menuHidden) {
            showMenu(sideMenu, content);
        } else {
            hideMenu(sideMenu, content);
        }
    });    

    sideMenu.addEventListener("animationstart", function() {
        menuSliding = true;
    });

    sideMenu.addEventListener("animationend", function() {
        menuSliding = false;
        menuHidden = !menuHidden;
    });

    text.addEventListener("animationend", function() {
        //this was the end of a fadeOut event
        if (window.getComputedStyle(text).getPropertyValue("opacity") === "0") {
            text.innerHTML = paraArray[currentPage].innerHTML;
            text.classList.remove("fadeOut");
            text.classList.add("fadeIn");
        } else {
            text.classList.remove("fadeIn");
        }
    });
});


function showMenu(sideMenu, content) {
    sideMenu.classList.remove("slideOut");
    content.classList.remove("contentMenuClosed");
    sideMenu.classList.add("slideIn");
    content.classList.add("contentMenuOpen");
}

function hideMenu(sideMenu, content) {
    sideMenu.classList.remove("slideIn");
    content.classList.remove("contentMenuOpen");
    sideMenu.classList.add("slideOut");
    content.classList.add("contentMenuClosed");
}