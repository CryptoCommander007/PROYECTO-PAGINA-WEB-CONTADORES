document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("sp-overlay");
    const spinner = document.querySelector(".sp-spinner");
    const title = document.querySelector(".sp-title h4");

    setTimeout(() => {
        title.style.opacity = 0;
        title.style.transform = "translateY(-20px)";
    }, 1000); // Espera 2 segundos antes de iniciar la animación de título

    setTimeout(() => {
        spinner.style.opacity = 0;
        spinner.style.transform = "scale(0)";
    }, 2000); // Espera 3 segundos antes de iniciar la animación del spinner

    setTimeout(() => {
        overlay.style.opacity = 0;
    }, 2500); // Espera 4 segundos antes de iniciar la animación del overlay

    setTimeout(() => {
        overlay.style.display = "none";
    }, 3000); // Espera 4.5 segundos antes de ocultar completamente el overlay
});
