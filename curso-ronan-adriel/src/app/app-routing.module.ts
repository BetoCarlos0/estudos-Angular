import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/product/create/create.component';
import { ListComponent } from './components/product/list/list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'produtos', component: ListComponent},
  {path: 'produtos/cadastrar', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
