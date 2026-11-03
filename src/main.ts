import { Persona } from './clase';
import { type  Usuario } from './interfaces/interface';

let pepe = new Persona("Pepito", 25, "pepito@gmail.com");

const mensaje = pepe.mostrarDatos();
console.log(mensaje);
console.log("########################################");


let maria: Usuario = {
    id: 1,
    nombre : "Maria",
    telefono : "123456789",
    edad : 30,
    activo : true
}

console.log(maria.id);
console.log(maria.nombre);
console.log(maria.telefono);
console.log(maria.edad);
console.log(maria.activo);