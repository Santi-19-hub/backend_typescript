export class Persona {
    nombre: string;
    edad: number;
    email: string;

    constructor(nombre: string, edad: number, email: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
    }

    mostrarDatos(): string {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Email: ${this.email}`;
    }
}