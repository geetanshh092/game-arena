const socket = io();

function sendMove() {
  socket.emit("move", "Player made a move");
}

socket.on("move", (data) => {
  alert(data);
});

let audio = new Audio();

function playMusic() {
  const url = document.getElementById("musicUrl").value;
  audio.src = url;
  audio.play();
}