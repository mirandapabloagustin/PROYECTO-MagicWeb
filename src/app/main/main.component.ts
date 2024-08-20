import { Component } from '@angular/core';
import { FilterPanelComponent } from "./components/filter-panel/filter-panel.component";
import { ListCardsComponent } from "./components/list-cards/list-cards.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FilterPanelComponent, ListCardsComponent],
  template: `
    <main>
      <app-filter-panel (searchUserEvent)="handleUserSearch($event)"/>
      <app-list-cards></app-list-cards>
    </main>
  `,
  styles: `
  `
})
export class MainComponent {
  handleUserSearch(searchCard: string) {
    console.log(searchCard);
  }

}
