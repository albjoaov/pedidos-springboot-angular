import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Components/Prato/listar/listar.component';
import { PratoService } from './Service/prato.service'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddPedidoComponent } from './Components/Pedido/add-pedido/add-pedido.component'


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PratoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
