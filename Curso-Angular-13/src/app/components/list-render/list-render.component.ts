import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {name: 'turca', type: 'dog', age: 4},
    {name:'tom', type: 'cat', age: 10},
    {name:'frida', type: 'dog', age: 14},
    {name:'bob', type: 'horse', age: 35}
  ];
  showAnimalAge!: string;

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
  }
  showAge(animal: Animal): void{
    //this.showAnimalAge = `O animal ${animal.name} tem ${animal.age}`;
    this.showAnimalAge = 'O animal ' +animal.name+ ' tem ' + animal.age + 'anos';
  }

  removeAnimal(animal: Animal){
    this.animals = this.animalService.remove(this.animals, animal);
  }
}
