import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Prato/listar/listar.component';
import { AddComponent } from './Prato/add/add.component';
import { FormsModule } from '@angular/forms'
import { PratoService } from './Service/prato.service'

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PratoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
