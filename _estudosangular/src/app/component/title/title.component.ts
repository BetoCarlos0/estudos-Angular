import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  count: number = 0;
  
  ngOnInit(): void {}

  soma(){
    this.count ++;
  }
  sub(){
    this.count --;
  }
}
