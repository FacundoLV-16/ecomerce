/**  boton del menu desplegable movil **/

var menu = document.getElementById("menu-desplegable");
var menu_btn = document.getElementById("menu-btn");
var contador = 0;

document.getElementById("menu-desplegable").style.visibility = "hidden";

function menu_desplegable() {
  if (contador === 0) {
    document.getElementById("menu-desplegable").style.visibility = "visibility";
    contador = 1;
  } else {
    document.getElementById("menu-desplegable").style.visibility = "hidden";
    contador = 0;
  }
}

menu_btn.addEventListener("click", menu_desplegable);
