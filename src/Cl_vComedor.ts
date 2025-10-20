import Cl_vMobiliario from "./Cl_vMobiliario.js";
interface iComedor {
    factura: number;
    madera: number;
    sillas: number;
}

export default class Cl_vComedor extends Cl_vMobiliario {
    private divInSillas: HTMLElement;
    private inSillas: HTMLInputElement;
    private btAceptar: HTMLElement;
    constructor(){
        super();
        this.divInSillas = this.crearHTMLElement({ elementName: "divInSillas"});
        this.inSillas = this.crearHTMLInputElement({elementName: "inSillas"});
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarComedor",
            onclick: () => this.controlador?.procesarMobiliarioComedor({
                factura: this.factura,
                madera: this.madera,
                sillas: this.sillas
            }),
        });
    }
    get sillas(): number {
        return +this.inSillas.value;
    }
    show({ ver = true }: {ver?: boolean} = {ver: true}) {
        super.show({ver, nombreTipo: "Comedor"});
        this.inSillas.value = "";
        this.divInSillas.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
export { iComedor };
