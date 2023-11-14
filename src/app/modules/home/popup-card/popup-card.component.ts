import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthTareaService } from 'src/app/core/service/auth-tarea.service';

import { Card, User } from 'src/app/core/Models';
import { publishFacade } from '@angular/compiler';



@Component({
  selector: 'app-popup-card',
  templateUrl: './popup-card.component.html',
  styleUrls: ['./popup-card.component.css']
})

export class PopupCardComponent implements OnInit {

  userDeck: User | undefined;
  deckSelected: string = '';
  dataComponent: any;

  closemessage = 'Close using directive';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private ref: MatDialogRef<PopupCardComponent>,
    private authTareaService: AuthTareaService
  ) {

  }

  ngOnInit(): void {
    this.dataComponent = this.data[0];
    this.userDeck = this.data[1];
  }

  closepopup() {
    this.ref.close('Close using function');
  }

  panelOpenState = false;

  //@Param: void
  //@return: void
  //This method add card to the deck of the user
  public sendToDeckUser(){
    if(this.userDeck?.decks?.length! > 0){
      this.userDeck?.decks?.forEach((deck) => {
        if(deck.id?.toString() == this.deckSelected){
          let card : Card = {
            id: this.dataComponent.id,
            nameCard: this.dataComponent.name,
            cmc: this.dataComponent.cmc,
            colorIdentity: this.dataComponent.colorIdentity,
            type: this.dataComponent.type
          }
          deck.cards?.push(card);
          this.userUpdated();
          alert("Se envio la carta al deck del usuario " + deck.nameDeck);
        }
      });
    }
  }

  //@Param: void
  //@return: void
  //This method update the user in the database and in the cache
  public async userUpdated () : Promise<void> {
    let logrado = false;
    if(this.userDeck){
      logrado = await this.authTareaService.updateUser(this.userDeck);
      this.authTareaService.userChaceUpdate(this.userDeck);
    }
  }


}





