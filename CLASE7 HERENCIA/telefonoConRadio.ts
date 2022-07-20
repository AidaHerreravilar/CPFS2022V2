import { Telefono } from "./telefono";
class TelefonoConRadio extends Telefono {
    private frecuenciaActual: number;
    constructor() {
        super();

    }
    set setFrecuenciaActual(frec: number) {
        this.frecuenciaActual = frec;
    }
    get getFrecuencia(): number {
        return this.frecuenciaActual;
    }
}