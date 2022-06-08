let errorMsgShown = false;

document.addEventListener("keypress", e => {
    if(e.key == "Enter") {
        logIn()
    }
})

function logIn() {
    let gmail = document.getElementById("gmail").value;
    let pw = document.getElementById("pw").value;
    if(gmail == "admin" && pw == "adminpw"){
        window.location = "./pages/home-page.html"
    } else {
        if(errorMsgShown == false ) {
            let container = document.querySelector("#container")
            let errorMsg = document.createElement("p");
            errorMsg.textContent = "Your Gmail or password is incorrect!";
            errorMsg.style.cssText = "color: red;";
            container.appendChild(errorMsg);
            errorMsgShown = true;
            return errorMsgShown;
        }
    }
};

let more = document.getElementById("more");
let moreMenu = document.getElementById("moreMenu");
let moreMenuOpen = false;

more.addEventListener("click", () => {
    moreDropDown()
});

function moreDropDown() {    
    if(moreMenuOpen == false){
        moreMenu.style.display = "flex";
        moreMenuOpen = true;
        return moreMenuOpen;
    }  else {
        moreMenu.style.display = "none";
        moreMenuOpen = false;
        return moreMenuOpen;
    }
}
