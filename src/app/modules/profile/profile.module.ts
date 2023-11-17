import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DeckShowComponent } from './deck-show/deck-show.component';
import { FormsModule } from '@angular/forms';
import { PhotoUserComponent } from './photo-user/photo-user.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    DeckShowComponent,
    PhotoUserComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ProfileModule { }
