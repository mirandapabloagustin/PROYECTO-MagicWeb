import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { User } from '@app/core/models/user.model';
import { HeaderComponent } from '@shared/header/header.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { LocalStorageService } from '@app/core/services/user/local-storage.service';
import { FavoriteCardsComponent } from './components/favorite-cards/favorite-cards.component';
import { ScrollService } from '@app/core/services/scroll/scroll.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ProfileComponent, HeaderComponent, FooterComponent, FavoriteCardsComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  user: User = User.emptyUser();
  showFavCardsComponent: boolean = false;

  constructor(
    private _localStorageService: LocalStorageService,
    private _scrollService: ScrollService
  ) { }

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



  showFavoriteCards(event: any): void {
    if(!this.showFavCardsComponent){
      this.showFavCardsComponent = event;
      this._scrollService.scrollToComponent('favorite-cards_content');
    }else{
      this.showFavCardsComponent = false;
    }
  }



}
