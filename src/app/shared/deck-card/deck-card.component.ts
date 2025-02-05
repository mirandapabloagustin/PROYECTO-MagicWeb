import { Component, Input } from '@angular/core';
import { Deck } from '@core/models/deck.model';

@Component({
  selector: 'app-deck-card',
  standalone: true,
  imports: [],
  templateUrl: './deck-card.component.html',
  styleUrl: './deck-card.component.css'
})
export class DeckCardComponent {
  @Input() deckUser: Deck | undefined;

  constructor() {}

  goToDeck(id: any) {
    console.log('Go to deck:', id);
  }

  getDeckColorImg(color: string) {
    return `./icons/cards_icons/${color}.svg`;
  }

  transformDate() {
    return this.deckUser?.createdAt ? this.deckUser.createdAt.toISOString().split('T')[0] : '';
  }

}
