import { Component, Input } from '@angular/core';
import { Deck } from '@models/deck.model';
import { DeckCardComponent } from "@shared/deck-card/deck-card.component";
import { EmptyComponent } from '@app/shared/empty/empty.component';

@Component({
  selector: 'app-list-decks-community',
  standalone: true,
  imports: [DeckCardComponent, EmptyComponent],
  templateUrl: './list-decks-community.component.html',
  styleUrl: './list-decks-community.component.css'
})
export class ListDecksCommunityComponent {
  private isPublic: boolean = true;
  @Input() decks: Deck[] = [];
  message = 'Ningún valiente ha creado una baraja aún. La arena está en silencio, esperando a los estrategas que forjen el camino.';


  
  getIsPublic(): boolean {
    return this.isPublic;
  }

}
