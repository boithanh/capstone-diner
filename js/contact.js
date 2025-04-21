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
let darkipcontact = document.querySelector(".contact .contact_content");
let darktilcontact = document.querySelector(".contact .contact_title");
let darksocial = document.querySelector("footer .footer_social");
let bando = document.querySelector(".info .my_info");

document.getElementById("moon").onclick = function () {
    darktheme.classList.toggle("dark");
    darksearch.classList.toggle("dark-search");
    darkmail.classList.toggle("dark-mail");
    darkipcontact.classList.toggle("dark-input-contact");
    darktilcontact.classList.toggle("dark-title-contact");
    darksocial.classList.toggle("dark-social");
    bando.classList.toggle("my__Map");
}

document.querySelector("footer .btn-orange").onclick = (event) => {
    event.preventDefault();
    window.open("mailto:boithanh01694@gmail.com, nguyenquoctuong@gmail.com, dangtrunghieu@gmail.com?subject=I%20Want%20to%20Subscribe%20Now%20please&body=Plese%20tell%20me%20why??");
}