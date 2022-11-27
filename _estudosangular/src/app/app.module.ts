import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './component/title/title.component';
import { CardComponent } from './component/card/card.component';
import { AtributoComponent } from './component/atributo/atributo.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CardComponent,
    AtributoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
