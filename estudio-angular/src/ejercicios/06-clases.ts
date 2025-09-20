
// export class Persona {
//     public nombre?: string;
//     public direccion: string;

import type { Empleado } from "./01-actividad-interface";

//     constructor(nombre: string, direccion: string){
//         this.nombre = nombre;
//         this.direccion = direccion;
//     }
// }
export class Persona {
    constructor(
        public nombre: string,
        public direccion: string = 'N/A'
    ){
    }
}

export class Trabajador{
    constructor (
        public persona: Persona,  
        public cargo: string,
        public empresa: string,
        public direccionTrabajo: string
    ){
    }
}
const persona: Persona = new Persona('David', 'Vizcaya');
const empleado: Trabajador = new Trabajador(persona, 'dev', 'servi', 'bog');

console.log(persona)
console.log(empleado)