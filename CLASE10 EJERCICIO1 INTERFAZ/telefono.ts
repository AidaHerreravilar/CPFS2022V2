export * from "./telefono";
export interface ITelefono {
    prender(): void;
    apagar(): void;
    llamar(cel:number):void;
}