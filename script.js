document.addEventListener("DOMContentLoaded", function () {
    const hum_menu = document.querySelector(".hum_menu");
    const nav = document.querySelector(".nav_content");
    hum_menu.addEventListener("click", function () {
        nav.classList.toggle("active");
    })
})