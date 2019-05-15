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

  pratoList: Prato[];
  form: FormGroup;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(private formBuilder: FormBuilder, private pratoService: PratoService, private pedidoService: PedidoService, private router: Router) { }

  ngOnInit() {
    this.populaInputs();
    this.loadMultiSelectData();
    this.form = this.formBuilder.group({
      nome: [null],
      acompanhamentos: [null],
      preco: [null]
    })
  }

  loadMultiSelectData (){
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Selecionar todos',
      unSelectAllText: 'Desmarcar todos',
      itemsShowLimit: 5,
      allowSearchFilter: true,
      searchPlaceholderText	: "Digite aqui para filtrar",
      limitSelection: 4,
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }



  populaInputs() {
    this.pratoService.getPratos()
      .subscribe(data => { this.pratoList = data; })
  }

  addPedido() {
    const pratos: Prato[] = []
    const pedido: Pedido = new Pedido(pratos);
    
    const novoPrato = this.form.value
    //const acompanhamentosList = this.form.value.acompanhamentos.split(',');
    //novoPrato.acompanhamentos = acompanhamentosList

    pedido["pratos"].push(novoPrato)
    this.pedidoService.createPedido(pedido)
      .subscribe(data => {
        alert("Pedido adicionado com sucesso! Acesse a listagem dos pedidos no diretório ./src/main/resources/json/ no arquivo `pedidos.json`")
        this.form.reset();
      });
  }



}
