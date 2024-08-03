import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  template: `
    <section>
      <article>
        <img
          src="magic/how-play.webp"
          alt="How play game"
          class="imagen-how-play"
        />

        <div class="content-text">
          <h2>¿Como arrancar a jugar?</h2>
          <p>
          En Magic: the Gathering la estrategia y el ingenio son pilares fundamentales en este juego. Construye tus mazos de manera equilibrada, ya que los diferentes tipos de cartas podran maximizar tus posibilidades de victoria. El maná es el ,recurso principal del juego, permitira jugar tus cartas, por lo cual gestionar y optimizar tu suministri de mana es esencial para el exito.
          </p>


          <span>
            Si sos nuevo y quieres aprender más, puedes acceder a la siguiente
            guía.
          </span>

          <div class="redirect-link">
            <a href="https://magic.wizards.com/es/how-to-play"
              >APRENDER A JUGAR</a>
          </div>
        </div>

      </article>
    </section>
  `,
  styleUrl: './game.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class GameComponent {}
