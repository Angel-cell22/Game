document.addEventListener("DOMContentLoaded", () => {
    console.log("JS загружен и работает!");

    const links = document.querySelectorAll(".neon-list a");

    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.2)";
            link.style.transition = "transform 0.3s ease-in-out";
        });

        link.addEventListener("mouseleave", () => {
            link.style.transform = "scale(1)";
        });
    });
});
