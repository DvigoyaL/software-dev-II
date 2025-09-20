export interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'David',
    hijos: ['Juan', 'Jose']
}

const pasajero2: Pasajero = {
    nombre: 'Antonio'
}

const mostrarHijos = (pasajero: Pasajero) => {
    const cantidadHijos = pasajero.hijos?.length ?? "";
    console.log(cantidadHijos);
}

mostrarHijos(pasajero1)
mostrarHijos(pasajero2)

// Ejercicio: Biblioteca Digital con Encadenamiento Opcional
// Enunciado
// Crea un sistema que modele libros usando TypeScript y aprovecha el encadenamiento opcional (?.) y el operador nullish coalescing (??).

interface Libro {
    titulo: string;
    autor?: {
        nombre?: string,
        pais?: string
    }
    anioPublicacion?: number
}

function mostrarLibro(libro: Libro){
    const {titulo, autor, anioPublicacion} = libro
    const nombreAutor = autor?.nombre ?? "Autor desconocido";
    const paisAutor = autor?.pais ?? "País desconocido";
    const anioPub = anioPublicacion ?? "Año no disponible"
    console.log(titulo)
    console.log(nombreAutor)
    console.log(anioPub)
}

const libro1 = {
    titulo: "noche estrellada",
    autor: {
        nombre: "Juan",
        pais: "mexico"
    },
    anioPublicacion: 2025
}

const libro2 = {
    titulo: "100 años de soledad",
    anioPublicacion: 2010
}

const libro3 = {
    titulo: "juego de tronos",
    autor: {
        nombre: "pablo",
        pais: "españa"
    },
}
mostrarLibro(libro1);
mostrarLibro(libro2);
mostrarLibro(libro3);