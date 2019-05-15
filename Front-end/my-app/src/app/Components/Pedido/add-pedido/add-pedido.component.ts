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
    this.populaDropdownList();
    this.populaInputs();
    this.loadMultiSelectData();
    this.form = this.formBuilder.group({
      nome: [null],
      acompanhamentos: [null],
      preco: [null]
    })
  }

  loadMultiSelectData() {
    this.dropdownList = []
    //   { text: 'Mumbai' },
    //   { text: 'Bangaluru' },
    //   { text: 'Pune' },
    //   { text: 'Navsari' },
    //   { text: 'New Delhi' }
    // ];
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'text',
      selectAllText: 'Selecionar todos',
      unSelectAllText: 'Desmarcar todos',
      itemsShowLimit: 5,
      allowSearchFilter: true,
      searchPlaceholderText: "Digite aqui para filtrar",
      limitSelection: 99,
    };
  }

  populaDropdownList() {
    var listaPratos = []
    const meuSet = new Set();

    this.pratoService.getPratos()
      .subscribe(data => {
        listaPratos = data;

        listaPratos.forEach(element => {

          for (var key in element) {
            if (element.hasOwnProperty(key) && key == 'acompanhamentos') {
              element[key].forEach(acompanhamento => {
                meuSet.add(acompanhamento);
              });
            }
          }
        });
        this.dropdownList = Array.from(meuSet);
      });

  }

  onItemSelect(item: any) {
    this.selectedItems.push(item)
  }

  onItemDeSelect(item: any) {
    const valueToRemove = item.id
    this.selectedItems = this.selectedItems.filter(item => { return item.id != valueToRemove })
  }



  populaInputs() {
    this.pratoService.getPratos()
      .subscribe(data => { this.pratoList = data; })
  }

  addPedido() {
    const pratos: Prato[] = []
    const pedido: Pedido = new Pedido(pratos);


    const novoPrato = this.form.value

    console.log(this.selectedItems);
    const acompanhamentosList = this.form.value.acompanhamentos.split(',');
    novoPrato.acompanhamentos = acompanhamentosList

    pedido["pratos"].push(novoPrato)
    this.pedidoService.createPedido(pedido)
      .subscribe(data => {
        alert("Pedido adicionado com sucesso! Acesse a listagem dos pedidos no diretório ./src/main/resources/json/ no arquivo `pedidos.json`")
        this.form.reset();
      });
  }



}
