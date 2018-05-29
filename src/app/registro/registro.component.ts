import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  etiqueta1 = 'Nombre';
  etiqueta2 = 'Apellido';
  etiqueta3 = 'Edad';
  etiqueta4 = 'Correo';

  nombre: string;
  apellido: string;
  edad: number;
  correo: string;
  submitText: string = "Enviar";
  constructor() { }

  ngOnInit() {
  }

}
