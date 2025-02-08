import { DeckCardComponent } from './../../../shared/deck-card/deck-card.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-decks',
  standalone: true,
  imports: [DeckCardComponent],
  templateUrl: './list-decks.component.html',
  styleUrl: './list-decks.component.css'
})
export class ListDecksComponent {
  @Input() decks: any;

  createNewDeck() {
    console.log('Creating new deck');
  }

}
