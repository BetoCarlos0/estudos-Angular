import { Component } from '@angular/core';
import { Posts } from 'src/app/model/posts';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  post: Posts = new Posts(`./../../../assets/images/img1.PNG`, `post de numero 1 UI design e suas habilidades`, `um subtitulo descrevendo mais sobre este post mais detalhado de habilidades e muito mais e bla bla bla bla bla`, `11/01/2010`);

}
