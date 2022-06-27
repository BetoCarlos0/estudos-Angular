import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-prod',
  templateUrl: './card-prod.component.html',
  styleUrls: ['./card-prod.component.css']
})
export class CardProdComponent implements OnInit {
  @Input() foto!: string;
  @Input() produto!: string;
  @Input() promocao!: boolean;
  @Input() idProduto!: number;
  @Input() data!: string;
  @Input() valor!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
