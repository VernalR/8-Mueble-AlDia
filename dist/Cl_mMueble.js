import Cl_mMobiliario from "./Cl_mMobiliario.js";
export default class Cl_mMueble extends Cl_mMobiliario {
    constructor({ factura, madera, tela, }) {
        super({ factura, madera });
        this._tela = 0;
        this.tela = tela;
    }
    //set and get
    set tela(tela) {
        this._tela = +tela;
    }
    get tela() {
        return this._tela;
    }
    m3() {
        return 1;
    }
    incremento() {
        if (this.tela === 1) {
            return (this.precioM3() * 20) / 100;
        }
        else if (this.tela === 2) {
            return (this.precioM3() * 30) / 100;
        }
        else {
            return (this.precioM3() * 40) / 100;
        }
    }
    precioMobiliario() {
        return this.precioM3() + this.incremento();
    }
    tipoMobiliario() {
        return 2;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { tela: this.tela, incremento: this.incremento() });
    }
}
