import Cl_vComedor from "./Cl_vComedor.js";
import Cl_vMueble from "./Cl_vMueble.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
interface iMobiliario {
    factura: number;
    madera: number;
    sillas?: number;
    tela?: number;
    precioM3: number;
    m3: number;
    incremento?: number;
    precioMobiliario: number;
}
//define una interfaz para el controlador
export default class Cl_vMuebleria extends Cl_vGeneral{
    private _vComedor: Cl_vComedor;
    private _vMueble: Cl_vMueble;
    private dataMobiliarios: HTMLElement;
    private lblProdMasGananciaGenero: HTMLElement;
    private lblPorcentComedoresVendidos: HTMLElement;
    private lblMontoTotalVendido: HTMLElement;
    private btAgregarComedor: HTMLElement;
    private btAgregarMueble: HTMLElement;

    constructor() {
        super({ formName: "mainForm" });
        this._vComedor = new Cl_vComedor();
        this._vMueble = new Cl_vMueble();
        this.dataMobiliarios = this.crearHTMLElement({elementName: "dataMobiliarios" });
        this.lblProdMasGananciaGenero = this.crearHTMLElement({
            elementName: "lblProdMasGananciaGenero",
        });
        this.lblPorcentComedoresVendidos = this.crearHTMLElement({
            elementName: "lblPorcentComedoresVendidos",
        });
        this.lblMontoTotalVendido = this.crearHTMLElement({
            elementName: "lblMontoTotalVendido",
        });
        this.btAgregarComedor = this.crearHTMLButtonElement({
            elementName: "btAgregarComedor",
            onclick: () => {
                this.show({ ver: false });
                this._vComedor.show();
            },
        });
        this.btAgregarMueble = this.crearHTMLButtonElement({
            elementName: "btAgregarMueble",
            onclick: () => {
                this.show({ ver: false });
                this._vMueble.show();
            },
        });

        this.dataMobiliarios.innerHTML = "";
        this._vComedor.show({ver: false});
        this._vMueble.show({ver: false});
    }
    //set and get
    set controlador(controlador: Cl_controlador){
        super.controlador = controlador;
        this.vComedor.controlador = controlador;
        this.vMueble.controlador = controlador;
    }
    get vComedor(){
        return this._vComedor;
    }
    get vMueble(){
        return this._vMueble;
    }
    reportarMobiliario({
        dataMobiliario,
        prodMasGananciaGenero,
        porcentComedoresVendidos,
        montoTotalVendido,
    }: {
        dataMobiliario: iMobiliario;
        prodMasGananciaGenero: string;
        porcentComedoresVendidos: number;
        montoTotalVendido: number;
    }): void {
        this.dataMobiliarios.innerHTML += `
        <td class="colNumber">${dataMobiliario.factura}</td>
        <td class="colNumber">${dataMobiliario.madera}</td>
        <td class="colNumber">${dataMobiliario.sillas ? dataMobiliario.sillas : "--"}</td>
        <td class="colNumber">${dataMobiliario.tela ? dataMobiliario.tela : "--"}</td>
        <td class="colNumber">${dataMobiliario.precioM3}</td>
        <td class="colNumber">${dataMobiliario.m3}</td>
        <td class="colNumber">${dataMobiliario.incremento ? dataMobiliario.incremento: "--"}</td>
        <td class="colCurrency">${`$${dataMobiliario.precioMobiliario.toFixed(2)}`}</td>        
        `;
        this.lblProdMasGananciaGenero.innerHTML = prodMasGananciaGenero.toString();
        this.lblPorcentComedoresVendidos.innerHTML = porcentComedoresVendidos.toFixed(2);
        this.lblMontoTotalVendido.innerHTML = montoTotalVendido.toFixed(2);
    }
    show({ ver = true }: {ver?: boolean } = {ver: true}) {
        super.show({ver});
        if (ver) {
            this.vComedor.show({ver: false});
            this.vMueble.show({ ver: false});
        }
    }
}