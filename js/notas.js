/*function persona(nombre, apellido, curso, año, nota_1, nota_2, nota_3) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.curso = curso;
  this.año = año;
  this.nota_1 = nota_1;
  this.nota_2 = nota_2;
  this.nota_3 = nota_3;
}

const AlumnosArray = [];

function CrearPersona(persona) {
  persona = new persona(
    prompt("Ingrese el nombre del alumno"),
    prompt("Ingrese el apellido del alumno"),
    prompt("Ingrese el curso del alumno (A o B)"),
    prompt("Ingrese el año cursado"),
    prompt("Ingrese la primer nota"),
    prompt("Ingrese la segunda nota"),
    prompt("Ingrese la tercer nota")
  );

  let nota_final = persona.nota_1 + persona.nota_2 + persona.nota_3 / 3;

  if (nota_final >= 6) {
    return (
      "El alumno " +
      persona.nombre +
      " " +
      persona.apellido +
      " de " +
      persona.año +
      persona.curso +
      " aprobo el año"
    );
  }

  if (nota_final < 6) {
    let final = parseInt(
      prompt(
        "El alumno " +
          persona.nombre +
          " " +
          persona.apellido +
          " de " +
          persona.año +
          persona.curso +
          " no logro aprobo el año y debe rendir un final. " +
          "Ingrese la nota del final"
      )
    );
    switch (final) {
      case final >= 4:
        return (
          "El alumno " +
          persona.nombre +
          " " +
          persona.apellido +
          " de " +
          persona.año +
          persona.curso +
          " aprobo el final, logro pasar de año"
        );
      case final < 4:
        return (
          "El alumno " +
          persona.nombre +
          " " +
          persona.apellido +
          " de " +
          persona.año +
          persona.curso +
          " desaprobo el final, no logro pasar de año y debe repetir el año"
        );
    }
  }
}

const respuesta = CrearPersona(persona);
console.log(respuesta);*/
