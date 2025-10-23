import Cl_mComedor from "./Cl_mComedor.js";
import Cl_mMobiliario from "./Cl_mMobiliario.js";

export default class Cl_mMuebleria {
    private acGananciaComedores: number = 0;
    private acGananciaMuebles: number = 0;
    private contProdVendidos: number = 0;
    private contComedoresVendidos: number = 0;
    private acTotalVendido: number = 0;
    procesarMobiliario(mobiliario: Cl_mMobiliario){
        this.contProdVendidos++;
        if(mobiliario instanceof Cl_mComedor){
            this.contComedoresVendidos++;
            this.acGananciaComedores += mobiliario.precioMobiliario();
        }else{
            this.acGananciaMuebles += mobiliario.precioMobiliario();
        }
        this.acTotalVendido += mobiliario.precioMobiliario();
    }
    //metodos
    prodMasGananciaGenero(): string{
        if(this.acGananciaComedores > this.acGananciaMuebles){
            return "comedores";
        }else if(this.acGananciaComedores === this.acGananciaMuebles){
            return "por igual";
        }else{
            return "muebles"
        }
    }
    porcentComedoresVendidos(): number{
        return (this.contComedoresVendidos / this.contProdVendidos)*100;
    }
    montoTotalVendido(): number{
        return this.acTotalVendido;
    }
}