export default class Cl_mMobiliario {
    constructor({ factura, madera, }) {
        this._factura = 0;
        this._madera = 0;
        this.factura = factura;
        this.madera = madera;
    }
    //set and get
    set factura(factura) {
        this._factura = +factura;
    }
    get factura() {
        return this._factura;
    }
    set madera(madera) {
        this._madera = +madera;
    }
    get madera() {
        return this._madera;
    }
    //metodos
    precioM3() {
        if (this.madera === 1) {
            return 500;
        }
        else {
            return 300;
        }
    }
    m3() {
        return 0;
    }
    precioMobiliario() {
        return 0;
    }
    toJSON() {
        return {
            factura: this.factura,
            madera: this.madera,
            precioM3: this.precioM3(),
            m3: this.m3(),
            precioMobiliario: this.precioMobiliario(),
        };
    }
}
