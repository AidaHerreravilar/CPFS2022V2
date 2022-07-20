import * as ReadlineSync from"readline-sync";
export class Telefono {
    private estaPrendido: boolean;
    private bateriaActual: number;
    constructor() {}

mandarMensaje() {
    let mensaje: string = ReadlineSync.question("mensaje:");
    console.log(mensaje);
}
    hacerLlamada() {
        console.log("llamando");
    }
   
prenderApagar() {
    let onOff: string = ReadlineSync.question("on off");
    if (onOff === "on") {
        this.estaPrendido = true;

    }else{
       this.estaPrendido = false; 
    }
}
}


