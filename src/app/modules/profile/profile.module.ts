import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import{CardComponent} from 'src/app/modules/home/card/card.component';
import { DeckShowComponent } from './deck-show/deck-show.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    DeckShowComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
