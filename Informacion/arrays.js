//trae los elementos del array a mi front.
// const ejemplo = ['js','css','html','react','angular'];
// document.getElementById('arrayfuncion').innerHTML = ejemplo
// console.log(ejemplo);


//agrega mas elementos en un array
// const array = ['js','html','css']
// array[array.length] = 'react'
// console.log(array);

//--- filter<- filtra los resultados que desee.------
// let arrays = ['manzana','pera','sandia', 'naranja','melon','manzana','naranja']
// const result = arrays.filter(x => x == 'manzana')
// console.log(resultado);

// const array = [
//     {nombre:'pedro',apellido:'perez'},
//     {nombre:'vicente',apellido:'perez'},
//     {nombre:'jose',apellido:'perez'},
//     {nombre:'alan',apellido:'galindo'},
//     {nombre:'isaac',apellido:'barbina'},
//     {nombre:'julian',apellido:'juarez'},
// ]
// const result = array.filter(x => x.nombre == 'isaac')
// console.log(result);

//--- push <- agrega un nuevo elemento al arrar
const frutas = ['manzana','pera']
frutas.push('piña')
console.log(frutas);

//--- splice <- agrega un elemento o lo sustituye
const coches = ['nissan','porsche','toyota','ferrari']
coches.splice(1,0,'lexus','jeep','bmw','dogde')
console.log(coches);

//--- slice <- 
const ropa = ['tennis','pantalon','blusa','vestido']
const result = ropa.slice(3)
console.log(result);

//--- join <- une las cosas...
const tenis = ['nike','pumas','adidas']
document.getElementById('metodoJoin').innerHTML = tenis.join(', tennis:')

//---concat <- concatena varios elementos...
const fruit = ['pera','manzana','piña','sandia','mango']
const vegetables = ['chayote','chile','tomate','lechuga']

const cesto = fruit.concat(vegetables)
console.log(cesto);