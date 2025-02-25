import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Mana } from '@app/core/models/manaCost.model';
import { AddToDeckComponent } from '../add-to-deck/add-to-deck.component';

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

  manaFaces: Mana[][] = [];

  formattedLegalities: {
    format: string;
    legality: string;
    index?: number;
  }[] = [];

  dataFalsa = {
    user: 'user1',
    decks:[
      {
        name: 'Deck 1',
        id: '1'
      },
      {
        name: 'Deck 2',
        id: '2'
      },
      {
        name: 'Deck 3',
        id: '3'
      }
    ]
  }

    constructor(private _matDialog: MatDialog) { }


  ngOnInit(): void {
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

  addCardToDeck(): void {
       this._matDialog.open(AddToDeckComponent,{
         width: '300px',
         data: this.cardData,
         panelClass: 'custom-dialog-container'
       });
  }
  


}