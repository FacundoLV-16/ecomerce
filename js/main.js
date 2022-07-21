/**  boton del menu desplegable movil **/

let menu_deplegable = document.getElementById("menu");
let menu_deplegado = document.getElementById("menu-desplegable");
contador = 0;

function abrir() {
  if (contador === 0) {
    menu_deplegable.classList.add(".js");
    contador = 1;
  } else {
    menu_deplegable.remove(".js");
    contador = 0;
  }
}

menu_deplegable.addEventListener("click", abrir, true);
