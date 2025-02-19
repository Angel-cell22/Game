let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let menu = document.querySelector(".menu");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        menu.style.top = "-50px"; 
    } else {
        menu.style.top = "0";
    }
    
    lastScrollTop = scrollTop;
});
