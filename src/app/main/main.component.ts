import { Component } from '@angular/core';
import { FilterPanelComponent } from "./components/filter-panel/filter-panel.component";
import { ListCardsComponent } from "./components/list-cards/list-cards.component";
import { DetailsCardComponent } from '../shared/details-card/details-card.component';
import { FilterSearchDto } from '@app/core/models/dto/filter.search.dto.model';
import { CardsGalleryListComponent } from './components/cards-gallery/cards-gallery-list.component';
import { AuthApiCardService } from '@app/core/services/card/auth.card.service';

const MODULES = [FilterPanelComponent, CardsGalleryListComponent];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...MODULES, ListCardsComponent, DetailsCardComponent],
  templateUrl: `./main.component.html`,
  styleUrl: `./main.component.css`,
})
export class MainComponent {
  previosCards: any[] = [];
  listSearch: any[] = [];


  showList = false;
  flagSearch = false;
  selectedCardId?:any;

  constructor(
    private _service: AuthApiCardService
  ) {}

  async handleUserSearch(searchCard: FilterSearchDto) {
    this.listSearch = await this._service.searchCards(searchCard);
    this.flagSearch = true;

  }

  showCardDetails(card: any) {
    this.selectedCardId = card;
    this.showList = true;
  }

  goBack() {
    this.selectedCardId = null; 
    this.showList = false; 
    this.previosCards = [];
    this.previosCards = this._service.getCards();
    this._service.updateCards(this.previosCards);
  }

}
