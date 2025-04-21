//Menu xổ xuống
const getElement = (selector) => {
    return document.querySelector(selector);
}

getElement(".header_navbar").addEventListener("click", () => {
    const headerMenu = getElement(".header_menu");
    if (headerMenu.classList == "header_menu hide") {
        headerMenu.classList = "header_menu show";
    } else {
        headerMenu.classList = "header_menu hide";
    }
    const headerNav = getElement(".header_navbar");
    if (headerNav.classList == "header_navbar hide") {
        headerNav.classList = "header_navbar show";
    } else {
        headerNav.classList = "header_navbar hide";
    }
})

//DarkTheme
let darktheme = document.querySelector("body");
let darksearch = document.querySelector(".header_right input");
let darkmail = document.querySelector(".footer_content input");
let featureHeaderDarkTheme1 = document.getElementById("featureHeader1");
let featureHeaderDarkTheme2 = document.getElementById("featureHeader2");
let featureHeaderDarkTheme3 = document.getElementById("featureHeader3");
let featureHeaderDarkTheme4 = document.getElementById("featureHeader4");
let featureHeaderDarkTheme5 = document.getElementById("featureHeader5");
let featureHeaderDarkTheme6 = document.getElementById("featureHeader6");
document.getElementById("moon").onclick = function () {
    darktheme.classList.toggle("dark");
    darksearch.classList.toggle("dark-search");
    darkmail.classList.toggle("dark-mail");
    featureHeaderDarkTheme1.classList.toggle("text-white");
    featureHeaderDarkTheme2.classList.toggle("text-white");
    featureHeaderDarkTheme3.classList.toggle("text-white");
    featureHeaderDarkTheme4.classList.toggle("text-white");
    featureHeaderDarkTheme5.classList.toggle("text-white");
    featureHeaderDarkTheme6.classList.toggle("text-white");
}

document.querySelector("footer .btn-orange").onclick = (event) => {
    event.preventDefault();
    window.open("mailto:boithanh01694@gmail.com, nguyenquoctuong@gmail.com, dangtrunghieu@gmail.com?subject=I%20Want%20to%20Subscribe%20Now%20please&body=Plese%20tell%20me%20why??");
}