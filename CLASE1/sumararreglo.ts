let arreglo : number [] = [1,2,3,4,5]
let resultado: number = 0;
function sumarArreglo() {
    let suma:number =0;
    for(let i:number =0; 1 <arreglo.length; i++){
        suma += arreglo[i];
    }
    return suma;
}
resultado = sumarArreglo();
console.log (resultado);