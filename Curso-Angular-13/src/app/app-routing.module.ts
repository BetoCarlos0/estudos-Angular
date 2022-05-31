import { EmitterVisitorContext } from "@angular/compiler";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { GetCepComponent } from "./components/get-cep/get-cep.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";

import { PrimeiroComponenteComponent } from "./components/primeiro-componente/primeiro-componente.component";

const routes: Routes = [
    {path: '', component: PrimeiroComponenteComponent},
    {path: 'list', component: ListRenderComponent},
    {path: 'change-number', component: EmitterComponent},
    {path: 'cep/:id', component: GetCepComponent},
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}