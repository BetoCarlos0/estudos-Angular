import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './component/menu-title/menu-title.component';
import { BigCardComponent } from './component/big-card/big-card.component';
import { SmallCardComponent } from './component/small-card/small-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent
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
