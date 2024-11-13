import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  signal,
} from '@angular/core';
import { Card } from '@app/core/models/card.model';
import { AuthApiCardService } from '@app/core/services/card/auth.card.service';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FlipCardComponent } from '../../../shared/flip-card/flip-card.component';
import { register, SwiperContainer } from 'swiper/element/bundle';
register();



@Component({
  selector: 'app-cards-gallery-list',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [FlipCardComponent],
  templateUrl: './cards-gallery-list.component.html',
  styleUrls: ['./cards-gallery-list.component.css'],
})
export class CardsGalleryListComponent implements OnInit {
  cards: Card[] = [];
  private _swpElement = signal<SwiperContainer | null>(null);
  flip: boolean = false;
  loaded = false;


  icons = {
    faChevronLeft,
    faChevronRight,
  };
  constructor(private _service: AuthApiCardService) {}

  async ngOnInit(): Promise<void> {
    try {
      await this._service.getCardsRandoms();
      this._service.cards$.subscribe((cards) => {
        this.cards.push(...cards);
      });
      this.loaded = false;
    } catch (error) {
      console.log(error);
    }
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



  private async anotherRandom(): Promise<void> {
    this.cards = [];
    try {
      await this._service.getCardsRandoms();
      this._service.cards$.subscribe((cards) => {
        this.cards.push(...cards);
      });
    } catch (error) {
      console.log(error);
    }
  }

  sendFlag(){
    this.flip = !this.flip;
    this.anotherRandom();
  }

}
