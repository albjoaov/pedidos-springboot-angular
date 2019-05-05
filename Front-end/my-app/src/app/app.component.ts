import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router){}

  listarPratos(){
    this.router.navigate(["listar-pratos"])
  }
  novoPrato(){
    this.router.navigate(["novo-prato"])
  }

  novoPedido(){
    this.router.navigate(["novo-pedido"])
  }
}