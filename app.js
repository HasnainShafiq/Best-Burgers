const btn = document.querySelector("#menu-button");
const menu = document.querySelector("#mobile-menu");
const home = document.querySelector("#home-screen");
const aboutBtn = document.querySelector("#sm-about");;
const about = document.getElementById("about");
const contactBtn = document.getElementById("sm-contact");
const contact = document.getElementById("contact");
const mobileHome = document.getElementById("mobile-home");
const mobileAbout = document.getElementById("mobile-about");
const mobileContact = document.getElementById("mobile-contact");
const logo = document.getElementById("logo");

logo.addEventListener("click", () => {
    goHome();
})

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
})

mobileHome.addEventListener("click", () => {
    goHome();
    menu.classList.toggle("hidden");
})

mobileAbout.addEventListener("click", ()=> {
    goAbout();
    menu.classList.toggle("hidden");
})

mobileContact.addEventListener("click", ()=> {
    goContact();
    menu.classList.toggle("hidden");
})

aboutBtn.addEventListener("click", ()=> {
    goAbout();
})

contactBtn.addEventListener("click", () => {
    contact.scrollIntoView();
})

function goHome() {
    home.scrollIntoView();
}

function goAbout() {
    about.scrollIntoView();
}
function goContact() {
    contact.scrollIntoView();
}