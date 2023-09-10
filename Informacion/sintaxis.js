//Sintaxis de la variable

const nombreDeLaVariable = 'nombre'


/*
    reglas
        1.- Se debe de ser camellcase
*/
//----------------------------------------------
//SCOPE
// const x = 5

// {
//     // const x = 3
//     console.log(x);
// }

// console.log(x);

//-----------------------------------------------

let x = 5

{
    let y = 3
    x += y
    console.log(x);
}

console.log(x);

//------------------------
