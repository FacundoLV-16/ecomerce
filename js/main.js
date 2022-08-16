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
