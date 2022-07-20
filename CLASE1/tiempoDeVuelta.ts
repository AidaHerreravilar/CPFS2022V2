import * as ReadlineSync from "readline-sync";
let tiempoDeVuelta="Ingrese el tiempo de vuelta";
let total=0
for (let i=0;i<4;i++){
    let tiempo=+ReadlineSync.question(tiempoDeVuelta);
    total+=tiempo
}
let promedio=total/4;
console.log(promedio);