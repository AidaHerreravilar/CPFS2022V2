import {Auto} from "./auto";

class AutoCarreras extends Auto {

    private equipo:string;

    constructor (color:string, marca:string, modelo:string, año:number, equipo:string) {
        super(color,marca,modelo,año);
        this.equipo =equipo;
}
 public getEquipo() {
    return this.equipo;
 }

 public setEquipo(nuevoEquipo:string) {
    this.equipo = nuevoEquipo;
 }
}
