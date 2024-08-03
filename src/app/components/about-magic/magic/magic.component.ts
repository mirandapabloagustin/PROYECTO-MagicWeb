import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-magic',
  standalone: true,
  imports: [],
  template: `
    <section>
      <article>
        <div class="content-text">
          <h2>¿Que es Magic?</h2>
          <p>
            Este famoso juego de cartas coleccionables nació en 1993, diseñado
            por <span> Richard Garfield </span> y lanzado
            <span> Wizards of the Coast.</span> Desde su lanzamiento, <span>Magic: The Gathering</span> irrumpió en el mercado de los juegos de mesa, transformando por completo el panorama de la industria. No solo introdujo un nuevo estilo de juego, sino que también permitió que Wizards of the Coast se posicionara como una pionera en el ámbito de los juegos de cartas coleccionables. La combinación de estrategia, fantasía y la emoción de coleccionar cartas únicas atrajo a una amplia gama de jugadores, sentando las bases para un género completamente nuevo.
          </p>
        </div>
        <img src="magic/magic.webp" alt="Magic game" class="imagen-magic"/>
      </article>
    </section>
  `,
  styleUrl: './magic.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class MagicComponent {}
