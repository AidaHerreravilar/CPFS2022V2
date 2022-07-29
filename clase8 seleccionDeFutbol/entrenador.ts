import {Persona} from "./Persona"
import {Futbolista} from "./Futbolista"

class entrenador extends Persona {

private jugadores: string [];
constructor(entrenadores: string, lista:Futbolista[]){
    super();
    this.jugadores = lista;
}
public DecideTitular(jugador: Futbolista){
    this.jugadores[jugador]=titular()

jugador.titular = true;

}
}
let Juan = new entrenador;
Juan.DecideTitular[];

function titular(): string {
    throw new Error("Function not implemented.");
}

