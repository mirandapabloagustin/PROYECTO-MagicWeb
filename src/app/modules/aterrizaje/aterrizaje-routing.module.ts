import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaAterrizajeComponent } from './pagina-aterrizaje/pagina-aterrizaje.component';

const routes: Routes = [
  {
    path:'pagina-aterrizaje',
    component: PaginaAterrizajeComponent
  },
  {
    path:'',
    redirectTo: 'pagina-aterrizaje',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AterrizajeRoutingModule { }
