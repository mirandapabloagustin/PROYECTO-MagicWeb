import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { AboutMagicRoutingModule } from './about-magic-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MagicInfoComponent } from './magic-info/magic-info.component';
import { ModesComponent } from './modes/modes.component';
import { CardModeComponent } from "./modes/card-mode/card-mode.component";
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { AboutMagicComponent } from './about-magic.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';


@NgModule({
    declarations: [
        SignupComponent,
        MagicInfoComponent,
        AboutMagicComponent,
        ModesComponent,
        HowToPlayComponent
    ],
    imports: [
        CommonModule,
        AboutMagicRoutingModule,
        MatButtonModule,
        CardModeComponent,
        HeaderComponent,
        SharedModule
    ]
})
export class AboutMagicModule { }
