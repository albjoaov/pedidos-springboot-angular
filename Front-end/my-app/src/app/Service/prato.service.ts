import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prato } from '../Model/Prato'

@Injectable({
  providedIn: 'root'
})

export class PratoService {

  persona:Prato[];
  constructor(private http:HttpClient) { }

  url='http://localhost:8080/prato'

  getPratos(){
    return this.http.get<Prato[]>(this.url);
  }
}
