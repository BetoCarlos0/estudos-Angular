import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  produtos: string[] = ['carro', 'moto', 'bike', 'barco']
  active: boolean = true;
  valor: string = 'teste';
  haveProduto: boolean = true;

  adicionar(valor: string){
    this.produtos.push(this.valor)
  }
  remover(index: number){
    this.produtos.splice(index, 1)
  }

  haveProdutos(): boolean{
    return this.produtos.length == 0 ? false : true; 
  }
}
