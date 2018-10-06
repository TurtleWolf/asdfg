window.addEventListener("keypress", playSound);
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}
let volume = 1;
const accents = document.querySelectorAll(".accent");
const accentControl = document.getElementById("accent-control");
const loops = document.querySelectorAll(".loop");
const loopVolume = document.getElementById("backloop-control");

accentControl.addEventListener("change", function() {
  volume = accentControl.value / 100;
  accents.forEach(function(player) {
    player.volume = volume;
  });
});
loopVolume.addEventListener("change", function() {
  volume = loopVolume.value / 100;
  loops.forEach(function(player) {
    player.volume = volume;
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
// console.log(players);
// console.log(x);
