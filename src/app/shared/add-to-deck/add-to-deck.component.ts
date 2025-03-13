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
  

  /**
   * @description
   * Metodo que se encarga de cargar los mazos del usuario logueado.
   * - Se obtiene el usuario logueado.
   * - Se llama al servicio getDecksUserId para obtener los mazos del usuario.
   * @returns {void} - No retorna ningun valor.
   */
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

  /**
   * @description
   * Metodo que se encarga de seleccionar un mazo y agregar la carta.
   * @param {Deck} deck - Mazo al que se le quiere agregar la carta.
   * @returns {void} - No retorna ningun valor.
   */
  selectDeck(deck : Deck) {
    this.updateDeck(deck);
  }

  /**
   * @description
   * Metodo que se encarga de agregar la carta al mazo seleccionado.
   * - Se agrega la carta al mazo.
   * - Se llama al servicio addColorOnDeck para agregar el color de la carta al mazo.
   * - Se llama al servicio avarageMana para calcular el promedio de mana del mazo.
   * - Se llama al servicio updateDeck para actualizar el mazo.
   * @param { Deck } deck - Mazo al que se le quiere agregar la carta.
   * @returns {void} - No retorna ningun valor.
   */
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


  closeDialog() {
    this._matDialogRef.close();
  }
  

}
