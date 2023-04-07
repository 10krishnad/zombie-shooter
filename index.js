//const bg_sound = new Audio("./bg_sound.wav");
//bg_sound.play();
const playerImg = document.getElementById("player-img");
const container = document.getElementsByClassName("container");
const c_width = container[0].offsetWidth;
const c_height = container[0].offsetHeight;

window.addEventListener("load", () => {
    playerImg.style.position = "absolute";
    playerImg.style.left = 0;
    playerImg.style.top = 0;
});
window.addEventListener("keyup",(e) => {
    switch (e.key){
        case "ArrowLeft":
            const left = parseInt(playerImg.style.left);
            playerImg.src="./images/left.png";
            move_Zombie();
            console.log(left);
            if (left > 0)
            playerImg.style.left = left - 50 + "px";
            break;
        case "ArrowRight":
            const right = parseInt(playerImg.style.left);
            playerImg.src="./images/right.png";
            const x = playerImg.getBoundingClientRect().x;
            if (x < c_width){
            console.log(c_width,x);
            playerImg.style.left = right + 50 + "px";
            }
            break;
        case "ArrowUp":
            const top = parseInt(playerImg.style.top);
            playerImg.src="./images/up.png";
            move_Zombie();
            if (top > 0)
            playerImg.style.top = top - 50 + "px";
            break;
        case "ArrowDown":
            const bottom = parseInt(playerImg.style.top);
            playerImg.src="./images/down.png";
            const y = playerImg.getBoundingClientRect().y;
            if (y < c_height){
            playerImg.style.top = bottom + 50 + "px";
            }
            break;
    }
});
    const img = document.createElement("img");
    img.src = "./images/zleft.png";
    img.style.position= "absolute"
    img.style.width = 250 +"px";
    img.style.height = 250 +"px";
    container[0].appendChild(img);

function move_Zombie(){
    const left = playerImg.getBoundingClientRect().x;
    const top = playerImg.getBoundingClientRect().y;
    const left_z = parseInt(img.style.left);
    const top_z = parseInt(img.style.top);
    console.log(top_z,left_z);
    img.style.top = top_z + 20 + "px";
    img.style.left = left_z + 20 + "px";
}
function animate() {
        requestAnimationFrame(animate);
        move_Zombie();
}
animate();
