import { Component, HostListener, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-details-card',
  standalone: true,
  imports: [],
  templateUrl: './details-card.component.html',
  styleUrl: './details-card.component.css'
})
export class DetailsCardComponent implements OnInit{

  @Input() cardData?:any;

  formattedLegalities: {
    format: string;
    legality: string;
    index?: number;
  }[] = [];

  formattedManaArray: { 
    src: string; 
    alt: string;
    index?: number;
  }[] = [];


  ngOnInit(): void {
    this.formatManaCost(this.cardData?.mana_cost ?? '');
    this.formatLegalities(this.cardData?.legalities ?? {});
  }

  formatManaCost(manaCost: string): void {
    this.formattedManaArray = manaCost
    .split('{')
    .filter((symbol) => symbol.includes('}'))
    .map((symbol, index) => {
      const symbolKey = symbol.split('}')[0];
      return {
        src: `icons/cards_icons/${symbolKey}.svg`,
        alt: symbolKey,
        index, 
      };
    });
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
  

  /*
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    console.log('click', event);
  }
  */

}