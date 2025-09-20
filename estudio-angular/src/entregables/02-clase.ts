// Ejercicio: Sistema de Comidas con Modificación y Notificación
// Enunciado
// Vas a crear un pequeño sistema en TypeScript que maneje información de comidas y permita modificarlas.

interface Comida {
    nombre: string,
    calorias: number,
    esvegana: boolean
}

const pizza: Comida = {
    nombre: 'Pizza',
    calorias: 250,
    esvegana: false
}

const ensalada: Comida = {
    nombre: 'Ensalada',
    calorias: 150,
    esvegana: true
}

const Hamburguesa: Comida = {
    nombre: 'Hamburguesa',
    calorias: 350,
    esvegana: false
}

class ComidaService{
    mostrarInfo(comida: Comida){
        const {nombre, calorias, esvegana} = comida;
        let vegana: string;
        if(esvegana){vegana = 'es vegana'}
        else{vegana = 'no es vegana'}
        console.log('Su comida es ' + nombre + ' con el siguiente numero de calorias ' + calorias + ' y su comida ' + vegana)
    }

    modificarCalorias(comida: Comida, nuevasCalorias: number): Comida{
        comida.calorias = nuevasCalorias;
        return comida;
    }
}

class NotificarComida{
    constructor(
        comidaService: ComidaService,

    ){}
    notificar(comida: Comida){
        console.log('Notificando comida...');
        comidaService.mostrarInfo(comida);
    }
}

const comidaService = new ComidaService();
const notificarService = new NotificarComida(comidaService)

notificarService.notificar(pizza);
// comidaService.mostrarInfo(pizza);
console.log(comidaService.modificarCalorias(ensalada, 500))

