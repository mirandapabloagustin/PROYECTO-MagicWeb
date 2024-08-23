import { Component } from '@angular/core';
import { FilterPanelComponent } from "./components/filter-panel/filter-panel.component";
import { ListCardsComponent } from "./components/list-cards/list-cards.component";
import { DetailsCardComponent } from './components/details-card/details-card.component';

const MODULES = [FilterPanelComponent,ListCardsComponent,DetailsCardComponent]

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...MODULES],
  template: `
    <main>
      <app-filter-panel (searchUserEvent)="handleUserSearch($event)"/>
      @if(showList){
        <app-list-cards (cardSelected)="showCardDetails($event)"></app-list-cards>
      }@else{
        <app-details-card [cardId]="selectedCardId"/>
      }
    </main>
  `,
  styles: `
  `
})
export class MainComponent {
  showList = true;
  selectedCardId?:string;
  
  handleUserSearch(searchCard: string) {
    console.log(searchCard);
  }

  showCardDetails(cardId: string) {
    this.selectedCardId = cardId;
    this.showList = false;
  }

}
