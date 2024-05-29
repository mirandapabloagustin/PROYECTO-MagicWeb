import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from 'src/app/shared/shared.module'; // Verifica la ruta de importación

@NgModule({
  declarations: [
    // Aquí deberías tener las declaraciones específicas del módulo Landing si las hay
  ],
  imports: [
    CommonModule,
    SharedModule, // Asegúrate de importar correctamente el SharedModule aquí
    LandingRoutingModule,
  ]
})
export class LandingModule { }