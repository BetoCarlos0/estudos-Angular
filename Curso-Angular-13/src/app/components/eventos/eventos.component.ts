import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  show = false;
  constructor() { }

  ngOnInit(): void {
  }

  message(): void{
    this.show = !this.show;
  }

}
