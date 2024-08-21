import { Component } from '@angular/core';
import { CardComponent } from '@shared/card/card.component';

const MODULES = [CardComponent];

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [...MODULES],
  template: `
    <section class="content__list-cards">
      <div class="hover__bg">
        
        <div class="content__list">
          <app-card />
          <app-card />
          <app-card />
          <app-card />
        </div>

      </div>
    </section>
  `,
  styleUrl: `./list-cards.component.css`,
})
export class ListCardsComponent { }
