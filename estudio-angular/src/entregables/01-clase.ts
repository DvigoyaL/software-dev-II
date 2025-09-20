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
