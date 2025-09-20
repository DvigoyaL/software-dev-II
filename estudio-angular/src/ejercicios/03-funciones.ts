
function generic_function(a:any, b?:any): void{
    console.log(`${a},${(b||"")}`);
}

console.log(generic_function(12,"eyyy"))

/*
* Suma dos numeros 
*
*/
function sumar(a:number, b:number) : number{
    return a + b;
}

let result : number = sumar(1,2);

const sumar2 = (n1 : number, n2 : number) : number => {
    return n1 + n2;
}
let result2 : number = sumar2(1,2);
console.log({result, result2});

function multiplicar(n1:number, n2:number=1, n3?:number) : number {
    return n1*n2*(n3||1);
}

let result3 : number = multiplicar(2,2,2)
console.log(result3);

/// -------------------- ///

interface PersonajeInterface {
    nombre: string,
    vida: number,
    mostrarDetalle: () => void,
}

const healthPercentage = (personaje:PersonajeInterface, valor:number) => {
    personaje.vida += valor;
}

const persona : PersonajeInterface = {
    nombre: "Rony",
    vida: 88,
    mostrarDetalle(){
        console.log(`Nombre -> ${this.nombre}, vida -> ${this.vida}`);
    },
};

console.log(persona.mostrarDetalle());

healthPercentage(persona,10);

console.log(persona.mostrarDetalle());


// Ejercicio de implementar la interfaz para lo siguiente: 


interface DireccionInterface {
    ciudad: string,
    pais: string,
};

interface Usuario {
    id: number,
    nombre: string,
    email: string,
    activo: boolean,
    roles: string[],
    direccion: DireccionInterface,
    saludar: () => string,
    actualizarEmail: (nuevoEmail : string) => void,
};

const usuario1: Usuario = {
    id: 1,
    nombre: "Ana Pérez",
    email: "ana@example.com",
    activo: true,
    roles: ["admin", "editor"],
    direccion: {
        ciudad: "Bogotá",
        pais: "Colombia",
    },
    saludar():string{
        return `Hola, mi nombre es ${this.nombre}!`
    },
    actualizarEmail(nuevoEmail : string) : void{
        this.email = nuevoEmail;
    }
};

console.log(usuario1)

export {};