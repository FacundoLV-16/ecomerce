let valor_1 = 0;
let valor_2 = 0;
let valor_3 = 0;
let valor_4 = 0;
let valor_5 = 0;

const alumno = {
  nombre: valor_1,
  apellido: valor_2,
  nota_1: valor_3,
  nota_2: valor_4,
  nota_3: valor_5,
};

function PasarDeAño(alumno) {
  for (let i = 0; i === 5; i += 1) {
    let contador = 1;
    switch (contador) {
      case contador == 1:
        let valor_1 = prompt("Ingrese el nombre del Alumno").toLocaleLowerCase;
        contador += 1;
      case contador == 2:
        let valor_2 = prompt(
          "Ingrese el apellido del Alumno"
        ).toLocaleLowerCase;
        contador += 1;
      case contador == 3:
        let valor_3 = prompt(
          "Ingrese la primer nota del Alumno"
        ).toLocaleLowerCase;
        contador += 1;
      case contador == 4:
        let valor_4 = prompt(
          "Ingrese la segunda nota Alumno"
        ).toLocaleLowerCase;
        contador += 1;
      case contador == 5:
        let valor_5 = prompt(
          "Ingrese la tercer nota del Alumno"
        ).toLocaleLowerCase;
        break;
      default:
        console.log("Error, Intente de Nuevo");
    }
  }
}

PasarDeAño();
