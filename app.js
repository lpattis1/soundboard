const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

playSongs();

function playSongs() {
  sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;

    btn.addEventListener("click", function (e) {
      const audio = document.getElementById(sound);
      stopSongs();
      audio.play();
    });

    const buttons = document.querySelector("#buttons");
    buttons.appendChild(btn);
  });
}

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
