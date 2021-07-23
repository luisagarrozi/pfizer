document.body.addEventListener("keyup", (evento) => {
  tocar(evento.code.toLowerCase());
});

function tocar(sound) {
  let audio = document.querySelector(`#s_${sound}`);

  if (audio) {
      audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }

}
