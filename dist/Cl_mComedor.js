import Cl_mMobiliario from "./Cl_mMobiliario.js";
export default class Cl_mComedor extends Cl_mMobiliario {
    constructor({ factura, madera, sillas = 0, }) {
        super({ factura, madera });
        this._sillas = 0;
        this.sillas = sillas;
    }
    //set and get
    set sillas(sillas) {
        this._sillas = +sillas;
    }
    get sillas() {
        return this._sillas;
    }
    //metodos
    m3() {
        return 0.5 + this.sillas * 0.1;
    }
    precioMobiliario() {
        return this.precioM3() * this.m3();
    }
    tipoMobiliario() {
        return 1;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { sillas: this.sillas });
    }
}
