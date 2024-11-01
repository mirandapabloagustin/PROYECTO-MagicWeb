import { Component, Output, EventEmitter, OnInit,  } from '@angular/core';
import { CardComponent } from '@shared/card/card.component';
import { AuthApiCardService } from '@services/card/auth.card.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Card } from '@models/card.model';





const MODULES = [CardComponent, MatProgressSpinnerModule];

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [...MODULES],
  templateUrl: `./list-cards.component.html`,
  styleUrl: `./list-cards.component.css`,
})
export class ListCardsComponent implements OnInit {
  db: Card[] = [];
  loading = true;
  constructor(private serviceAuth: AuthApiCardService) { }


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
      const res = await this.serviceAuth.getCardsData(1, 10);
      this.db = res.cards;
      this.loading = false;
    } catch (error) {
      console.log('Error', error);
    }
  }
  
}
