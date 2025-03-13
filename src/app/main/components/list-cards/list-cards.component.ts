import { Component, Output, EventEmitter, OnInit, HostListener, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CardComponent } from '@shared/card/card.component';
import { AuthApiCardService } from '@services/card/auth.card.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const MODULES = [CardComponent, MatProgressSpinnerModule, FontAwesomeModule];

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [...MODULES],
  templateUrl: `./list-cards.component.html`,
  styleUrls: [`./list-cards.component.css`],
})
export class ListCardsComponent implements OnInit{
  isVisible = false;
  hiddenBtnNext:boolean = false;
  hiddenBtnPrev: boolean = false;
  icon = faArrowUp;

  listCards: any[] = [];

  @Output() cardSelected = new EventEmitter<any>();

  constructor(
    private _service: AuthApiCardService
  ) { }

  ngOnInit() {
    this.firstLoad();
  }

/**
 * @description
 * Metodo que se encarga de recibir los datos de las tarjetas y mostrarlas en pantalla.
 * - Se suscribe a los datos del servicio para mostrar las tarjetas.
 * - Se suscribe a los datos del servicio para mostrar el boton de siguiente pagina.
 * - Se suscribe a los datos del servicio para mostrar el boton de pagina anterior.
 * @returns {void} - No retorna nada.
 */
  firstLoad() {
    this._service.iterator$.subscribe((data) => {
      this.listCards = data}
    );
    this._service.nextPageStatus$.subscribe((data) => {
      this.hiddenBtnNext = data;
    });
    this._service.prevPageStatus$.subscribe((data) => {
      this.hiddenBtnPrev = data;
    });
  }

/**
 * @description
 * Metodo que se encarga de cargar la siguiente pagina de tarjetas.
 * @returns {void} - No retorna nada.
 */
  nextPage() {
    this._service.next();
  }

  /**
   * @description
   * Metodo que se encarga de cargar la pagina anterior de tarjetas.
   * @returns {void} - No retorna nada.
   */
  prevPage() {
    this._service.prev();
  }

  /**
   * @description
   * Metodo que se encarga de enviar la informacion de la carta seleccionada.
   * @param {any} cardData - Objeto con la informacion de la carta seleccionada.
   * @returns {void} - No retorna nada.
   */
  handleCardId(cardData: any) {
    this.cardSelected.emit(cardData);
  }

  /**
   * @description
   * Se llama al decorador HostListener para obtener la posicion del scroll.
   * - Se le asigan al metodo onWindowScroll que hace visible el boton de scroll to top.
   * @returns {void} - No retorna nada.
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 300;
  }

  /**
   * @description
   * Metodo que se encarga de posicionar el scroll en la parte superior de la pagina.
   * @returns {void} - No retorna nada.
   */
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }




}
