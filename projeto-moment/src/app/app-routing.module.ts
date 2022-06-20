import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AddMomentComponent } from './pages/add-moment/add-moment.component';
import { EditMomentComponent } from './pages/edit-moment/edit-moment.component';
import { HomeComponent } from './pages/home/home.component';
import { MomentComponent } from './pages/moment/moment.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'moments/add', component: AddMomentComponent},
  {path: 'moments/:id', component: MomentComponent},
  {path: 'moments/edit/:id', component: EditMomentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
