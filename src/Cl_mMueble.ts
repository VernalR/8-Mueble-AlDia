import Cl_mMobiliario from "./Cl_mMobiliario.js";

export default class Cl_mMueble extends Cl_mMobiliario {
    private _tela: number = 0;
    constructor({
        factura,
        madera,
        tela,
    }: {
        factura: number;
        madera: number;
        tela: number;
    }) {
        super({factura, madera});
        this.tela = tela;
    }
    //set and get
    set tela(tela: number) {
        this._tela = +tela;
    }
    get tela(): number {
        return this._tela;
    }
    m3(): number {
        return 1;
    }
    incremento(): number{
        if(this.tela === 1){
            return (this.precioM3() * 20)/100;
        }else if(this.tela === 2){
            return (this.precioM3() * 30)/100;
        }else{
            return (this.precioM3() * 40)/100;
        }
    }
    precioMobiliario(): number {
        return this.precioM3() + this.incremento();
    }
    toJSON(){
        return {
            ...super.toJSON(),
            tela: this.tela,
            incremento: this.incremento(),
        };
    }

}