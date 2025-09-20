import {type Producto, calcularImpuesto} from './04-desestructurador'

const carrito: Producto[] = [
    {
        description: 'Carro',
        precio: 1020
    },
    {
        description: 'Celular',
        precio: 1010
    }
]

const [total, totalImpuestos] = calcularImpuesto({
    impuesto: 100,
    productos: carrito,
    propinas: 0
})
console.log({total, totalImpuestos})