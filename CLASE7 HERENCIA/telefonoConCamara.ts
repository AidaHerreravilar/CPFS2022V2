import {Telefono} from "./telefono";
class TelefonoConCamara extends Telefono {
    private sacarFoto: number;
    constructor() {
        super();
    }
    set setSacarFoto(variasFotos: numbrer) {
        this.sacarFoto =variasFotos number;
    }
    get getSacarFoto(): number {
        return this.sacarFoto;
    }
    }

