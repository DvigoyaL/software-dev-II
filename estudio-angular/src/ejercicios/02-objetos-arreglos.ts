let frutas : string[] = ['manzana', 'pera', 'mango']

interface PersonaInterface {
    nombre: String;
    edad: number;
    compra: string[],
    // propiedades opcionales : compra?: string[] 
    carro?: string,
};

const persona : PersonaInterface = {
    nombre: 'Rony',
    edad: 23,
    compra: frutas,
};

console.log(persona);

export {}