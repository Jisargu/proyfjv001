import { Component, OnInit } from '@angular/core';
import { Mision } from "../misiones";

@Component({
  selector: 'app-misiones',
  templateUrl: './misiones.component.html',
  styleUrls: ['./misiones.component.scss']
})
export class MisionesComponent implements OnInit {
  botonMision = "Tomar";
 // misiones=[];
  
 mision1: Mision = {
    rapidez: 'Urgente',
    titulo: 'Pasear perros',
    contenido: 'Pasear a 2 hermosos perros chihuahua 1 hora en el parque',
    recompensa: 'Recompensa: $100',
    fecha: 'Hace 2 minutos',
  }
  mision2: Mision = {
    rapidez: 'Próxima semana',
    titulo: 'Pintar fachada de casa',
    contenido: 'Cambiar el color de la fachada a azul cielo',
    recompensa: 'Recompensa: $500',
    fecha: 'Hace 2 días',
  }
  mision3: Mision = {
    rapidez: 'Mañana',
    titulo: 'Cortar pasto de jardín',
    contenido: 'Decapitar el césped del jardín de la entrada principal',
    recompensa: 'Recompensa: $200',
    fecha: 'Hace 32 minutos',
  }
  mision4: Mision = {
    rapidez: 'Fin de semana',
    titulo: 'Lavar carro',
    contenido: 'Lavado simple de automóvil deportivo rojo',
    recompensa: 'Recompensa: $50',
    fecha: 'Hace 2 horas',
  }

  constructor() { }

  ngOnInit() {
  }

}
