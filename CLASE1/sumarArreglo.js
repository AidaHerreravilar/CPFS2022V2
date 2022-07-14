var arreglo = [1, 2, 3, 4, 5];
var resultado = 0;
function sumarArreglo() {
    var suma = 0;
    for (var i = 0; 1 < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}
resultado = sumarArreglo();
console.log(resultado);
