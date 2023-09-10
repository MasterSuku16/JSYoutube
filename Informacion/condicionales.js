// let numeros = Math.random()*6
// const redondeo = Math.round(numeros)
// console.log(redondeo);

// function verificar() {
//   const valorPantalla = document.getElementById("edad").value;
//   const edad = valorPantalla;
//   if (edad >= 19) {
//     console.log("puedes ingresar porque tienes edad ");
//   } else {
//     console.log("eres pendejo o que?");
//   }
// }

function verificar() {
  const valorPantalla = document.getElementById("generos").value;
  const genero = valorPantalla;

  switch (genero) {
    case "metal":
      console.log("te recomiendo los ramones");
      break;
    case "hard Rock":
      console.log("te recomiendo los Guns N roses");
      break;
    case "metal":
      console.log("te recomiendo los pantera");
      break;
    case "rock and roll":
      console.log("te recomiendo los rolling stone");
      break;

    default:
        console.log('no se cual papi');
      break;
  }
}
