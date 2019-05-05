import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../Model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8080/pedido'

  createPedido(pedido:Pedido) {
    return this.http.post<Pedido>(this.url, pedido);
  }
}