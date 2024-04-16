import { Component } from '@angular/core';

@Component({
  selector: 'app-modes',
  templateUrl: './modes.component.html',
  styleUrls: ['./modes.component.css']
})
export class ModesComponent {
  modes = [
    {
      title: 'MTG Arena',
      description: 'Elabora tu estrategia. Pasa a la acción. MTG Arena lleva el legendario juego estratégico de cartas a tu PC, Mac, Android e iOS.',
      image: 'src/assets/landing/modes/articles-img/mtg-arena.jpg',
      titleLink: 'Descargar',
      link: 'https://magic.wizards.com/es/mtgarena'
    }
      
  ];

}
