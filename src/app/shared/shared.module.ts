import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Error404Component } from './error404/error404.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarrouselComponent } from './carrousel/carrousel.component';



@NgModule({
  declarations: [
    FooterComponent,
    Error404Component,
    CarrouselComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FooterComponent,
    Error404Component,
    CarrouselComponent
  ]
})
export class SharedModule { }
