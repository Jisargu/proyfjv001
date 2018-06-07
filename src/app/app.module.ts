import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MisionesComponent } from './misiones/misiones.component';
import { FooterComponent } from './footer/footer.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HeaderComponent } from './header/header.component';

//Firestore
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAX1r3r1V0Tgvqk9asCOCcoqIAEjC13CrY",
  authDomain: "misionesvecinales.firebaseapp.com",
  databaseURL: "https://misionesvecinales.firebaseio.com",
  projectId: "misionesvecinales",
  storageBucket: "misionesvecinales.appspot.com",
  messagingSenderId: "511270768265"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MisionesComponent,
    FooterComponent,
    PerfilComponent,
    RegistroComponent,
    IngresarComponent,
    ContactoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
