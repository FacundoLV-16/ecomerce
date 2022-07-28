/**  boton del menu desplegable movil **/

let menu_btn = document.getElementById("menu");
let menu = document.getElementsByClassName("menu-desplegable");
contador = 0;

function desplegar() {
  if (contador === 0) {
    menu.classList.add("-activo");
    contador = 1;
  } else {
    menu.remove("-activo");
    contador = 0;
  }
}

menu_btn.addEventListener("click", desplegar, true);
