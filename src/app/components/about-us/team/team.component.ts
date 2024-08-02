import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  template: `
      <section>
        <h2>Integrantes del Grupo</h2>
      </section>
  `
  ,
  styleUrl: './team.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class TeamComponent {

}
