import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthTareaService } from 'src/app/core/service/auth-tarea.service';
import { AuthApiScrifallService } from 'src/app/core/service/serviceApiScryfall/auth-api-scrifall.service';
import { DeckCard } from 'src/app/core/Models';

@Component({
  selector: 'app-deck-show',
  templateUrl: './deck-show.component.html',
  styleUrls: ['./deck-show.component.css'],
})
export class DeckShowComponent implements OnInit {
  @Input() cardsDeckUser: any;
  @Output() deleteUserDeck: EventEmitter<DeckCard> = new EventEmitter<DeckCard>();
  @Output() updateDataDeck: EventEmitter<DeckCard> = new EventEmitter<DeckCard>(false);

  deckCard: any[]=[];
  public editedName: string = '';
  public editingName: boolean = false;

  constructor(
    private authApi: AuthApiScrifallService,
    private authTareaService: AuthTareaService,
    private router: Router
      ) { }

  ngOnInit(): void {
    this.cartasdelmazo();
   }

  public async cartasdelmazo() {
    try {
      for (let i = 0; i < this.cardsDeckUser.cards.length; i++) {
        this.deckCard.push(
          await this.authApi.getCardByIdentifier(this.cardsDeckUser.cards[i].id));
      }
    } catch (error) {
      console.log(error);
    }
  }

  public deleteDeck() {
    this.deleteUserDeck.emit(this.cardsDeckUser);
  }

  public startEditing() {
    this.editedName = this.cardsDeckUser?.nameDeck || '';
    this.editingName = true;
  }

  public saveName() {
    let user = this.authTareaService.getCurrentUser();
    user?.decks?.forEach((deck) => { 
      if(deck.nameDeck === this.editedName){
        deck.nameDeck = this.cardsDeckUser.nameDeck;
        alert('Ya existe un mazo con ese nombre');
      }else{
        this.cardsDeckUser.nameDeck = this.editedName;
      }
    });
    this.cardsDeckUser.nameDeck = this.editedName;
    this.editingName = false;
    this.updateDataDeck.emit(this.cardsDeckUser);
  }

  public deleteCartToDeck(card: any) {
    this.deckCard.forEach((element: any, index: number) => {
      if (element.id === card.id) {
        this.deckCard.splice(index, 1);
      }
    });
    this.cardsDeckUser.cards.forEach((element: any, index: number) => {
      if (element.id === card.id) {
        this.cardsDeckUser.cards.splice(index, 1);
      }
    });
    this.updateDataDeck.emit(this.cardsDeckUser);
  }

  public addCards(){  
    this.router.navigate(['/home/home-page']);
  }


}


