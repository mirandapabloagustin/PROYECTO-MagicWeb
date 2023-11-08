import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AterrizajeRoutingModule } from './aterrizaje-routing.module';
import { PaginaAterrizajeComponent } from './pagina-aterrizaje/pagina-aterrizaje.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    PaginaAterrizajeComponent
  ],
  imports: [
    CommonModule,
    AterrizajeRoutingModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class AterrizajeModule { }
