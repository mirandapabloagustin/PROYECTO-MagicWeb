import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AterrizajeRoutingModule } from './aterrizaje-routing.module';
import { PaginaAterrizajeComponent } from './pagina-aterrizaje/pagina-aterrizaje.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from 'src/app/shared/header/header.component';


@NgModule({
  declarations: [
    PaginaAterrizajeComponent
  ],
  imports: [
    CommonModule,
    AterrizajeRoutingModule,
    SharedModule,
    FontAwesomeModule,
    HeaderComponent
  ]
})
export class AterrizajeModule { }
