import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PortadaComponent } from './portada/portada.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    CalculadoraComponent,
    PortadaComponent
  ],
  imports: [
    BrowserModule,
  /*   importar esto xdxd */
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
