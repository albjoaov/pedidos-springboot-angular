import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prato } from '../Model/Prato'

@Injectable({
  providedIn: 'root'
})

export class PratoService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8080/prato'

  getPratos(){
    return this.http.get<Prato[]>(this.url);
  }

  createPrato(prato:Prato) {
    return this.http.post<Prato>(this.url, prato);
  }
}
