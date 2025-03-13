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

  /**
   * @description
   * Metodo que redirige al usuario a la vista de detalles de un mazo.
   * @param {any} id - Id del mazo al que se quiere redirigir.
   * @returns {void} - No retorna ningun valor.
   */
  goToDeck(id: any) {
    const userId = this.publicActive ? this.deckUser?.userId : this._userLogged.id;
    this._router.navigate(['/', userId, 'decks', id], {
      queryParams: { public: this.publicActive }
    });
  }

  /**
   * @description
   * Metodo que se encarga de verificar si el usuario logueado ha dado like a un mazo.
   * @param {Deck} deck - Mazo al que se le quiere verificar si el usuario ha dado like.
   * @returns {boolean} - Retorna un valor booleano.
   */
  checkLikeUser(deck: Deck):boolean {
    return deck.votesUser!.includes(this._userLogged.id!);
  }

  /**
   * @description
   * Metodo que se encarga de dar like o quitar like a un mazo.
   * @param {Deck} deck - Mazo al que se le quiere dar like.
   * @returns {void} - No retorna ningun valor.
   */
  likeDeck(deck: Deck) {
    if(this.checkLikeUser(deck)){
      deck.votesUser = deck.votesUser?.filter(id => id !== this._userLogged.id) || [];
    }else{
      deck.votesUser?.push(this._userLogged.id!);
      this._snackBar.emitSnackbar('Gracias por participar en la comunidad', 'success','Tu voto ha sido registrado');
    }
    this._deckService.updateDeck(deck).then(res => {
      if(res){
        this.deckUser = deck;
      }
    });
  }

  /**
   * @description
   * Metodo que retorna la ruta de la imagen de un color de mazo.
   * @param {string} color - Retorna la ruta src del color de la carta.
   */
  getDeckColorImg(color: string) {
    return `./icons/cards_icons/${color}.svg`;
  }

  /**
   * @description
   * Metodo que retorna la fecha en formato dd/mm/yyyy.
   * @param {Date} date - Fecha que se quiere formatear.
   * @returns {string} - Retorna la fecha en formato dd/mm/yyyy.
   */
private formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * @description
 * Metodo que retorna la fecha en formato dd/mm/yyyy.
 * - Convierte la fecha en un objeto Date.
 * @param {string} value - Fecha que se quiere formatear.
 * @returns {string} - Retorna la fecha en formato dd/mm/yyyy.
 */
getFormatDate(value: string) {
  const date = new Date(value);
  return this.formatDate(date);
}



}
