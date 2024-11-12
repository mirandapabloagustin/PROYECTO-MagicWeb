import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  signal,
} from '@angular/core';
import { Card } from '@app/core/models/card.model';
import { AuthApiCardService } from '@app/core/services/card/auth.card.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FlipCardComponent } from '../../../shared/flip-card/flip-card.component';
import { register, SwiperContainer } from 'swiper/element/bundle';
register();

const MODULES = [FontAwesomeModule];

@Component({
  selector: 'app-cards-gallery-list',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [FlipCardComponent],
  templateUrl: './cards-gallery-list.component.html',
  styleUrls: ['./cards-gallery-list.component.css'],
})
export class CardsGalleryListComponent implements OnInit {
  swpElement = signal<SwiperContainer | null>(null);

  cards: Card[] = [];
  currentCardIndex: number = 0;

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

      this.swpElement.set(swiperEl);
      this.swpElement()?.initialize();
    }
  }

  async loadMoreCards(): Promise<void> {
    try {
      await this._service.getCardsRandoms();
    } catch (error) {
      console.log(error);
    }
  }



  updateSlideState(swiperEl: HTMLElement) {
    const slides = swiperEl.querySelectorAll('.swiper-slide');
    const activeIndex = this.swpElement()?.swiper.realIndex; // Obtiene el índice real del slide activo
  
    slides.forEach((slide: Element, index: number) => {
      // Si el slide está en el centro (el índice activo) habilitamos la interacción
      if (index === activeIndex) {
        (slide as HTMLElement).style.pointerEvents = 'auto';  // Habilitar clic en el slide central
      } else {
        (slide as HTMLElement).style.pointerEvents = 'none';  // Deshabilitar clic en los otros slides
      }
    });
  }
}
