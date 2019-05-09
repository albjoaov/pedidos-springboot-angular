import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PratoService } from 'src/app/Service/prato.service';
import { Prato } from 'src/app/Model/Prato';
import { Pedido } from 'src/app/Model/Pedido';
import { PedidoService } from 'src/app/Service/pedido.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-pedido',
  templateUrl: './add-pedido.component.html',
  styleUrls: ['./add-pedido.component.css']
})
export class AddPedidoComponent implements OnInit {

  pratoList:Prato[];
  
  preco:number
  nome:String
  acompanhamentos:Array<String>
  
  novoPrato:Prato[] = []
  pedido:Pedido = new Pedido(this.novoPrato);
  
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private pratoService:PratoService, private pedidoService:PedidoService, private router:Router) { }

  ngOnInit() {
    this.populaInputs();
    this.form = this.formBuilder.group({
      nome: [null],
      acompanhamentos: [null],
      preco: [null]
    }) 
  }

  populaInputs(){
    this.pratoService.getPratos()
    .subscribe(data => { this.pratoList = data; })
  }

  addPedido() {
    const novoPrato = this.form.value

    const acompanhamentosList = this.form.value.acompanhamentos.split(',');
    console.log(acompanhamentosList)

    novoPrato.acompanhamentos = acompanhamentosList

    console.log(acompanhamentosList)

    this.pedido["pratos"].push(novoPrato)
    console.log(this.pedido)
    this.pedidoService.createPedido(this.pedido)
    .subscribe(data => {
      alert("Pedido adicionado com sucesso! Acesse a listagem dos pedidos no diretório ./src/main/resources/json/ no arquivo `pedidos.json`")
      this.form.reset();
    });
  }



}
