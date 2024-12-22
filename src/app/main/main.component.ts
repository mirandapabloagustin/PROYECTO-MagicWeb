import { Component, ViewChild } from '@angular/core';
import { FilterPanelComponent } from "./components/filter-panel/filter-panel.component";
import { ListCardsComponent } from "./components/list-cards/list-cards.component";
import { DetailsCardComponent } from '../shared/details-card/details-card.component';
import { FilterSearchDto } from '@app/core/models/dto/filter.search.dto.model';
import { CardsGalleryListComponent } from './components/cards-gallery/cards-gallery-list.component';
import { AuthApiCardService } from '@app/core/services/card/auth.card.service';
import { SnackbarService } from '@app/core/services/snackbar/snackbar.service';

const MODULES = [FilterPanelComponent, CardsGalleryListComponent];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...MODULES, ListCardsComponent, DetailsCardComponent],
  templateUrl: `./main.component.html`,
  styleUrl: `./main.component.css`,
})
export class MainComponent {
  @ViewChild(ListCardsComponent) listCardsComponent!: ListCardsComponent;
  previosCards: any[] = [];
  listSearch: FilterSearchDto = new FilterSearchDto();



  showList = false;
  flagSearch = false;
  selectedCardId?:any;

  constructor(
    private _service: AuthApiCardService,
    private _notiService: SnackbarService,
  ) {}

  handleUserSearch(searchCard: FilterSearchDto) {
    this.flagSearch = false;
    if (!this._isEmtpySearch(searchCard)) {
      this.flagSearch = true;
      this._service.searchCards(searchCard);
    }else{
      this.flagSearch = false;
      this._notiService.emitSnackbar('Encontramos problemas en tu busqueda, verifique los campos.', 'warning','Volvamos al principio');
    }
  }



  showCardDetails(card: any) {
    this.selectedCardId = card;
    this.showList = true;
  }

  goBack() {
  }

  private _isEmtpySearch( obj: FilterSearchDto): boolean {
    return Object.values(obj).every((value) => value === null || value === '');
  }

}
