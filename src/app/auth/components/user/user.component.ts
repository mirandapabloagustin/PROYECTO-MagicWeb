import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { User } from '@app/core/models/user.model';
import { DeckComponent } from './components/deck/deck.component';
import { HeaderComponent } from '@shared/header/header.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { LocalStorageService } from '@app/core/services/user/local-storage.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ProfileComponent, HeaderComponent, FooterComponent],
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
