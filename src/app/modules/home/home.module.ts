import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { CargaClienteComponent } from './carga-cliente/carga-cliente.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    CargaClienteComponent,
    ListarClientesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
