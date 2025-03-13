import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { Card } from '@app/core/models/card.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AuthApiCardService } from '@app/core/services/card/auth.card.service';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FlipCardComponent } from '../../../shared/flip-card/flip-card.component';
import { isPlatformBrowser } from '@angular/common';
import { register, SwiperContainer } from 'swiper/element/bundle';
register();



@Component({
  selector: 'app-cards-gallery-list',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [FlipCardComponent, MatProgressSpinnerModule],
  templateUrl: './cards-gallery-list.component.html',
  styleUrls: ['./cards-gallery-list.component.css'],
})
export class CardsGalleryListComponent implements OnInit {
  @Output() cardSelected = new EventEmitter<Card>();
  cards: Card[] = [];
  private _swpElement = signal<SwiperContainer | null>(null);
  flip: boolean = false;
  loaded = false;


  icons = {
    faChevronLeft,
    faChevronRight,
  };
  constructor(
    private _service: AuthApiCardService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  /**
   * @description
   * Metodo que se encarga de cargar las cartas al iniciar el componente.
   * - Si no hay cartas, se cargan nuevas cartas aleatorias.
   * - Si hay cartas, se cargan las cartas guardadas.
   * @returns {void} - No retorna nada.
   */
  async ngOnInit(): Promise<void> {

    this.cards = this._service.getCards();

    if(this.cards.length === 0){
      this.anotherRandom();
    }else{
      this._service.updateCards(this.cards);
      this.loaded = true;
    }
      
      if (isPlatformBrowser(this.platformId)) {
        const swiperEl = document.querySelector('swiper-container');
        
        if (swiperEl) {
          const swiperParams = {
            slidesPerView: 1,
            loop : true,
            breakpoints: {
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              }
            },
            effect: 'coverflow',
            coverflowEffect: {
              rotate: 10,
              stretch: 0,
              depth: 100,
              modifier: 1.5,
              slideShadows: false
            }, 
          };
          Object.assign(swiperEl, swiperParams);
          
          this._swpElement.set(swiperEl);
          this._swpElement()?.initialize();
        }
      }
}

  /**
   * @description
   * Metodo que se encarga de enviar la informacion de la carta seleccionada al componente padre.
   * - Emite la informacion de la carta seleccionada.
   * @param {any} card - Objeto con la informacion de la carta seleccionada.
   * @returns {void} - No retorna nada.
   */
  cardClick( card: any){
    this.cardSelected.emit(card);
  }


  /**
   * @description
   * Metodo que se encarga de cargar nuevas cartas aleatorias.
   * - Llama al servicio para obtener una nueva carta aleatoria.
   * - Actualiza la lista de cartas.
   * @returns {void} - No retorna nada.
   */
  private async anotherRandom(): Promise<void> {
    this.cards = [];
    try {
      const res = await this._service.getCardsRandoms();
      this.loaded = true;
      this.cards = res;
      this._service.updateCards(this.cards);

    } catch (error) {
      console.log(error);
    }
  }


  /**
   * @description
   * Metodo que se encarga de cambiar de cambiar las cartas mostradas.
   * - Llama al servicio para obtener nuevas cartas aleatorias.
   * @returns {void} - No retorna nada.
   */
  sendFlag(){
    this.changeFlag();
    this.anotherRandom();
    this._service.updateCards(this.cards);
  }

  /**
   * @description
   * Metodo que se encarga de cambiar el estado de la bandera.
   * - Cambia el estado de la bandera.
   * @returns {void} - No retorna nada.
   */
  changeFlag(){
    this.flip = !this.flip;
  }

}
