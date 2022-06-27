import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  nome!: string;
  validade!: string;
  valor!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
