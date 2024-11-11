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
      await this._service.getCardsRandoms();
      this._service.cards$.subscribe((cards) => {
        this.cards.push(...cards);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async loadMoreCards(): Promise<void> {
    try {
  
      await this._service.getCardsRandoms();
    } catch (error) {
      console.log(error);
    }
  }

  moveNext(): void {
    if (this.currentCardIndex < this.cards.length - 1) {
      this.currentCardIndex++;
    } else {
      this.currentCardIndex = 0; // Loop back to the first card
    }
  }

  movePrev(): void {
    if (this.currentCardIndex > 0) {
      this.currentCardIndex--;
    } else {
      this.currentCardIndex = this.cards.length - 1; // Loop back to the last card
    }
  }

  


}
