import Cl_mMobiliario from "./Cl_mMobiliario.js";

export default class Cl_mComedor extends Cl_mMobiliario {
    private _sillas: number = 0;
    constructor({
        factura,
        madera,
        sillas = 0,
    }: {
        factura: number;
        madera: number;
        sillas: number;
    }) {
        super({factura, madera});
        this.sillas = sillas;
    }
    //set and get
    set sillas(sillas: number){
        this._sillas = +sillas;
    }
    get sillas(): number {
        return this._sillas;
    }
    //metodos
    m3(): number {
        return 0.5 + this.sillas*0.1;
    }
    precioMobiliario(): number {
        return this.precioM3() * this.m3();
    }
    tipoMobiliario(): number {
        return 1;
    }
    toJSON(){
        return {
            ...super.toJSON(),
            sillas: this.sillas,
        };
    }

}