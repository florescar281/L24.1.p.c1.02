export default class Cl_Juegos{
    constructor(rP){
        this.partidos = rP;
    }   

    set partidos(rP){
        this._partidos = rP;
    }

    get partidos(){
        return this._partidos;
    }
}