import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProdComponent } from './components/card-prod/card-prod.component';



@NgModule({
  declarations: [
    CardProdComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CardProdComponent]
})
export class SharedModule { }
