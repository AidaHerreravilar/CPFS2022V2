"use strict";
exports.__esModule = true;
var ReadlineSync = require("readline-sync");
var tiempoDeVuelta = "Ingrese el tiempo de vuelta";
var total = 0;
for (var i = 0; i < 4; i++) {
    var tiempo = +ReadlineSync.question(tiempoDeVuelta);
    total += tiempo;
}
var promedio = total / 4;
console.log(promedio);
