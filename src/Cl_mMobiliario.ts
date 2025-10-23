export default class Cl_mMobiliario {
    public _factura: number = 0;
    public _madera: number = 0;
    constructor({
        factura,
        madera,
    }: {
        factura: number;
        madera: number;
    }) {
        this.factura = factura;
        this.madera = madera;
    }
    //set and get
    set factura(factura: number) {
        this._factura = +factura;
    }
    get factura(): number {
        return this._factura;
    }
    set madera(madera: number){
        this._madera = +madera;
    }
    get madera(): number {
        return this._madera;
    }
    //metodos
    precioM3(): number{
        if(this.madera === 1){
            return 500;
        }else{
            return 300;
        }
    }
    m3(): number{
        return 0;
    }
    precioMobiliario(): number{
        return 0;
    }
    toJSON(){
        return {
            factura: this.factura,
            madera: this.madera,
            precioM3: this.precioM3(),
            m3: this.m3(),
            precioMobiliario: this.precioMobiliario(),
        };
    }
}