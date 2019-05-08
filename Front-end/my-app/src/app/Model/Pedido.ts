import { Prato } from './Prato';

export class Pedido {
    // id:number;
    pratos:Prato[];

    constructor(pratos:Prato[]){
        this.pratos = pratos
    }
    
}