import Cl_mMuebleria from "./Cl_mMuebleria.js";
import Cl_mMobiliario from "./Cl_mMobiliario.js";
import Cl_mComedor from "./Cl_mComedor.js";
import Cl_mMueble from "./Cl_mMueble.js";
import Cl_vMuebleria from "./Cl_vMuebleria.js";
import { iComedor } from "./Cl_vComedor.js";
import { iMueble } from "./Cl_vMueble.js";

export default class Cl_controlador {
    public modelo: Cl_mMuebleria;
    public vista: Cl_vMuebleria;
    constructor(modelo: Cl_mMuebleria, vista: Cl_vMuebleria){
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarMobiliarioComedor(data: iComedor) {
        let mComedor = new Cl_mComedor({
            factura: data.factura,
            madera: data.madera,
            sillas: data.sillas,
        });
        this.modelo.procesarMobiliario(mComedor);
        this.reportarMobiliario({mMobiliario: mComedor});
    }
    procesarMobiliarioMueble(data: iMueble) {
        let mMueble = new Cl_mMueble({
            factura: data.factura,
            madera: data.madera,
            tela: data.tela,
        });
        this.modelo.procesarMobiliario(mMueble);
        this.reportarMobiliario({mMobiliario: mMueble});
    }
    reportarMobiliario({ mMobiliario }: { mMobiliario: Cl_mMobiliario}) {
        this.vista.reportarMobiliario({
            dataMobiliario: mMobiliario.toJSON(),
            prodMasGananciaGenero: this.modelo.prodMasGananciaGenero(),
            porcentComedoresVendidos: this.modelo.porcentComedoresVendidos(),
            montoTotalVendido: this.modelo.montoTotalVendido(),
        });
        this.vista.show();
    }
}