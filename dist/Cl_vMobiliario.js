import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vMobiliario extends Cl_vGeneral {
    constructor() {
        super({ formName: "mobiliarioForm" });
        this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
        this.inFactura = this.crearHTMLInputElement({ elementName: "inFactura" });
        this.inMadera = this.crearHTMLInputElement({ elementName: "inMadera" });
        this.btCancelar = this.crearHTMLButtonElement({
            elementName: "btCancelar",
            onclick: () => {
                var _a;
                this.show({ ver: false });
                (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.vista.show();
            },
        });
    }
    get factura() {
        return +this.inFactura.value;
    }
    get madera() {
        return +this.inMadera.value;
    }
    show({ ver = true, nombreTipo = "", }) {
        super.show({ ver });
        this.lblTipo.innerHTML = nombreTipo;
        this.inFactura.value = "";
        this.inMadera.value = "";
        this.inFactura.focus();
    }
}
