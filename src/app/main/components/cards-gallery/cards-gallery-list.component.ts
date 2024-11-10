import { Component, OnInit } from '@angular/core';
import { Card } from '@app/core/models/card.model';
import { AuthApiCardService } from '@app/core/services/card/auth.card.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FlipCardComponent } from "../../../shared/flip-card/flip-card.component";


const MODULES = [FontAwesomeModule, ];

@Component({
  selector: 'app-cards-gallery-list',
  standalone: true,
  imports: [FlipCardComponent],
  templateUrl: './cards-gallery-list.component.html',
  styleUrls: ['./cards-gallery-list.component.css'],
})
export class CardsGalleryListComponent implements OnInit {
  cards: Card[] = [];
  currentCardIndex: number = 0;

  icons = {
    faChevronLeft,
    faChevronRight,
  };
  

  
  constructor(private _service: AuthApiCardService) {}

  async ngOnInit(): Promise<void> {
    try {
      // Cargar cartas aleatorias
      await this._service.getCardsRandoms();
      
      // Suscribirse a las cartas para recibir las actualizaciones en tiempo real
      this._service.cards$.subscribe((cards) => {
        this.cards.push(...cards);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async loadMoreCards(): Promise<void> {
    try {
      // Cargar más cartas aleatorias
      await this._service.getCardsRandoms();
    } catch (error) {
      console.log(error);
    }
  }

  // Cambia la carta al siguiente
  nextCard(): void {
    this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
  }

  // Cambia la carta al anterior
  prevCard(): void {
    this.currentCardIndex =
      (this.currentCardIndex - 1 + this.cards.length) % this.cards.length;
  }


}
