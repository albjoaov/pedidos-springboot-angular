import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Components/Prato/listar/listar.component';
import { AddPedidoComponent } from './Components/Pedido/add-pedido/add-pedido.component';

const routes: Routes = [
  {path:'listar-pratos', component:ListarComponent},
  {path:'novo-pedido', component:AddPedidoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
