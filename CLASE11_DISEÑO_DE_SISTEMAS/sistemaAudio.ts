import { Audio } from "./audio";
export interface ISistemaAudio {
    prender(): boolean;
    apagar(): boolean;
    siguienteCancion(): void;
    cancionAnterior(): void;
    subirVolumen(): void;
    bajarVolumen(): void;
}