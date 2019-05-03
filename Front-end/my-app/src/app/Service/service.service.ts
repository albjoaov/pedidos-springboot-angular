import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prato } from '../Model/Prato';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/prato'

  getPratos(){
    return this.http.get<Prato[]>(this.Url);
  }
}
