import {type Empleado} from './01-actividad-interface'

// const persona: Persona = {
//         nombre: "David",
//         cedula: 12345,
//         edad: 21
// }
// console.log(persona)
export function  tipoPago (empleado: Empleado): string {
	if(empleado.salario > 2800000)
		return "Pago mensual"
	else{
		return "Pago quincenal"
	}
}