import { Component, ViewChild } from '@angular/core';
import { FilterPanelComponent } from "./components/filter-panel/filter-panel.component";
import { ListCardsComponent } from "./components/list-cards/list-cards.component";
import { DetailsCardComponent } from '../shared/details-card/details-card.component';
import { FilterSearchDto } from '@app/core/models/dto/filter.search.dto.model';
import { CardsGalleryListComponent } from './components/cards-gallery/cards-gallery-list.component';
import { AuthApiCardService } from '@app/core/services/card/auth.card.service';
import { SnackbarService } from '@app/core/services/snackbar/snackbar.service';
import { ScrollService } from '@app/core/services/scroll/scroll.service';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";


const MODULES = [FilterPanelComponent, CardsGalleryListComponent];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...MODULES, ListCardsComponent, DetailsCardComponent, HeaderComponent, FooterComponent],
  templateUrl: `./main.component.html`,
  styleUrl: `./main.component.css`,
})
export class MainComponent {
  previosCards: any[] = [];
  listSearch: FilterSearchDto = new FilterSearchDto();
  showList = false;
  flagSearch = false;
  selectedCardId?:any;

  constructor(
    private _service: AuthApiCardService,
    private _notiService: SnackbarService,
    private _scrollService: ScrollService
  ) {}

  /**
   * @description
   * Metodo que se encarga de recibir la busqueda del usuario y enviarla al servicio.
   * - Si la busqueda es vacia, se muestra un mensaje de error.
   * - Si la busqueda es correcta, pasa al servicio para realizar la busqueda.
   * @param {FilterSearchDto} searchCard - Objeto con los parametros de busqueda.
   * @returns {void} - No retorna nada.
   */
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

  /**
   * @description
   * Metodo que recibe la informacion de las tarjetas y las muestra en pantalla.
   * - Si la respuesta es correcta, se muestra la lista de tarjetas.
   * @param {any} card - Objeto con la informacion de las tarjetas.
   * @returns {void} - No retorna nada.
   */
  showCardDetails(card: any) {
    this.selectedCardId = card;
    this.showList = true;
  }

  /**
   * @description
   * Metodo que se encarga de ocultar la informacion de la carta y volver a la busqueda.
   * - posiciona el scroll en la posicion anterior.
   * @returns {void} - No retorna nada.
   */
  goBack() {
    this.showList = false;
    const position = this._scrollService.getScroll();
    window.scrollTo(0, position);
  }

  /**
   * @description
   * Metodo que se encarga de verificar si la busqueda es vacia.
   * - Recorre el objeto y verifica si todos los valores son nulos o vacios.
   * @param {FilterSearchDto} obj - Objeto con los parametros de busqueda.
   * @returns {boolean} - Retorna un booleano.
   */
  private _isEmtpySearch( obj: FilterSearchDto): boolean {
    return Object.values(obj).every((value) => value === null || value === '');
  }

}
