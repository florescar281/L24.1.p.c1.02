import Cl_Equipos from "./Cl_Equipos.js";
import Cl_Juegos from "./Cl_Juegos.js";

const salida = document.getElementById("salida");

let equipos = new Cl_Equipos();

let juego1 = new Cl_Juegos(1);
let juego2 = new Cl_Juegos(1);
let juego3 = new Cl_Juegos(0);
let juego4 = new Cl_Juegos(1);
let juego5 = new Cl_Juegos(0);
let juego6 = new Cl_Juegos(1);
let juego7 = new Cl_Juegos(1);

equipos.procesarEquipos(juego1);
equipos.procesarEquipos(juego2);
equipos.procesarEquipos(juego3);
equipos.procesarEquipos(juego4);
equipos.procesarEquipos(juego5);
equipos.procesarEquipos(juego6);
equipos.procesarEquipos(juego7);

salida.innerHTML = `
    El porcentaje de juegos ganados es: ${equipos.porcJuegosGanados()}%
`;
