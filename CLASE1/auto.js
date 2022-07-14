var Automovil = /** @class */ (function () {
    function Automovil() {
        this.cambioActual = 0;
        this.estado = false;
        this.cambioActual = 1;
    }
    Automovil.prototype.cambiarCambio = function () {
        this.cambioActual = 4;
    };
    Automovil.prototype.getCambioActual = function () {
        return this.cambioActual;
    };
    return Automovil;
}());
var autos = new Automovil();
console.log(autos.getCambioActual());
