// let auto1 = {
//   marca: "nissan",
//   modelo: "2002",
//   peso: 100,
//   color: "verde",
// };

// const auto2 = {
//     marca: "honda",
//     modelo: "2002",
//     peso: 300,
//     color: "rojo",
//   };

// console.log(`este es el primer auto: `,auto1);
// console.log(`este es el primer auto: `,auto2);

//console.log(auto1.peso);

//modificar un objeto
// auto1.marca = 'BMW'
// console.log(auto1);


const vendedor = {
    nombre : 'Isaac',
    apellido : 'Galindo',
    empresa: 'Suku',
    habilidadesBlandas: ['Carisma','puntualidad'],
    vender: function(){
        return ('isaac vendio otra cosa');
    },
    nombreCompleto : function () {
        return this.nombre + " " + this.apellido        
    }
};

console.log(vendedor.nombreCompleto());



