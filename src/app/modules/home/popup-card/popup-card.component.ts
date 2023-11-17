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

  user: User | undefined;
  deckSelected: string = '';

  closemessage = 'Close using directive';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dataCard: any,
    private ref: MatDialogRef<PopupCardComponent>,
    private authTareaService: AuthTareaService
  ) {

  }



  ngOnInit(): void {
    this.user = this.authTareaService.getCurrentUser();
  }

  async closepopup() {
    this.ref.close('Close using function');
  }

  panelOpenState = false;

  //@Param: void
  //@return: void
  //This method add card to the deck of the user
  public sendToDeckUser() {
    if(this.user?.decks?.length! > 0){
      this.user?.decks?.forEach((deck) => {
        if(deck.nameDeck === this.deckSelected){
          let card : Card = {
            id: this.dataCard.id,
            nameCard: this.dataCard.name,
            cmc: this.dataCard.cmc,
            colorIdentity: this.dataCard.colorIdentity,
            type: this.dataCard.type
          } 
          deck.cards?.push(card);
        }
      });
      this.authTareaService.userChaceUpdate(this.user!);
      this.authTareaService.updateUser(this.user!);
    }
  }

  //@Param: void
  //@return: void
  //This method update the user in the database and in the cache

}





