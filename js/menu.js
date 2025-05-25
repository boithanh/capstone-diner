const getElementCustom = (selector) => {
    return document.querySelector(selector);
}
window.addEventListener("scroll", () => {
    const header = getElement("header");
    if (window.scrollY > 500) {
        header.classList.add("scroll");
    }
    if (window.scrollY == 0) {
        header.classList.remove("scroll");
    }
});

//DarkTheme
let darktheme = document.querySelector("body");
let darksearch = document.querySelector(".header_right input");
let darkmail = document.querySelector(".footer_content input");
getElementCustom("#moon .fa-moon").onclick = function () {
    getElementCustom("#moon .fa-sun").classList.remove("hidden");
    getElementCustom("#moon .fa-moon").classList.remove("active");
    getElementCustom("#moon .fa-moon").classList.toggle("hidden");
    getElementCustom("#moon .fa-sun").classList.toggle("active");
    darktheme.classList.toggle("dark");
    darksearch.classList.toggle("dark-search");
    darkmail.classList.toggle("dark-mail");
}
getElementCustom("#moon .fa-sun").onclick = function () {
    getElementCustom("#moon .fa-sun").classList.remove("active");
    getElementCustom("#moon .fa-moon").classList.remove("hidden");
    getElementCustom("#moon .fa-sun").classList.toggle("hidden");
    getElementCustom("#moon .fa-moon").classList.toggle("active");
    darktheme.classList.toggle("dark");
    darksearch.classList.toggle("dark-search");
    darkmail.classList.toggle("dark-mail");
}
