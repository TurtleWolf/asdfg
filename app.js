window.addEventListener("keypress", playSound);
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
const players = document.querySelectorAll("audio");
var x = document.getElementsByClassName("accent");
const volumeControl = document.getElementById("accent-control");
// const loopVolume = document.getElementById("backloop-control");
let globalVolume = 1;

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

volumeControl.addEventListener("change", function() {
  globalVolume = volumeControl.value / 100;

  players.forEach(function(player) {
    player.volume = globalVolume;
  });
});

function playSound(e) {
  //   const note = document.querySelector(`[data-sound-id="${keyName}"]`).play();
  const keyName = event.key;
  const audio = document.querySelector(`audio[data-sound-id="${keyName}"]`);
  const key = document.querySelector(`div[data-sound-id="${keyName}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}
console.log(players);
console.log(x);
