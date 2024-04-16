import { Component } from '@angular/core';

@Component({
  selector: 'app-modes',
  templateUrl: './modes.component.html',
  styleUrls: ['./modes.component.css']
})
export class ModesComponent {
  modes = [
    {
      image: '../../../../assets/landing/modes/articles-img/mtg-arena.jpg',
      description: 'MTG Arena es un juego digital de cartas coleccionables disponible para dispositivos móviles y PC tanto para principiantes como para veteranos de Magic. Colecciona, crea y domina mazos únicos que se convertirán en leyenda. Gana recompensas y enfréntate a amigos o a otros jugadores. Juega gratis y siente la magia del juego de cartas coleccionables de fantasía original.',
      titleLink: 'Probar Ahora',
      link: 'https://magic.wizards.com/es/mtgarena'
    },
    {
      image: '../../../../assets/landing/modes/articles-img/mtg-online.jpg',
      description: 'MTG Arena es un juego digital de cartas coleccionables disponible para dispositivos móviles y PC tanto para principiantes como para veteranos de Magic. Colecciona, crea y domina mazos únicos que se convertirán en leyenda. Gana recompensas y enfréntate a amigos o a otros jugadores. Juega gratis y siente la magia del juego de cartas coleccionables de fantasía original.',
      titleLink: 'Probar Ahora',
      link: 'https://magic.wizards.com/es/mtgarena'

    }    
  ];

}
