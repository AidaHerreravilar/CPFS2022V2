import * as ReadlineSync from  "readline-sync";
import {libro} from "./basededatoslibros"
class gestorLibros{
    libros: libro []= [];
    constructor(){
    this.libros=[new libro ("Cien Años de Soledad", 916), new libro ("El Coronel No Tiene Quien Le Escriba", 102)];

}
insertarLibro(name:string,pagina:number){
    this.libros.push(new libro(name,pagina));

}
consultarLibro(){
    let nombreLibro: string = ReadlineSync.quiestion("Nombre del Libro que Busca") {
                this.libros.forEach((object: libro) => {
            if (object.getNombre () === nombreLibro) {
                console.log("Ingrese Nombre del nuevo Libro");
                let indice = this.libros.indexOf(object);
                this.libros[indice].setNombre(ReadlineSync.question("Nombre del libro"))
            }

}
    modificarLibro() {
        let numero=ReadlineSync.question(numeroModificado);
        let libro=ReadlineSync.question(libroModificado);
        libreria[numero]=libro;
        console.log(libreria);
    }
    eliminarLibro() {
        let posicion = ReadlineSync.question(libroEliminado);
        libreria.splice(posicion, 1);
    }
    }
}
function eliminar() {
    throw new Error("Function not implemented.");
}

function modificar() {
    throw new Error("Function not implemented.");
}

function libroEliminado(libroEliminado: any) {
    throw new Error("Function not implemented.");
}

function libreria(libreria: any) {
    throw new Error("Function not implemented.");
}

function libroModificado(libroModificado: any) {
    throw new Error("Function not implemented.");
}

function eliminarLibro() {
    throw new Error("Function not implemented.");
}

function modificarLibro() {
    throw new Error("Function not implemented.");
}

