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
    this.updateDeck(deck);
  }


  closeDialog() {
    this._matDialogRef.close();
  }

  async updateDeck(deck: Deck) {
    try{
      deck.cards ? deck.cards.push(this.card) : deck.cards = [this.card];
      deck = this._service.addColorOnDeck(this.card,deck);
      deck.manaRatio = this._service.avarageMana(deck);
      const confirm = await  this._service.updateDeck(deck);
      if(confirm){
        this._snackbarService.emitSnackbar('La carta se guardo correctamente', 'success');
        this.closeDialog();
      }
    }catch(e){
      console.error(e);
      this._snackbarService.emitSnackbar('Tuvimos inconvenientes para poder guardar la carta.', 'error', 'Vuelva a intentarlo mas tarde...');
    }
  }

  

}
