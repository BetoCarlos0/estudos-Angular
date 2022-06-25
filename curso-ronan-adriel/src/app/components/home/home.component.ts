import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'bem vindo ao curso de angular';

  idProduto: number = 123;
  produto = 'caixa';
  valor = 25.616;
  promocao = true;
  data = Date.now();

  foto = 'assets/img/paper-rocket.png';
  constructor() { }

  ngOnInit(): void {
  }

}
