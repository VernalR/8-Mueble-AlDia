/*
    Mueble-AlDia
*/
import Cl_mMuebleria from "./Cl_mMuebleria.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vMuebleria from "./Cl_vMuebleria.js";
import Cl_mComedor from "./Cl_mComedor.js";
import Cl_mMueble from "./Cl_mMueble.js";
import { mobiliarioMueble, mobiliarioComedor } from "./_data.js";
export default class Cl_index {
    constructor() {
        let vista = new Cl_vMuebleria();
        let modelo = new Cl_mMuebleria();
        this.contolador = new Cl_controlador(modelo, vista);
        vista.controlador = this.contolador;
        this.iniciarData();
    }
    iniciarData() {
        this.contolador.procesarMobiliarioComedor(new Cl_mComedor(mobiliarioComedor[0]));
        this.contolador.procesarMobiliarioComedor(new Cl_mComedor(mobiliarioComedor[1]));
        this.contolador.procesarMobiliarioComedor(new Cl_mComedor(mobiliarioComedor[2]));
        this.contolador.procesarMobiliarioComedor(new Cl_mComedor(mobiliarioComedor[3]));
        this.contolador.procesarMobiliarioMueble(new Cl_mMueble(mobiliarioMueble[0]));
        this.contolador.procesarMobiliarioMueble(new Cl_mMueble(mobiliarioMueble[1]));
        this.contolador.procesarMobiliarioMueble(new Cl_mMueble(mobiliarioMueble[2]));
        this.contolador.procesarMobiliarioMueble(new Cl_mMueble(mobiliarioMueble[3]));
    }
}
