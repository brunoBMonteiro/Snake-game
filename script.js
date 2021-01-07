let canvas = document.getElementById("snake");
let content = canvas.getContext("2d");
let box = 32;

function criarBG() {
    content.fillStyle = "lightgreen";
    content.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();