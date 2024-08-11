import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modes',
  standalone: true,
  imports: [],
  template: `
    <section>
      <div class="tittle">
        <h2>Modos de juego</h2>
        <span
          >Descubre las diferentes formas en que puedes disfrutar este
          juego</span
        >
      </div>

      <ul>
        @for (item of items; track $index) {
        <li>
          <article>
            <header>
              <img [src]="item.image" [alt]="item.title" />
            </header>
            <div class="text">
              <h2>{{item.title}}</h2>
              <span class="desc-text">{{item.description}}</span>
            </div>
            <footer>
              <a class="button-style" [href]="item.link">{{item.textLink}}</a>
            </footer>
          </article>
        </li>
        }
      </ul>
    </section>
  `,
  styleUrl: './modes.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ModesComponent {
  items = [
    {
      image: 'magic/mtg-arena.webp',
      title: 'mtg: arena',
      description:
        'Elabora tu estrategia. Pasa a la acción. MTG Arena llega el legendario juego estratégico de cartas a tu PC, Mac, Android e iOS.',
      textLink: 'APRENDER A JUGAR',
      link: 'https://magic.wizards.com/es/mtgarena',
    },
    {
      image: 'magic/mtg-championship.webp',
      title: 'mtg: championship',
      description:
        'Codeate con los mejores. MTG Online es la plataforma que lleva el juego competitivo fisico al Online. Compite!, Tradea! y Gana!.',
      textLink: 'DESAFIALOS AHORA',
      link: 'https://magic.gg/',
    },
    {
      image: 'magic/mtg-fisico.webp',
      title: 'mtg: fisico',
      description:
        'Coleccioná, intercambia y jugá con tus cartas favoritas. Descubre en la tienda oficial los productos más recientes. Elige tu mazo y juega!.',
      textLink: 'EXPLORA LA TIENDA',
      link: 'https://magic.wizards.com/es/products',
    },
    {
      image: 'magic/mtg-online.webp',
      title: 'mtg: online',
      description:
        'Sé el mejor. Conviértete en el campeón de MTG. Participa en los torneos más importantes del mundo.',
      textLink: 'MAS INFORMACION',
      link: 'https://www.mtgo.com/en/mtgo',
    },
  ];
}
