import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/Service/pedido.service';
import { Pedido } from 'src/app/Model/Pedido';
import { Prato } from 'src/app/Model/Prato';

@Component({
  selector: 'app-list-pedido',
  templateUrl: './list-pedido.component.html',
  styleUrls: ['./list-pedido.component.css']
})
export class ListPedidoComponent implements OnInit {

  pratos:Prato[]
  pedidos:any = new Pedido(this.pratos);
  constructor(private pedidoService:PedidoService, private router:Router) { }

  ngOnInit() {
    this.pedidoService.getPedido()
    .subscribe(data => { this.pedidos = data;})
  }

}
