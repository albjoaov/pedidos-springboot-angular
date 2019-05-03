import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Prato/listar/listar.component';
import { AddComponent } from './Prato/add/add.component';

const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'novo', component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
