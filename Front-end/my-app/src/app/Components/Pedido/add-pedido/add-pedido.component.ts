import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PratoService } from 'src/app/Service/prato.service';
import { Prato } from 'src/app/Model/Prato';
import { Pedido } from 'src/app/Model/Pedido';
import { PedidoService } from 'src/app/Service/pedido.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-pedido',
  templateUrl: './add-pedido.component.html',
  styleUrls: ['./add-pedido.component.css']
})
export class AddPedidoComponent implements OnInit {

  pratoListInput: Prato[];
  pratoCart: Prato[] = [];
  form: FormGroup;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(private formBuilder: FormBuilder, private pratoService: PratoService, private pedidoService: PedidoService, private router: Router) { }

  ngOnInit() {
    this.loadInputsForm();
    this.loadMultiSelectData();

    this.form = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.nullValidator]],
      acompanhamentos: [null, [Validators.required, Validators.nullValidator]],
    })
  }

  loadInputsForm() {
    var listaPratos = []
    const meuSet = new Set();

    this.pratoService.getPratos()
      .subscribe(data => { listaPratos = data; this.pratoListInput = data;

        listaPratos.forEach(element => {

          for (var key in element) {
            if (element.hasOwnProperty(key) && key == 'acompanhamentos') {
                element[key].forEach(acompanhamento => { meuSet.add(acompanhamento); });
            }
          }
        });
        this.dropdownList = Array.from(meuSet);
      });
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

  onItemSelect(item: any) {
    this.selectedItems.push(item)
  }

  onItemDeSelect(item: any) {
    this.selectedItems = this.selectedItems.filter(element => element != item)
  }

  getPreco(novoPrato: Prato): number {
    let preco: number;
    this.pratoListInput.forEach(element => {

      if (novoPrato.nome === element.nome) {
        preco = element.preco
      }
    });

    return preco;
  }

  // addPedido() {
  //   const pratos: Prato[] = []
  //   const pedido: Pedido = new Pedido(pratos);
  //   const novoPrato: Prato = this.form.value
    
  //   pratos.push(this.form.value);
  //   console.log(pratos);

  //   novoPrato.preco = this.getPreco(novoPrato);

  //   pedido["pratos"].push(novoPrato)
  //   // this.sendPedido(pedido);

  // }

  addPrato(){
    const novoPrato: Prato = this.form.value
    novoPrato.preco = this.getPreco(novoPrato);

    this.pratoCart.push(novoPrato)
    this.form.reset();
    alert("Prato adicionado com sucesso!")
  }

  loadPedido(){
    let listaPratosCart: Prato[] = []
    listaPratosCart = this.pratoCart
    this.pratoCart = [] // clean pratoCart data
    
    const pedido: Pedido = new Pedido(listaPratosCart);
    this.sendPedido(pedido)
  }

  sendPedido(pedido: Pedido){
    console.log(pedido)
    this.pedidoService.createPedido(pedido)
      .subscribe(data => {
        alert("Pedido adicionado com sucesso! Acesse a listagem dos pedidos no diretório ./src/main/resources/json/ no arquivo `pedidos.json`")
        this.form.reset();
      });
  }

  checkValidTouched(field){
    return !this.form.get(field).valid && this.form.get(field).touched
  }

  putCSSError(field){
    return {
      'has-error': this.checkValidTouched(field),
      'has-feedback': this.checkValidTouched(field)
    }
  }



}
