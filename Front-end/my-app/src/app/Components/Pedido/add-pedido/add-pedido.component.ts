import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PratoService } from 'src/app/Service/prato.service';
import { Prato } from 'src/app/Model/Prato';
import { Pedido } from 'src/app/Model/Pedido';
import { PedidoService } from 'src/app/Service/pedido.service';

@Component({
  selector: 'app-add-pedido',
  templateUrl: './add-pedido.component.html',
  styleUrls: ['./add-pedido.component.css']
})
export class AddPedidoComponent implements OnInit {

  pratos:Prato[];
  pedido:Pedido = new Pedido();

  constructor(private pratoService:PratoService, private pedidoService:PedidoService, private router:Router) { }

  ngOnInit() {
    this.pratoService.getPratos()
    .subscribe(data => { this.pratos = data; })
  }

  addPedido() {
    this.pedidoService.createPedido(this.pedido)
    .subscribe(data => { alert("Pedido adicionado com sucesso!")});
  }

}
