import { Component } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent {

  nombreApp='By NICOLAS ROMERO';

  nombrarhtml(){
      this.nombreApp='HTML 5';    
  }
  nombrarCss(){
    this.nombreApp='CSS 3';    
}
nombrarAngular(){
  this.nombreApp='ANGULAR';    
}
nombrarTypeScript(){
  this.nombreApp='TYPESCRIPT';    
}
nombrarJavaScript(){
  this.nombreApp='JAVASCRIPT';    
}

  mostrarnombre(){
    this.nombreApp='By NICOLAS ROMERO';
  }
}
