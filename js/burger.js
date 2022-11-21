document.addEventListener('DOMContentLoaded', ()=>{
    var burgerButton = document.querySelector(".icon-menu");
    const menu = document.querySelector(".header-top_menu");
    burgerButton.addEventListener("click", () => {
        console.log("f");
        if (burgerButton.classList.contains("active")) {
            burgerButton.classList.remove("active");
        
            menu.style.left = "-150%";
        
        }
        else {
            burgerButton.classList.add("active");
        
            menu.style.left = "0";
        }

    })
})