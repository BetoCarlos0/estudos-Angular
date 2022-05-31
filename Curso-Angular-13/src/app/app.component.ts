import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = "beto";
  
  userData = {
    name: 'beto',
    age: 35,
  };

  title = 'Curso-Angular-13';
}
