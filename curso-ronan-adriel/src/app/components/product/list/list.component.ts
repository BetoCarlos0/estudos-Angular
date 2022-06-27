import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listObject = [
    {id: 100, nome: 'Curso de angular', validade: '31/02/2021', valor: 35.52},
    {id: 101, nome: 'Curso de react', validade: '25/11/2020', valor: 24.99}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
