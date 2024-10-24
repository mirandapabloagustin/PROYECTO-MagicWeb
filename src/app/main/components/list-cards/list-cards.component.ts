import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { CardComponent } from '@shared/card/card.component';
import { database }  from '@core/db/database';
import { CardsService } from '@app/core/service/serviceScryfall/cardService/cards.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




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
  loading = true;
  constructor(private serviceCards: CardsService) { }


  ngOnInit(): void {
    this.loadCards();
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


}
