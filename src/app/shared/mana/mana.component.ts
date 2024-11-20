import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mana',
  standalone: true,
  imports: [],
  templateUrl: './mana.component.html',
  styleUrl: './mana.component.css'
})
export class ManaComponent implements OnInit{
  @Input() manaCost?:string;
  formattedManaCost: any;
  
  
  ngOnInit(): void {
    this.formattedManaCost = this.formatManaCost(this.manaCost ?? '');
  }


  formatManaCost(manaCost:string):string{
    let manaSymbols = manaCost.split('{');
    let formattedManaCost = '';
    manaSymbols.forEach((symbol) => {
      if(symbol.includes('}')){
        let symbolSplit = symbol.split('}');
        formattedManaCost += `<img  src="icons/cards_icons/${symbolSplit[0]}.svg" alt="${symbolSplit[0]}" />`;
        formattedManaCost += symbolSplit[1];
      }else{
        formattedManaCost += symbol;
      }
    });
    return formattedManaCost;
  }

}
