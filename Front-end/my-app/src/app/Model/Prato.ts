export class Prato{
    // id:number;
    nome:String;
    acompanhamentos:Array<String>;
    preco:number;

    constructor(nome:String, acompanhamentos:Array<String>, preco:number){
        this.nome = nome,
        this.acompanhamentos = acompanhamentos,
        this.preco = preco
    }
}