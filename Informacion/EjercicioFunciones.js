const temperatura = 76
function transformarCelsius(fahrenheit) {
  return (fahrenheit-32) * (5/9)
}
const respuesta = transformarCelsius(temperatura)
console.log(`la temperatura en grados celsius es de: ${respuesta}`);


const temp = 74;
function convertirCelsius(fahrenheit) {
  const grado = fahrenheit
  return (grado-32) * (5/9)
  
}
const gradoFinal = convertirCelsius(temp)
console.log(`la temperatura es: `,parseInt(gradoFinal));