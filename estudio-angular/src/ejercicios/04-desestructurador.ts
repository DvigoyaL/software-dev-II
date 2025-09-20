
interface Details {
    autor: string,
    year: number,
};


interface ReproductorAudio {
    volume: number;
    duration: number;
    song: string;
    detail: Details
};

const reproductorAudio : ReproductorAudio = {
    volume: 50,
    duration: 10,
    song: "Testing song",
    detail: {
        autor: "Pepito",
        year: 2025,
    }
};

// const song1 = reproductorAudio.song;
// const autor = reproductorAudio.detail.autor;

// Desestructurador
const { song: nombreCancion, duration : duracionCancion} = reproductorAudio;
console.log({nombreCancion, duracionCancion})

// Ejemplo deconstructores anidados
// 1. 
const { detail } = reproductorAudio;
const { autor : nombreAutor1 } = detail;
// 2. 
const { autor: nombreAutor2 } = reproductorAudio.detail;
// 3. 
const { detail:{autor: nombreAutor3}} = reproductorAudio;
// imprimir
console.log({nombreAutor1, nombreAutor2, nombreAutor3});

// Arrays
let frutas = ["Peras", "Manzanas", "Fresas"];
console.log("Frutas: " + (frutas[3] || "No se ha encontrado."));

const [f1, f2, f3, f4 = "No se ha encontrado"] = frutas;
const [,,fruta3] = frutas;
console.log({f4, fruta3})

// 
export interface Producto {
    description: string;
    precio: number;
}

const celular: Producto = {
    description: "Samsung A1",
    precio: 100,
}

const computador: Producto = {
    description: "Lenovo",
    precio: 300,
}

const carrito: Producto[] = [celular, computador];
const impuesto: number = 0.19;
const propinas: number = 0.1;

interface ImpuestoOption {
    impuesto: number;
    productos: Producto[];
    propinas: number;
}
export function calcularImpuesto(options: ImpuestoOption): [number, number, number] {
    const {impuesto, productos, propinas} = options;
    let total: number = 0;
    productos.forEach(({precio}) => {
        total += precio;
        // total += propinas;
    });
    let totalImpuestos = total + (total * impuesto);
    let totalPropina = totalImpuestos + ((total * impuesto) * propinas)
    return [total, totalImpuestos, totalPropina];
}

const options: ImpuestoOption = {
    impuesto,
    productos: carrito,
    propinas
}
const resultadoCompra: number [] = calcularImpuesto(options)

console.log('Total: ' + resultadoCompra);
console.log('Total impuesto: ' + resultadoCompra[1]);
console.log('Total propinas: ' + resultadoCompra[2]);
