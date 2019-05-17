import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PratoService } from 'src/app/Service/prato.service';
import { Prato } from 'src/app/Model/Prato';
import { Pedido } from 'src/app/Model/Pedido';
import { PedidoService } from 'src/app/Service/pedido.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


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

  constructor(private toastr: ToastrService, private formBuilder: FormBuilder, private pratoService: PratoService, private pedidoService: PedidoService, private router: Router) { }

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

  addPrato(){
    if (this.form.valid) {
      
      const novoPrato: Prato = this.form.value
      novoPrato.preco = this.getPreco(novoPrato);
  
      this.pratoCart.push(novoPrato)
      this.form.reset();
      this.showSuccess("Adicionado com sucesso ao carrinho!", "Prato" );
    }else {
      this.showError("Você deve selecionar um prato e pelo menos um acompanhamento", "Prato");
    }

    
  }

  loadPedido(){
    let listaPratosCart: Prato[] = []
    listaPratosCart = this.pratoCart
    
    const pedido: Pedido = new Pedido(listaPratosCart);
    this.sendPedido(pedido)
  }

  sendPedido(pedido: Pedido){
    console.log(this.pratoCart.length)

    if (this.pratoCart.length > 0) {
      console.log(pedido)

      this.pedidoService.createPedido(pedido)
        .subscribe(data => {
          this.showSuccess("Acesse a listagem dos pedidos no diretório ./src/main/resources/json/ no arquivo `pedidos.json`", "Pedido" );
          this.form.reset();
          this.pratoCart = [] // clean pratoCart data
        });
    } 
    else {
      this.showError("Você deve cadastrar pelo menos um prato ao carrinho", "Pedido");
    }
     
  }

  isPedidoValid(): boolean{
    return this.pratoCart.length > 0;
  }

  showSuccess(message: string, entity: string) {
    this.toastr.success(message, entity, {
      progressBar: true,
      closeButton: true,
    });
  }

  showError(message: string, entity: string) {
    this.toastr.error(message, entity, {
      progressBar: true,
      closeButton: true,
    });
  }

}
