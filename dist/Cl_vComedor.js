import Cl_vMobiliario from "./Cl_vMobiliario.js";
export default class Cl_vComedor extends Cl_vMobiliario {
    constructor() {
        super();
        this.divInSillas = this.crearHTMLElement({ elementName: "divInSillas" });
        this.inSillas = this.crearHTMLInputElement({ elementName: "inSillas" });
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarComedor",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarMobiliarioComedor({
                    factura: this.factura,
                    madera: this.madera,
                    sillas: this.sillas
                });
            },
        });
    }
    get sillas() {
        return +this.inSillas.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Comedor" });
        this.inSillas.value = "";
        this.divInSillas.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
