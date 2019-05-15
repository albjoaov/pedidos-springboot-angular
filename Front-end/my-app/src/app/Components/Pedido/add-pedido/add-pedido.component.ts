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
  listaPratoPreco: any[]

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(private formBuilder: FormBuilder, private pratoService: PratoService, private pedidoService: PedidoService, private router: Router) { }

  ngOnInit() {
    this.teste();
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
    this.selectedItems = this.selectedItems.filter(element => element != item)
  }

  populaInputs() {
    this.pratoService.getPratos()
      .subscribe(data => { this.pratoList = data; })
  }

  teste() {
    this.pratoService.getPratos()
      .subscribe(data => {
      this.listaPratoPreco = data;
        this.listaPratoPreco.forEach(element => {
          delete element.acompanhamentos;
        });
      });


  }

  addPedido() {
    const pratos: Prato[] = []
    const pedido: Pedido = new Pedido(pratos);
    let novoPreco: number = 0;
    const novoPrato = this.form.value
    
    this.listaPratoPreco.forEach(element => {
        if (novoPrato.nome === element.nome) {
            novoPreco = element.preco
        }
    });

    // console.log(this.listaPratoPreco);
    //console.log(novoPreco);
    novoPrato.preco = novoPreco;
    console.log(novoPrato);

    pedido["pratos"].push(novoPrato)
    // this.pedidoService.createPedido(pedido)
    //   .subscribe(data => {
    //     alert("Pedido adicionado com sucesso! Acesse a listagem dos pedidos no diretório ./src/main/resources/json/ no arquivo `pedidos.json`")
    //     this.form.reset();
    //   });
  }



}
