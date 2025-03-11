import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Mana } from '@app/core/models/manaCost.model';
import { AddToDeckComponent } from '../add-to-deck/add-to-deck.component';
import { User } from '@models/user.model';
import { LocalStorageService } from '@services/user/local-storage.service';
import { AuthUserService } from '@app/core/services/user/auth-user.service';
import { SnackbarService } from '@app/core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-details-card',
  standalone: true,
  imports: [],
  templateUrl: './details-card.component.html',
  styleUrl: './details-card.component.css'
})

export class DetailsCardComponent implements OnInit{
  isTransformed = false;
  @Input() cardData?:any;
  private userLogged! : User;

  manaFaces: Mana[][] = [];

  formattedLegalities: {
    format: string;
    legality: string;
    index?: number;
  }[] = [];

    constructor(
      private _matDialog: MatDialog,
      private _local: LocalStorageService,
      private _sService: AuthUserService,
      private _snackBar: SnackbarService
    ) { }


  ngOnInit(): void {
    this.userLogged = this._local.getUserLogged();
    window.scrollTo(0, 0);
    if(this.cardData?.layout !== 'normal'){
      this.formatMana(this.cardData?.card_faces[0].mana_cost, this.cardData?.card_faces[1].mana_cost);
    }else{
      this.formatMana(this.cardData?.mana_cost);
    }

    this.formatLegalities(this.cardData?.legalities);
  }



  formatMana(...manaData :string[]){
    this.manaFaces = manaData.map((manaCost) => {
      return manaCost
      .split('{')
      .filter((symbol) => symbol.includes('}'))
      .map((symbol, index) => {
        const symbolKey = symbol.split('}')[0];
        return {
          src: `icons/cards_icons/${symbolKey}.svg`,
          alt: symbolKey,
          index, 
        };
      }
      );
    }
    );
  }

  formatLegalities(legalities: any): void {
    this.formattedLegalities = Object.keys(legalities)
      .filter(format => format.toLowerCase() !== 'standardbrawl' && format.toLowerCase() !== 'paupercommander')
      .map((format, index) => {
        return {
          format,
          legality: legalities[format],
          index,
        };
      });
  }

  transformCard(): void {
    this.isTransformed = !this.isTransformed;
  }

  checkFavorite(): boolean {
    return this.userLogged.favCards!.some(
      (card) => card.id === this.cardData.id
    );
  }

  async addCardToFavorites(){
    if(this.checkFavorite() ){
      this.userLogged.favCards = this.userLogged.favCards!.filter(
        (card) => card.id !== this.cardData.id
      ) 
    }else{
      this.userLogged.favCards?.push(this.cardData);
    }

    try{
      this._sService.updateUser(this.userLogged).then((res) => {
        if(res){
          this._local.setItemStorage(this.userLogged);
        }
      });
    }catch(error){
      this._snackBar.errorServer();
    }
  } 

  addCardToDeck(): void {
       this._matDialog.open(AddToDeckComponent,{
         width: '300px',
         data: this.cardData,
         panelClass: 'custom-dialog-container'
       });
  }
  


}