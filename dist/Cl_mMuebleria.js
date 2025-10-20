export default class Cl_mMuebleria {
    constructor() {
        this.acGananciaComedores = 0;
        this.acGananciaMuebles = 0;
        this.contProdVendidos = 0;
        this.contComedoresVendidos = 0;
        this.acTotalVendido = 0;
    }
    procesarMobiliario(mobiliario) {
        this.contProdVendidos++;
        if (mobiliario.tipoMobiliario() === 1) {
            this.contComedoresVendidos++;
            this.acGananciaComedores += mobiliario.precioMobiliario();
        }
        else {
            this.acGananciaMuebles += mobiliario.precioMobiliario();
        }
        this.acTotalVendido += mobiliario.precioMobiliario();
    }
    //metodos
    prodMasGananciaGenero() {
        if (this.acGananciaComedores > this.acGananciaMuebles) {
            return "comedores";
        }
        else if (this.acGananciaComedores === this.acGananciaMuebles) {
            return "por igual";
        }
        else {
            return "muebles";
        }
    }
    porcentComedoresVendidos() {
        return (this.contComedoresVendidos / this.contProdVendidos) * 100;
    }
    montoTotalVendido() {
        return this.acTotalVendido;
    }
}
