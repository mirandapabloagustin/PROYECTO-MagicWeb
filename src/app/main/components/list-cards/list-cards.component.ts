import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CardComponent } from '@shared/card/card.component';
import { database }  from '@core/db/database';




const MODULES = [CardComponent];

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [...MODULES],
  templateUrl: `./list-cards.component.html`,
  styleUrl: `./list-cards.component.css`,
})
export class ListCardsComponent {
  db = database
  @Output() cardSelected = new EventEmitter<any>();

  handleCardId(cardData: any){
    
    this.cardSelected.emit(cardData)
    console.log('Card clicked:', cardData);
  }


}
