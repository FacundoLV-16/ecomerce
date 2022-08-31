// Crear cuenta  //

/*let btn = (document.getElementById("btn-crear-cuenta").onclick =
  function crear_cuenta() {
    let formulario_crear = document.getElementById("crear-cuenta-part1");
    let formulario_creado = document.getElementById("crear-cuenta-part2");
    if (formulario_crear.style.display === "block") {
      formulario_crear.style.display === "none";
      formulario_creado.style.display === "block";
    }
  });*/

let btn = (document.getElementById("btn-crear-cuenta").onclick =
  function crear_cuenta() {
    if (
      document.getElementById("crear-cuenta-part1").style.display === "block"
    ) {
      document.getElementById("crear-cuenta-part1").style.display === "none";
      document.getElementById("crear-cuenta-part2").style.display === "block";
    }
  });
