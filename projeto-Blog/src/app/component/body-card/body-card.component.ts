import { Component } from '@angular/core';
import { Posts } from 'src/app/model/posts';

@Component({
  selector: 'app-body-card',
  templateUrl: './body-card.component.html',
  styleUrls: ['./body-card.component.css']
})
export class BodyCardComponent {
  constructor(){
    this.load();
  }
  posts: Posts[] = []

  load() {
    for (let i = 5; i <= 8; i++) {
      this.posts.push(new Posts(`./../../../assets/images/img${i}.PNG`,`post de numero ${i} UI design e suas habilidades`, `um subtitulo descrevendo mais sobre este post mais detalhado de habilidades e muito mais e bla bla bla bla bla`, `1${i}/0${i}/201${i}`))
    }
  }
}
