class Automovil{


    cambioActual: number =0;
    estado: boolean = false;
  
    constructor(){
        this.cambioActual = 1;

    }
    cambiarCambio(){
        this.cambioActual = 4;
    }
    getCambioActual():number{
        return this.cambioActual;
    }
}
let autos = new Automovil();
console.log(autos.getCambioActual());

