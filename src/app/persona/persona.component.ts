import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

/* hacer de cuenta que estas sonvariables que se pueden exportar al html, ayudan mucho para modificar el DOM de la pag web */

nombre: string = "Juan Nicolás"; 
apellido: string ="Romero Pineda";
deshabilitarBoton = true;
textoAmodificar = "";

}
