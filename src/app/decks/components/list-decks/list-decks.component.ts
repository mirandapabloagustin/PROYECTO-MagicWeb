import { DeckCardComponent } from '@shared/deck-card/deck-card.component';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewDeckComponent } from '../new-deck/new-deck.component';
import { EmptyComponent } from "../../../shared/empty/empty.component";

@Component({
  selector: 'app-list-decks',
  standalone: true,
  imports: [DeckCardComponent, EmptyComponent],
  templateUrl: './list-decks.component.html',
  styleUrl: './list-decks.component.css'
})
export class ListDecksComponent {
  @Input() decks: any;
  message = 'Forja tu primera baraja, reúne tus cartas favoritas y crea estrategias que desafíen a contrincantes.';

  constructor(
    private _matDialog: MatDialog,   
  ) {}

  createNewDeck() {
    const dialogNewDeckRef = this._matDialog.open(NewDeckComponent,{
      width: '1000px',
      panelClass: 'dialog-new-deck_container',
    })
  }

}
