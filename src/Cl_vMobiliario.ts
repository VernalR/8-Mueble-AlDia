import Cl_vGeneral from "./Cl_vGeneral.js";

export default class Cl_vMobiliario extends Cl_vGeneral {
    private inFactura: HTMLInputElement;
    private inMadera: HTMLInputElement;
    private lblTipo: HTMLElement;
    private btCancelar: HTMLButtonElement;

    constructor() {
        super({ formName: "mobiliarioForm" });
        this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo"});
        this.inFactura = this.crearHTMLInputElement({elementName: "inFactura"});
        this.inMadera = this.crearHTMLInputElement({elementName: "inMadera"});
        this.btCancelar = this.crearHTMLButtonElement({
            elementName: "btCancelar",
            onclick: () => {
                this.show({ver: false});
                this.controlador?.vista.show();
            },
        });
    }
    get factura(): number{
        return +this.inFactura.value;
    }
    get madera(): number{
        return +this.inMadera.value;
    }
    show({
        ver = true,
        nombreTipo = "",
    }: {
        ver?: boolean;
        nombreTipo?: string;
    }): void {
        super.show({ ver });
        this.lblTipo.innerHTML = nombreTipo;
        this.inFactura.value = "";
        this.inMadera.value = "";
        this.inFactura.focus();
    }
}