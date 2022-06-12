let toolbarIcons = document.querySelectorAll(".toolbarImages");
Array.from(toolbarIcons)

for(let i = 0; i < toolbarIcons.length; i++) {
    toolbarIcons[i].addEventListener("click", e => {
        toolbarIcons.forEach(item => {
            item.classList.remove("active")
        })
        e.target.classList.add("active");
    })
}

// different menu options
// the functions trigerd by "onclick" in ./pages/home-page.html
let homePage = document.getElementById("homePage");
function homePageOpen(){
    homePage.style.display = "flex";

    profilePage.style.display = "none";
    notificationsPage.style.display = "none";
};
let profilePage = document.getElementById("profilePage");
function profilePageOpen(){
    profilePage.style.display = "flex";

    homePage.style.display = "none";
    notificationsPage.style.display = "none";
};
let notificationsPage = document.getElementById("notificationsPage");
function notificationsPageOpen(){
    notificationsPage.style.display = "flex";

    homePage.style.display = "none";
    profilePage.style.display = "none";
};
//age for about me
let currentYear = new Date().getFullYear();
let myAge = document.getElementById("age");
myAge.textContent = currentYear - 2006;
