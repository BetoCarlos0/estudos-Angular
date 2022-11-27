import { Component } from '@angular/core';

@Component({
  selector: 'app-atributo',
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.css']
})
export class AtributoComponent {
  estilo: string = 'enable';
  corFundo: string = 'gray';
  corFonte: string = 'blue';
  item: string = '';

  trocar(){
    if (this.estilo === 'enable') {
      this.estilo = 'disable'
    }else{
      this.estilo = 'enable'
    }
  }
}
