import { Component, } from '@angular/core';
import { CardMode } from './model/cardsModel'

@Component({
  selector: 'app-modes',
  templateUrl: './modes.component.html',
  styleUrls: ['./modes.component.css']
})
export class ModesComponent {

  modes: CardMode[] = [
    {
      image: '../../../../assets/landing/modes/articles-img/mtg-arena.jpg',
      description: 'Elabora tu estrategia. Pasa a la acción. MTG Arena llega el legendario juego estratégico de cartas a tu PC, Mac, Android e iOS.',
      titleLink: 'Prueba gratis >',
      link: 'https://magic.wizards.com/es/mtgarena'
    },
    {
      image: '../../../../assets/landing/modes/articles-img/mtg-online.jpg',
      description: 'Codeate con los mejores. MTG Online es la plataforma que lleva el juego competitivo fisico al Online. Compite!, Tradea! y Gana!.',
      titleLink: 'Desafialos Ahora >',
      link: 'https://www.mtgo.com/en/mtgo'

    },
    {
      image: '../../../../assets/landing/modes/articles-img/mtg-fisico.jpg',
      description: 'Coleccioná, intercambia y jugá con tus cartas favoritas. Descubre en la tienda oficial los productos más recientes. Elige tu mazo y juega!.',
      titleLink: 'Explora la tienda >',
      link: 'https://magic.wizards.com/es/products'

    },
    {
      image: '../../../../assets/landing/modes/articles-img/mtg-championship.jpg',
      description: 'Sé el mejor. Conviértete en el campeón de MTG. Participa en los torneos más importantes del mundo.',
      titleLink: 'Más informacion >',
      link: 'https://magic.gg/'
    }

  ];

}
