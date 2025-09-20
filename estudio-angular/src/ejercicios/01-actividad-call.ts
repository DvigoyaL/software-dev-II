import { tipoPago } from "./01-actividad-function";
import type { Empleado } from "./01-actividad-interface";


const empleado: Empleado = {
    persona: {
        nombre: "David",
        cedula: 12345,
        edad: 21
    },
    cargo: "Dev",
    salario: 2500000,
    contrato: "indefinido" 
}

console.log('El empleado ' + empleado.persona.nombre + ' se le pagara ' + tipoPago(empleado))