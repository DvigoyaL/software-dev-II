
export interface Persona{
    nombre: string,
    cedula: number,
    edad: number
}

export interface Empleado{
    persona: Persona,
    cargo: string,
    salario: number,
    contrato: string
}

// const empleado: Empleado = {
//     persona: {
//         nombre: "David",
//         cedula: 12345,
//         edad: 21
//     },
//     cargo: "Dev",
//     salario: 2500000,
//     contrato: "indefinido" 
// }
