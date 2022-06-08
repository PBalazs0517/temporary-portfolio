// bar
let rightBar = document.getElementById("rightBar");

//random width
let randomW = "";
function randomWidth(){
    randomW = Math.floor(Math.random() * 20) + 1 + "%";
    return randomW;
};

//changes the width of the boxes
function changeBox(){
    for(let i = 1; i < 201; i++){
        let box = document.getElementById(`boxR${i}`)
        randomWidth();
        box.style.width = randomW;
    }
}

// creates boxex for rightBar
for(let i = 1; i < 201; i++){
    let box = document.createElement("div");
    randomWidth();
    box.style.width = randomW;
    box.id = `boxR${i}`;
    box.classList.add("box");
    box.classList.add("boxR");
    rightBar.appendChild(box)
}

//repeat changeBox()
setInterval(function(){
    for(let i = 1; i < 201; i++){
        let box = document.getElementById(`boxR${i}`)
        randomWidth();
        box.style.width = randomW;
    }
}, 400);