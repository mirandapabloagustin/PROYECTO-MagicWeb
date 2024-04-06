import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { LandingRoutingModule } from './landing-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MagicInfoComponent } from './magic-info/magic-info.component';


@NgModule({
  declarations: [
    SignupComponent,
    LandingComponent,
    MagicInfoComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    MatButtonModule
  ]
})
export class LandingModule { }
