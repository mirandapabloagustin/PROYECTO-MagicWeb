import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  template: `
      <section>
        <div class="title">
          <h2>Integrantes del Grupo</h2>
        </div>

        <ul>
          @for (item of items; track $index) {
            <li>
              <article>
                <header>
                  <img [src]="item.image" [alt]="item.name" />
                </header>
                <h3>{{item.name}}</h3>
                <footer>
                  <span>{{item.position}}</span>
                  <span>Tecnico en Programación de la Universidad Tecnológica Nacional (UTN)</span>
                </footer>
              </article>
            </li>
          }
        </ul>
      </section>
  `
  ,
  styleUrl: './team.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class TeamComponent {

  items = [
    {
      image: 'about-us/prof-flor.webp',
      name: 'Florencia Aguiar',
      position: 'Dev. Frontend',
    },
    {
      image: 'about-us/prof-agus.webp',
      name: 'Agustin Miranda',
      position: 'Dev. Backend',
    },
    {
      image: 'about-us/prof-nico.webp',
      name: 'Nicolas Vercelione',
      position: 'Dev. Frontend',
    }
  ];

  constructor() { }

}
