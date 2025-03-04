import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/core/models/user.model';
import { AuthDeckService } from '@app/core/services/deck/auth.deck.service';
import { SnackbarService } from '@app/core/services/snackbar/snackbar.service';
import { LocalStorageService } from '@app/core/services/user/local-storage.service';
import { Deck } from '@core/models/deck.model';

@Component({
  selector: 'app-deck-card',
  standalone: true,
  imports: [],
  templateUrl: './deck-card.component.html',
  styleUrl: './deck-card.component.css'
})
export class DeckCardComponent implements OnInit {
  private _userLogged!: User;
  @Input() publicActive!: boolean;
  @Input() deckUser: Deck | undefined;

  constructor(
    private _router : Router,
    private _local: LocalStorageService,
    private _deckService: AuthDeckService,
    private _snackBar: SnackbarService
  ) {}

  ngOnInit(): void {
    this._userLogged = this._local.getUserLogged();

  }


  goToDeck(id: any) {
    if(!this.publicActive){
      this._router.navigate(['/',this._userLogged.id,'decks', id]);
    }else{
      this._router.navigate(['/', this.deckUser?.userId,'decks', id]);
    }
  }

  likeDeck(deck: Deck) {
    if(this.checkLikeUser(deck)){
      deck.votesUser = deck.votesUser?.filter(id => id !== this._userLogged.id) || [];
    }else{
      deck.votesUser?.push(this._userLogged.id!);
    }
    this._deckService.updateDeck(deck).then(res => {
      if(res){
        this.deckUser = deck;
        this._snackBar.emitSnackbar('Gracias por participar en la comunidad', 'success','Tu voto ha sido registrado');

      }
    });
  }

  getDeckColorImg(color: string) {
    return `./icons/cards_icons/${color}.svg`;
  }

formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

getFormatDate(value: string) {
  const date = new Date(value);
  return this.formatDate(date);
}

checkLikeUser(deck: Deck):boolean {
  return deck.votesUser!.includes(this._userLogged.id!);
}

}
