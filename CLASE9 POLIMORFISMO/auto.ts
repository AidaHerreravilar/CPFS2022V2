export class Auto {
    
    private color:string;
    private marca:string;
    private modelo:string;
    private año:number;
    constructor (color:string, marca:string, modelo:string, año:number) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;

    }

    public getColor() {
        return this.color;
    }
    public getMarca () {
        return this.marca;
    } 
    public getModelo() {
        return this.modelo;
    }
    public getAño () {
        return this.año;
    }

 } 