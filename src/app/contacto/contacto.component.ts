import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
//Variables para usar jquery
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  enviar(){
   $("#formulario").addClass("d-none");
   $("#enviado").removeClass("d-none").show("blind");
  }

}
