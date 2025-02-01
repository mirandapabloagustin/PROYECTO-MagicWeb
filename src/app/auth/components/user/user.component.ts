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

  dataFake : User =
    {
      "id": "1",
      "nick": "Papitas",
      "name": "Miranda Pablo Agustin",
      "email": "mirandapabloagustin@gmail.com",
      "imgUri": "https://cards.scryfall.io/art_crop/front/c/f/cf1d17e4-a201-4511-b4bf-7c672728de4b.jpg?1730249713",
      "password": "1234",
      "description": "Amante de Magic: The Gathering, siempre en busca de nuevos mazos y estrategias. Mi color favorito de maná es [Inserta tu color aquí] y disfruto jugando con [tu tipo de mazo o comandante favorito]. ¡Vamos a jugar y compartir ideas sobre este increíble juego!",
      "country": "AR"
    };

  constructor(
    private _localStorageService: LocalStorageService,
  ) {}

  ngOnInit(): void {
    this.user = this.dataFake;
    //this.loadProfile();
  }

  loadProfile(): void {
    const userLogged = this._localStorageService.getItemStorage();
    const flagLogger = this._localStorageService.checkUserLogin('user');
    if (flagLogger) {
      this.user = JSON.parse(userLogged) as User;
    }
  }



}
