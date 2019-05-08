export class Prato{
    // id:number;
    nome:String;
    acompanhamentos:String[];
    preco:number;

    constructor(nome:String, acompanhamentos:String[], preco:number){
        this.nome = nome,
        this.acompanhamentos = acompanhamentos,
        this.preco = preco
    }
}