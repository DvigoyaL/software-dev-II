function verTipo<T>(argument: T): T{
    return argument;
}

interface Mamiferos {
    tipo: string;
    genero: string;
    edad: number;
}

const vaca: Mamiferos = {
    tipo: "Prueba",
    genero: "hembra",
    edad: 3
}
let prueba = verTipo("a");
let prueba1 = verTipo(true);
let prueba2 = verTipo(1);
let prueba3 = verTipo(vaca)

console.log(prueba.toUpperCase());
console.log(prueba1);
console.log(prueba2);
console.log(prueba3);

// Ejercicio: Función Genérica
// Enunciado
// Crea una función genérica llamada crearCaja<T> que reciba un valor de cualquier tipo y lo devuelva dentro de un objeto con la propiedad contenido.


// interface objeto<T>{
//     contenido: T
// }

// function crearCaja<T>(variable: T): objeto<T>{
//     const caja: objeto<T> = {
//         contenido: variable
//     }
//     return caja;
// }

function crearCaja<T>(variable: T): {contenido: T}{
    return {contenido: variable}
}

console.log(crearCaja(vaca))
console.log(crearCaja(prueba))