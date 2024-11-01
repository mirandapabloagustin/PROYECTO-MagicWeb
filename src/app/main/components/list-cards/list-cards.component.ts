import { Component, Output, EventEmitter, OnInit,  } from '@angular/core';
import { CardComponent } from '@shared/card/card.component';
import { CardsService } from '@app/core/service/serviceScryfall/card/cards.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { database } from '@app/core/db/database';
import { lastValueFrom } from 'rxjs';




const MODULES = [CardComponent, MatProgressSpinnerModule];

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [...MODULES],
  templateUrl: `./list-cards.component.html`,
  styleUrl: `./list-cards.component.css`,
})
export class ListCardsComponent implements OnInit {
  db: any;
  dataCards: any;
  loading = true;
  constructor(private serviceCards: CardsService) { }


  ngOnInit(): void {
    this.loadMoreCards();
  }


 
  @Output() cardSelected = new EventEmitter<any>();

  handleCardId(cardData: any){
    this.cardSelected.emit(cardData)
    console.log('Card clicked:', cardData);
  }

  

  async loadCards() {
    try {
      const cards = await this.serviceCards.get20RandomCards();
      this.db = cards; 
    } catch (error) {
      console.error('Error loading cards:', error);
    }finally{
      this.loading = false;
    }
  }



  loadMoreCards() {
    this.serviceCards.getCards(1, 10).subscribe(data => {
      this.dataCards = data.cards; 
      console.log('Data cards:', this.dataCards);
    });
  }
}
