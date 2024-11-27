import { Component, Input, OnInit } from '@angular/core';
import { Mana } from '@app/core/models/manaCost.model';

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


  ngOnInit(): void {
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
   console.log( this.manaFaces[0]);
   console.log( this.manaFaces[1]);
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
  

  /*
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    console.log('click', event);
  }
  */

}