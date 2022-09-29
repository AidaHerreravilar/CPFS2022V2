export class Libro {
    private nombre: string;
    private totalPaginas: number;
    constructor(nombre: string, paginas: number) {
        this.nombre = nombre;
        this.totalPaginas = paginas
    }
        public getNombre() : string{
            return this.nombre;
            }
setNombre(nombre:string){
    this.nombre=nombre;
}
            }
        
    