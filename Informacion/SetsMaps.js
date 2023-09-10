let conjunto = new Set(['suku','alan','isaac','alan']);
conjunto.add('tania')

let pregunta = conjunto.has('isaac');
console.log(pregunta);
console.log(conjunto);

let array = ['buro','cama','cabecera','base','base']

function compra(muebles) {
    console.log(muebles);
}

function comprar1(muebles) {
    let unidad = new Set(muebles)
    console.log(unidad);
}

comprar1(array)