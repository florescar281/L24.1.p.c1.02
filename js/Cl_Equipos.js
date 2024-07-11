export default class Cl_Equipos{
    constructor(){
        this.acumPartGanados = 0;
        this.contPartidos = 0;
    }   

    procesarEquipos(e){  
        this.contPartidos++;

        if (e._partidos == 1) {
            this.acumPartGanados += e._partidos;
        }
    }

    porcJuegosGanados(){
        return (this.acumPartGanados / this.contPartidos * 100).toFixed(2);
    }
}