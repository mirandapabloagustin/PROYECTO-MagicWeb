import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { User } from '@app/core/models/user.model';
import { DeckComponent } from './deck/deck.component';
import { HeaderComponent } from '@shared/header/header.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { AuthUserService } from '@app/core/services/user/auth-user.service';
import { LocalStorageService } from '@app/core/services/user/local-storage.service';
import { SnackbarService } from '@app/core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ProfileComponent, DeckComponent, HeaderComponent, FooterComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  user: User = User.emptyUser();

  constructor(
    private _localStorageService: LocalStorageService,
  ) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    const userLogged = this._localStorageService.getItemStorage();
    const flagLogger = this._localStorageService.checkUserLogin('user');
    if (flagLogger) {
      this.user = JSON.parse(userLogged) as User;
    }
  }



}
