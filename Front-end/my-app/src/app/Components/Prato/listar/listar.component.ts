import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PratoService } from 'src/app/Service/prato.service';
import { Prato } from 'src/app/Model/Prato';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {

  pratos:Prato[];
  constructor(private pratoService:PratoService, private router:Router) { }

  ngOnInit() {
    this.pratoService.getPratos()
    .subscribe(data => { this.pratos = data; console.log(data)})
  }

}
