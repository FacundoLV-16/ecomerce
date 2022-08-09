/**  boton del menu desplegable movil **/
let menu = false;

function mostrarMenu() {
  if (menu === false) {
    document.getElementById("menu-desplegable").style.display = "block";
    menu = true;
  } else {
    document.getElementById("menu-desplegable").style.display = "none";
    menu = false;
  }
}

/** **/

// Elevator script included on the page, already.

window.onload = function () {
  var elevator = new Elevator({
    element: document.querySelector(".elevator-button"),
    mainAudio: "../asset/music/audio.mp3",
    endAudio: "../asset/music/end-audio.mp3",
  });
};
