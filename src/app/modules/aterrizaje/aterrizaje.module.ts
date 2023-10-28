import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AterrizajeRoutingModule } from './aterrizaje-routing.module';
import { PaginaAterrizajeComponent } from './pagina-aterrizaje/pagina-aterrizaje.component';


@NgModule({
  declarations: [
    PaginaAterrizajeComponent
  ],
  imports: [
    CommonModule,
    AterrizajeRoutingModule
  ]
})
export class AterrizajeModule { }
