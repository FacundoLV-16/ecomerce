function PasarDeAño(alumno) {
  let nota_final = alumno.nota_1 + alumno.nota_2 + alumno.nota_3 / 3;
  if (nota_final >= 6) {
    return (
      "El alumno " + alumno.nombre + " " + alumno.apellido + " aprobo el año"
    );
  }
  if (nota_final < 6) {
    let final = parseInt(
      prompt(
        "El alumno " +
          alumno.nombre +
          " " +
          alumno.apellido +
          " no logro aprobo el año y debe rendir un final. " +
          "Ingrese la nota del final *Numero del 0-10*"
      )
    );
    if (final >= 4) {
      return (
        "El alumno " +
        alumno.nombre +
        " " +
        alumno.apellido +
        " aprobo el final, logro pasar de año"
      );
    } else if (final < 4) {
      return (
        "El alumno " +
        alumno.nombre +
        " " +
        alumno.apellido +
        " desaprobo el final, no logro pasar de año y debe repetir el año"
      );
    }
  }
}

const alumno = {
  nombre: String(prompt("Ingrese el nombre del alumno")),
  apellido: String(prompt("Ingrese el apellido del alumno")),
  nota_1: parseInt(
    prompt("Ingrese la primer nota del alumno *Numero del 0-10*")
  ),
  nota_2: parseInt(
    prompt("Ingrese la segunda nota del alumno *Numero del 0-10*")
  ),
  nota_3: parseInt(
    prompt("Ingrese la tercera nota del alumno *Numero del 0-10*")
  ),
  /* nombre: "facundo",
  apellido: "caino",
  nota_1: 1,
  nota_2: 1,
  nota_3: 1,*/
};

const respuesta = PasarDeAño(alumno);
console.log(respuesta);
