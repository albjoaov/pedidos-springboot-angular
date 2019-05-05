import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prato } from 'src/app/Model/Prato';
import { PratoService } from 'src/app/Service/prato.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:PratoService ) { }

  prato:Prato = new Prato();

  ngOnInit() {
  }

  createPrato(prato:Prato){
    this.service.createPrato(prato)
    .subscribe(data => { alert("Sucesso")});
  }
}
