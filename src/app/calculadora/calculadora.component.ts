import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

titulo="CALCULADORA HECHA CON ANGULAR";
n1:number=0;
n2:number=0;
total: number=0;

sumar(){
  this.total=this.n1+this.n2;
}

resta(){
  this.total=this.n1-this.n2;
}
multiplicar(){
  this.total=this.n1*this.n2;
}
dividir(){
  this.total=this.n1/this.n2;
}
potencia(){
  this.total= Math.pow(this.n1,this.n2);
}
}

