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
   
    $("#contacto").ready(function(){
      $("input").addClass("wow flip");
    });
  
  }
  enviar(){
   /* $("#email")
    $("#name")
    $("#subject")
    if(tienen la clase invisible)
    $("button").css("background","red");*/
}

}
