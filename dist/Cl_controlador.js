import Cl_mComedor from "./Cl_mComedor.js";
import Cl_mMueble from "./Cl_mMueble.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarMobiliarioComedor(data) {
        let mComedor = new Cl_mComedor({
            factura: data.factura,
            madera: data.madera,
            sillas: data.sillas,
        });
        this.modelo.procesarMobiliario(mComedor);
        this.reportarMobiliario({ mMobiliario: mComedor });
    }
    procesarMobiliarioMueble(data) {
        let mMueble = new Cl_mMueble({
            factura: data.factura,
            madera: data.madera,
            tela: data.tela,
        });
        this.modelo.procesarMobiliario(mMueble);
        this.reportarMobiliario({ mMobiliario: mMueble });
    }
    reportarMobiliario({ mMobiliario }) {
        this.vista.reportarMobiliario({
            dataMobiliario: mMobiliario.toJSON(),
            prodMasGananciaGenero: this.modelo.prodMasGananciaGenero(),
            porcentComedoresVendidos: this.modelo.porcentComedoresVendidos(),
            montoTotalVendido: this.modelo.montoTotalVendido(),
        });
        this.vista.show();
    }
}
