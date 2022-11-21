var cross = document.querySelector(".icon-menu");
const ad = document.querySelector(".header-top_menu");
cross.addEventListener("click", () => {
    console.log("f");
    if (cross.classList.contains("active")) {
        cross.classList.remove("active");
        
        ad.style.left = "-100%"
    
    }
    else {
        cross.classList.add("active");
        
        ad.style.left = "0";
    }

})