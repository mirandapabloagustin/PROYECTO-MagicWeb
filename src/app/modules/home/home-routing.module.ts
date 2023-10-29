import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { CargaClienteComponent } from './carga-cliente/carga-cliente.component';

const routes: Routes = [
  {
    path:"pagina-principal",
    component: PaginaPrincipalComponent
  },
  {
    path:"carga-cliente",
    component: CargaClienteComponent
  },
  {
    path:"",
    redirectTo: "pagina-principal",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
