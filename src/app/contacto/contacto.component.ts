import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
//Firestore
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map'; //single doc

//Variables para usar jquery
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  nombreContacto: string;
  apellidoContacto: string;
  correoContacto: string;
  mensajeContacto: string;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
  }

  enviar() {
    //Para agregar datos a firestore
    this.afs.collection('contacto').add({
      'nombre': this.nombreContacto,
      'apellido': this.apellidoContacto,
      'correo': this.correoContacto, 'mensaje': this.mensajeContacto
    });
    //Para ocultar formulario y mostrar mensaje de enviado
    $("#formulario").addClass("d-none");
    $("#enviado").removeClass("d-none").show("blind");
  }

}
