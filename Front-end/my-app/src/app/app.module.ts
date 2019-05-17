import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Components/Prato/listar/listar.component';
import { PratoService } from './Service/prato.service'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddPedidoComponent } from './Components/Pedido/add-pedido/add-pedido.component';
import { FormDebugComponent } from './Components/form-debug/form-debug.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListPedidoComponent } from './Components/Pedido/list-pedido/list-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddPedidoComponent,
    FormDebugComponent,
    ListPedidoComponent,

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),

  ],
  providers: [PratoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
