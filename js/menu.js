const getElementCustom = (selector) => {
    return document.querySelector(selector);
}
window.addEventListener("scroll", () => {
    const header = getElement("header");
    if (window.scrollY > 1000) {
        header.classList.add("scroll");
    }
    if (window.scrollY == 0) {
        header.classList.remove("scroll");
    }
});
