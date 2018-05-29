import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresarComponent } from "../app/ingresar/ingresar.component";
import { RegistroComponent } from "../app/registro/registro.component";
import { PerfilComponent } from "../app/perfil/perfil.component";
import { MisionesComponent } from "../app/misiones/misiones.component";
const routes: Routes = [
  {
    path: 'ingresar',
    component: IngresarComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: '',
    component: MisionesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
