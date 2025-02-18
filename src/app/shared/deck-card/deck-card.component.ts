import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '@app/core/services/user/local-storage.service';
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

  constructor(
    private _router : Router,
    private _local: LocalStorageService,
  ) {}

  goToDeck(id: any) {
    const user = this._local.getUserLogged();
    this._router.navigate(['/',user.id,'decks', id]);
  }

  getDeckColorImg(color: string) {
    return `./icons/cards_icons/${color}.svg`;
  }

  transformDate(value : string) {
    const date = '';
    if(value === 'create') {
    const day = this.deckUser?.createdAt?.getDate().toString().padStart(2, '0');
    const month = this.deckUser?.createdAt ? (this.deckUser.createdAt.getMonth() + 1).toString().padStart(2, '0') : '';
    const year = this.deckUser?.createdAt?.getFullYear();
    return `${day}/${month}/${year}`;
    } else {
      const day = this.deckUser?.updatedAt?.getDate().toString().padStart(2, '0');
      const month = this.deckUser?.updatedAt ? (this.deckUser.updatedAt.getMonth() + 1).toString().padStart(2, '0') : '';
      const year = this.deckUser?.updatedAt?.getFullYear();
      return `${day}/${month}/${year}`;
    }
  }

}
