import Cl_vMobiliario from "./Cl_vMobiliario.js";
interface iMueble {
    factura: number;
    madera: number;
    tela: number;
}

export default class Cl_vMueble extends Cl_vMobiliario {
    private divInTela: HTMLElement;
    private inTela: HTMLInputElement;
    private btAceptar: HTMLElement;
    constructor(){
        super();
        this.divInTela = this.crearHTMLElement({ elementName: "divInTela"});
        this.inTela = this.crearHTMLInputElement({elementName: "inTela"});
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarMueble",
            onclick: () => this.controlador?.procesarMobiliarioMueble({
                factura: this.factura,
                madera: this.madera,
                tela: this.tela
            }),
        });
    }
    get tela(): number {
        return +this.inTela.value;
    }
    show({ ver = true }: {ver?: boolean} = {ver: true}) {
        super.show({ver, nombreTipo: "Mueble"});
        this.inTela.value = "";
        this.divInTela.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
export { iMueble };
