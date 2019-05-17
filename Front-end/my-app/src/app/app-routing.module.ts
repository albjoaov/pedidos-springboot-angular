import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Components/Prato/listar/listar.component';
import { AddPedidoComponent } from './Components/Pedido/add-pedido/add-pedido.component';
import { ListPedidoComponent } from './Components/Pedido/list-pedido/list-pedido.component';

const routes: Routes = [
  {path:'listar-pratos', component:ListarComponent},
  {path:'novo-pedido', component:AddPedidoComponent},
  {path:'listar-pedido', component:ListPedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
