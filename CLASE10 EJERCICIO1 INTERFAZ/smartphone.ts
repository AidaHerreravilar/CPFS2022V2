import { ITelefono } from "./I_telefono";
class SmartPhone implements ITelefono {
    estaPrendido:boolean;
    constructor (prendido:boolean) { 
        this.estaPrendido = prendido;
    }

    public prender(): void {
        if (this.estaPrendido === true) {
            console.log("El telefono esta prendido");
        } else {
            this.estaPrendido = true
            console.log("Se prendio el telefono");
        }
     }
     public apagar(): void {
        if (this.estaPrendido === false) {
            console.log("El telefono esta apagado");
        } else {
            this.estaPrendido = false;
            console.log("Se apago ele telefono");
        }
     }
     public llamar(numeroTelefono: number): void {
        if (this.estaPrendido === false) {
            console.log("El telefono esta apagado: no responde");
        } else {
            console.log("Llamando al numero ${numeroTelefono}...");

        }
     }
    public sacarFoto():void {
        if (this.estaPrendido === false) {  
        } else {
            console.log("Foto tomada exitosamente");
        }
    }
}