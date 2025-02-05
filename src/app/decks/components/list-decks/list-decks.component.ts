import { DeckCardComponent } from './../../../shared/deck-card/deck-card.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-decks',
  standalone: true,
  imports: [DeckCardComponent],
  templateUrl: './list-decks.component.html',
  styleUrl: './list-decks.component.css'
})
export class ListDecksComponent {
  fakeList = [
    {
      id:'1234',
      userId: '5678',
      name: 'Deck 1',
      description: 'This is a deck description',
      imgDeck: 'https://cards.scryfall.io/art_crop/front/9/8/98739789-80b5-4224-a2e4-09e00654aa9d.jpg?1637082308',
      tags: ['agro', 'control'],
      createdAt: new Date(),
      updatedAt: new Date(),
      manaRatio: 0,
      colors: ['R', 'B'],
      votes: 0,
      cards: []
    },
    {
      id:'1212',
      userId:'2323',
      name: 'Deck 2',
      description: 'This is a deck description',
      imgDeck: 'https://cards.scryfall.io/art_crop/front/9/8/98739789-80b5-4224-a2e4-09e00654aa9d.jpg?1637082308',
      tags: ['agro', 'control'],
      createdAt: new Date(),
      updatedAt: new Date(),
      manaRatio: 0,
      colors: ['R', 'B'],
      votes: 0,
      cards: []
    }
  ]

}
