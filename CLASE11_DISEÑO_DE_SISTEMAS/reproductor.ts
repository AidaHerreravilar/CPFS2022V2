import { Audio } from "./audio";
import { ISistemaAudio } from "./sistemaAudio";

class Reproductor implements ISistemaAudio {
    prendido: boolean;
    hits: Audio[];

    constructor() {
        this.prendido = false;
        this.hits = [];
    }
    siguienteCancion(): void {
        throw new Error("Method not implemented.");
    }
    cancionAnterior(): void {
        throw new Error("Method not implemented.");
    }
    subirVolumen(): void {
        throw new Error("Method not implemented.");
    }
    bajarVolumen(): void {
        throw new Error("Method not implemented.");
    }
    prender(): boolean {
        return this.prendido = true;
    }
    apagar(): boolean {
        return this.prendido = false;
    }
}
