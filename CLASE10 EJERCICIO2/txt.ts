Import {AutoCiudad} from "./autoCiudad";
Import {AutoDeportivo} from "./autoDeportivo";
Import {Camioneta} from "./camionteta";

let aCiudad = new AutoCiudad (true,true);
let camionteta = new Camioneta (true, false);
let aDeportivo = new AutoDeportivo (true, "mosttrar Energy", true);

aCiiudad.acelerar(3);
aCiudad.consultaDescapotable();
camionteta.acelerar(3);
aDeportivo.acelerar(3);
aDeportivo.cambiarNeumatico();
aDeportivo.obtenerPatrocinador();

