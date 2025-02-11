import { DeckService } from '@core/services/deck/deck.service';
import { DeckCardComponent } from '@shared/deck-card/deck-card.component';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewDeckComponent } from '../new-deck/new-deck.component';

@Component({
  selector: 'app-list-decks',
  standalone: true,
  imports: [DeckCardComponent],
  templateUrl: './list-decks.component.html',
  styleUrl: './list-decks.component.css'
})
export class ListDecksComponent {
  @Input() decks: any;

  constructor(
    private _deckService: DeckService,
    private _matDialog: MatDialog,
    
  ) {}

  createNewDeck() {
    const dialogNewDeckRef = this._matDialog.open(NewDeckComponent,{
      width: '1000px',
      panelClass: 'dialog-new-deck_container',
    })

    dialogNewDeckRef.afterClosed().subscribe((res) => {
      res ? console.log('Deck created') : console.log('Deck not created');
    });
  }

}
