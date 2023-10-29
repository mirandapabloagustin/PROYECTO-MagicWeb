import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { CargaClienteComponent } from './carga-cliente/carga-cliente.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';

const routes: Routes = [
  {
    path:"pagina-principal",
    component: PaginaPrincipalComponent
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
