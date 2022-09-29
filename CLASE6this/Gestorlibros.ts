import * as ReadlineSync from "readline-sync";
import { Libro } from "./basededatoslibros"
class gestorLibro {
    libro: Libro[] = [];
    constructor() {
        this.libro = [new Libro("Cien Años de Soledad", 916), new Libro("El Coronel No Tiene Quien Le Escriba", 102)];
    }
    insertarLibro(name: string, pagina: number) {
        this.libro.push(new Libro(name, pagina));
    }
    consultarLibro() {
        let nombreLibro: string = ReadlineSync.question("Nombre del Libro que Busca");
        this.libro.forEach(object => {
            if (object.getNombre() === nombreLibro) {
                console.log("Ingrese Nombre del nuevo Libro");
            }
        });
    }
    modificarLibro() {
        let preglibro: string = ReadlineSync.question("libro a modificar");
        this.libro.forEach(object => {
            if (object.getNombre() === preglibro) {
                console.log("datos del libro nuevo: ");
            }
        });
    }
    eliminarLibro() {
        let preglibro: string = ReadlineSync.question("libro a eliminar");
        this.libro.forEach(object => {
            if (object.getNombre() === preglibro) {
                console.log("libro eliminado");
            }
        })
    }
}

