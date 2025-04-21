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
let darksocial = document.querySelector("footer .footer_social");


document.getElementById("moon").onclick = function () {
    darktheme.classList.toggle("dark");
    darksearch.classList.toggle("dark-search");
    darkmail.classList.toggle("dark-mail");
    darksocial.classList.toggle("dark-social");
}


// page-break
let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");
let phanTrang = document.getElementById("one");
let phanTrang2 = document.getElementById("two");
let phanTrangNext = document.getElementById("next");
let phanTrangPrev = document.getElementById("prev");

document.getElementById("two").onclick = function () {
    page1.classList.remove("hiennguyenhinh");
    page1.classList.add("tocbien");
    page2.classList.remove("tocbien");
    page2.classList.add("hiennguyenhinh");
    phanTrang.classList.remove("active");
    phanTrang.classList.remove("disabled");
    phanTrangNext.classList.add("disabled");
    phanTrang2.classList.add("active");
    phanTrang2.classList.add("disabled");
    phanTrangNext.classList.add("tocbien");
    phanTrangNext.classList.remove("hiennguyenhinh");
    phanTrangPrev.classList.add("hiennguyenhinh");
    phanTrangPrev.classList.remove("tocbien");

}

document.getElementById("next").onclick = function () {
    page1.classList.remove("hiennguyenhinh");
    page1.classList.add("tocbien");
    page2.classList.remove("tocbien");
    page2.classList.add("hiennguyenhinh");
    phanTrang.classList.remove("active");
    phanTrang.classList.remove("disabled");
    phanTrang2.classList.add("active");
    phanTrang2.classList.add("disabled");
    phanTrangNext.classList.add("tocbien");
    phanTrangNext.classList.remove("hiennguyenhinh");
    phanTrangPrev.classList.add("hiennguyenhinh");
    phanTrangPrev.classList.remove("tocbien");
}

document.getElementById("prev").onclick = function () {
    page2.classList.remove("hiennguyenhinh");
    page2.classList.add("tocbien");
    page1.classList.remove("tocbien");
    page1.classList.add("hiennguyenhinh");
    phanTrang.classList.add("active");
    phanTrang.classList.add("disabled");
    phanTrang2.classList.remove("active");
    phanTrang2.classList.remove("disabled");
    phanTrangNext.classList.remove("active");
    phanTrangNext.classList.remove("disabled");
    phanTrangPrev.classList.add("tocbien");
    phanTrangPrev.classList.remove("hiennguyenhinh");
    phanTrangNext.classList.add("hiennguyenhinh");
    phanTrangNext.classList.remove("tocbien");
}

document.getElementById("one").onclick = function () {
    page2.classList.remove("hiennguyenhinh");
    page2.classList.add("tocbien");
    page1.classList.remove("tocbien");
    page1.classList.add("hiennguyenhinh");
    phanTrang.classList.add("active");
    phanTrang.classList.add("disabled");
    phanTrang2.classList.remove("active");
    phanTrang2.classList.remove("disabled");
    phanTrangNext.classList.remove("active");
    phanTrangNext.classList.remove("disabled");
    phanTrangPrev.classList.add("tocbien");
    phanTrangPrev.classList.remove("hiennguyenhinh");
    phanTrangNext.classList.add("hiennguyenhinh");
    phanTrangNext.classList.remove("tocbien");
}

document.querySelector("footer .btn-orange").onclick = (event) => {
    event.preventDefault();
    window.open("mailto:boithanh01694@gmail.com, nguyenquoctuong@gmail.com, dangtrunghieu@gmail.com?subject=I%20Want%20to%20Subscribe%20Now%20please&body=Plese%20tell%20me%20why??");
}