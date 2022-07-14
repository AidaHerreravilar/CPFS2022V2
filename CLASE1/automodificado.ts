import * as ReadlineSync from 'readline-sync';
let cambioDeseado="Ingrese el cambio deseado";
class Automovil{
    espejos:boolean;
    palancaCambio:number;
    bocina: boolean;

    constructor(espejos: boolean, palancaCambio: number, bocina: boolean){
        this.espejos=espejos;
        this.palancaCambio=palancaCambio;
        this.bocina=bocina;
    };

    tocarBocina(){
        if (this.bocina=false)
        this.bocina=true;
    } else {
        this.bocina=false;
    };

    
   pasarCambio(){
        let palancaCambios=Number(ReadlineSync.questonTnt(cambioDeseado));
        if(palancaCambios-1 && palancaCambios>6){
            this.palancaCambios=palancaCambios;
    }
}

function pasarCambio() {
    throw new Error('Function not implemented.');
}
    