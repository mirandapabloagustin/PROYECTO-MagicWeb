import { Component } from '@angular/core';
import { ProfileComponent } from "./profile/profile.component";
import { User } from '@app/core/models/user.model';
import { DeckComponent } from "./deck/deck.component";
import { HeaderComponent } from "@shared/header/header.component";
import { FooterComponent } from "@shared/footer/footer.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ProfileComponent, DeckComponent, HeaderComponent, FooterComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userValues = {
    id: '1',
    nick: 'PapasConCheddar',
    name: 'Agustin Carrasco',
    email: 'carrasco_a_1997@gmail.com',
    imgUri: 'https://cards.scryfall.io/art_crop/front/5/1/51710b19-68e3-4853-901f-e618bde61161.jpg?1730489512',
    password: '12341234',
    description: '"Amante de Magic: The Gathering, siempre en busca de nuevos mazos y estrategias. Mi color favorito de maná es [Inserta tu color aquí] y disfruto jugando con [tu tipo de mazo o comandante favorito]. ¡Vamos a jugar y compartir ideas sobre este increíble juego!"',
    country: 'Argentina',
  }

  user = new User(this.userValues);

}
