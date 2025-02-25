import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LocalStorageService } from '@services/user/local-storage.service';
import { DeckService } from '@services/deck/deck.service';
import { SnackbarService } from '@services/snackbar/snackbar.service';
import { AuthDeckService } from '@app/core/services/deck/auth.deck.service';
import { Deck } from '@app/core/models/deck.model';

@Component({
  selector: 'app-add-to-deck',
  standalone: true,
  imports: [],
  templateUrl: './add-to-deck.component.html',
  styleUrl: './add-to-deck.component.css'
})
export class AddToDeckComponent implements OnInit {
  decks: any[] = [];

  constructor(
    private _local: LocalStorageService,
    private _service: AuthDeckService,
    private _matDialogRef: MatDialogRef<AddToDeckComponent>,
    @Inject(MAT_DIALOG_DATA) public card: any,
    private _snackbarService: SnackbarService
  ) {
  }

  ngOnInit() {
    this.loadDecks();
    this._service.deckList$.subscribe((decks) => {
      this.decks = decks;
    }); 
  }

  async loadDecks(){
    try{
      const user = this._local.getUserLogged();
      if(user.id){
        await this._service.getDecksUserId(user.id);
      }
    }catch(e){
      console.error(e);
    }
  }

  selectDeck(deck : Deck) {
    console.log(this.card);
    /*
    deck.cards ? deck.cards.push(this.card) : deck.cards = [this.card];
    const confirm = this._service.updateDeck(deck);
    console.log(confirm);
    console.log(deck);
  */
    this._snackbarService.emitSnackbar('La carta se guardo correctamente', 'success');
  }


  closeDialog() {
    this._matDialogRef.close();
  }


}
