import Cl_vMobiliario from "./Cl_vMobiliario.js";
export default class Cl_vMueble extends Cl_vMobiliario {
    constructor() {
        super();
        this.divInTela = this.crearHTMLElement({ elementName: "divInTela" });
        this.inTela = this.crearHTMLInputElement({ elementName: "inTela" });
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarMueble",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarMobiliarioMueble({
                    factura: this.factura,
                    madera: this.madera,
                    tela: this.tela
                });
            },
        });
    }
    get tela() {
        return +this.inTela.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Mueble" });
        this.inTela.value = "";
        this.divInTela.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
