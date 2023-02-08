import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {




  title = 'APLICACIÓN HECHA CON FRAMEWORK ANGULAR';
  mostrardiv1=true;
  mostrardiv2=false;
  mostrardiv3=false;

  d = new Date();
  /*  getmonth sale desde 0 a 11 meses, y se puede tomar como numero, por eso no es necesario volverlo string y luego int para poder operarlo */

  fecharreglada: string = '';
  /* aqui obtenemos la hora, minutos, segundos actuales y de ahi se genera el 
  reloj, ya que el atributo getHours(), getMinutes() y getSeconds() no se actualizan si no se recarga la pag, entonces toca hacer todo manual */
  contadorSegundos = this.d.getSeconds();
  contadorMinutos = this.d.getMinutes();
  contadorHoras = this.d.getHours();
  mostrarhora: string = "";




  ngOnInit(): void {
    let diasSemana = this.d.getDay();
    /* el getMonth inicia en 0 por eso se le añade 1 para que coincida con los meses de verdad */
    let mes = this.d.getMonth() + 1;
    let contadorMes = '';
    switch (mes) {
      case 1:
        contadorMes = 'ENERO';
        break;
      case 2:
        contadorMes = 'FEBRERO';
        break;
        case 3:
        contadorMes = 'MARZO';
        break;
        case 4:
        contadorMes = 'ABRIL';
        break;
        case 5:
        contadorMes = 'MAYO';
        break;
        case 6:
        contadorMes = 'JUNIO';
        break;
        case 7:
        contadorMes = 'JULIO';
        break;
        case 8:
        contadorMes = 'AGOSTO';
        break;
        case 9:
        contadorMes = 'SEPTIEMBRE';
        break;
        case 10:
        contadorMes = 'OCTUBRE';
        break;
        case 11:
        contadorMes = 'NOVIEMBRE';
        break;
        case 12:
        contadorMes = 'DICIEMBRE';
        break;
    }

    /* switch para los dias de la semana */
    let ContadorDia = '';
    switch (diasSemana) {
      case 1:
        ContadorDia = 'LUNES'
        break;
      case 2:
        ContadorDia = 'MARTES'
        break;
      case 3:
        ContadorDia = 'MIERCOLES'
        break;
      case 4:
        ContadorDia = 'JUEVES'
        break;
      case 5:
        ContadorDia = 'VIERNES'
        break;
      case 6:
        ContadorDia = 'SABADO'
        break;
      case 7:
        ContadorDia = 'DOMINGO'
        break;

    }


    this.fecharreglada = ContadorDia + ', ' + this.d.getDate() + " DE " + contadorMes + " DEL AÑO " + this.d.getFullYear();




    const obs$ = interval(1000)
    obs$.subscribe(() => this.mostrar());

  }

  mostrar() {

    let AmPM = '';
    if (this.contadorHoras > 12) {
      AmPM = 'PM'
    }
    else {
      AmPM = 'AM';
    }

  
    if (this.contadorSegundos == 59) {
      this.contadorSegundos = 0;
      this.contadorMinutos++;
      this.mostrarhora = this.contadorHoras + ':' + this.contadorMinutos + ':' + this.contadorSegundos + ' ' + AmPM;
      console.log(this.contadorSegundos);
    }

    else if (this.contadorMinutos == 59) {
      this.contadorMinutos = 0;
      this.contadorHoras++;
      this.mostrarhora = this.contadorHoras + ':' + this.contadorMinutos + ':' + this.contadorSegundos + ' ' + AmPM;
    }

    else {

      this.mostrarhora = this.contadorHoras + ':' + this.contadorMinutos + ':' + this.contadorSegundos + ' ' + AmPM;
      console.log(this.contadorSegundos);
      this.contadorSegundos++;
    }

    


  }


siguienteDiv(){


  if (this.mostrardiv1) {
    this.mostrardiv1=false;
  this.mostrardiv2=true;
  this.mostrardiv3=false;
  }else if (this.mostrardiv2) {
        this.mostrardiv1=false;
    this.mostrardiv2=false;
    this.mostrardiv3=true;
  }else if (this.mostrardiv3) {
    this.mostrardiv1=true;
    this.mostrardiv2=false;
    this.mostrardiv3=false;
  }

}

anteriorDiv(){


  if (this.mostrardiv1) {
    this.mostrardiv1=false;
  this.mostrardiv2=false;
  this.mostrardiv3=true;
  }else if (this.mostrardiv2) {
        this.mostrardiv1=true;
    this.mostrardiv2=false;
    this.mostrardiv3=false;
  }else if (this.mostrardiv3) {
    this.mostrardiv1=false;
    this.mostrardiv2=true;
    this.mostrardiv3=false;
  }

}




}





