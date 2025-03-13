import { Component, Input } from '@angular/core';
import { Deck } from '@models/deck.model';
import { DeckCardComponent } from "@shared/deck-card/deck-card.component";

@Component({
  selector: 'app-list-decks-community',
  standalone: true,
  imports: [DeckCardComponent],
  templateUrl: './list-decks-community.component.html',
  styleUrl: './list-decks-community.component.css'
})
export class ListDecksCommunityComponent {
  private isPublic: boolean = true;
  @Input() decks: Deck[] = [];

  
  getIsPublic(): boolean {
    return this.isPublic;
  }

}
