const playerImg = document.getElementById("player-img");
console.log(playerImg);
const a = playerImg.getBoundingClientRect();
console.log(a.x);

addEventListener("keydown",button);

function button(event){
    if(event.key === "ArrowRight"){
        const right = parseInt(playerImg.style.left);
        console.log(right);
        playerImg.style.left = right + 20 + "px";
    }
    else if (event.key === "ArrowLeft"){
        const right = parseInt(playerImg.style.left);
        playerImg.style.left = right -20 + "px";
    }
    else if (event.key === "ArrowUp"){
        const top = parseInt(playerImg.style.top);
        console.log(top);
        playerImg.style.top =  top + 20 + "px";
    }
    else if (event.key === "ArrowDown"){
        const top = parseInt(playerImg.style.top);
        console.log(top);
        playerImg.style.top = top - 20 + "px";
    }
    else{
        console.log(event.key);
    }
}