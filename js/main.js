/**  boton del menu desplegable movil **/

let menu_btn = document.getElementById("menu");
let menu_desplegable = document.getElementById("menu-desplegable");
contador = 0;

function abrir() {
  if (contador === 0) {
    menu_desplegable.classList.add(".js");
    contador = 1;
  } else {
    menu_desplegable.remove(".js");
    contador = 0;
  }
}

menu_btn.addEventListener("click", abrir, true);
