import { Component, Input } from '@angular/core';
import { Posts } from 'src/app/model/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    this.load();
  }
  @Input() allPosts: Posts[] = []

  
  load() {
    for (let i = 1; i <= 8; i++) {
      this.allPosts.push(new Posts(`./../../../assets/images/img${i}.PNG`, `post de numero UI design e suas habilidades ${i}`, `um subtitulo descrevendo mais sobre este post mais detalhado de habilidades e muito mais e bla bla bla bla bla`, `1${i}/$0{i}/201${i}`))
    }
  }
}
