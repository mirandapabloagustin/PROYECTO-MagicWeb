import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from "@shared/search/search.component";
import { FilterDeckDTO } from '@models/dto/filter.deck.dto.model';

@Component({
  selector: 'app-filter-decks',
  standalone: true,
  imports: [ReactiveFormsModule, SearchComponent],
  templateUrl: './filter-decks.component.html',
  styleUrl: './filter-decks.component.css'
})
export class FilterDecksComponent {
  @Output() filterEvent = new EventEmitter<FilterDeckDTO>();
  formColor: any;
  countMana:string [] = ['all', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10','Manadicto'];
  manaColor:string [] = ['white', 'blue', 'black', 'red', 'green', 'all'];
  tagDecks:string [] = ['Aggro','Control','Combo','Midrange','Ramp','Stax','Tempo'];

  constructor(
    private _formBuilder: FormBuilder,
  ) {
    this.formColor = this._formBuilder.group({
      name: '',
      mana: '',
      tag:'',
      white: false,
      blue: false,
      black: false,
      red: false,
      green: false,
      all: false,
      colors : [[]]
    });
  }

  deckFilter(search:string){
    this.formColor.get('name').setValue(search);
    const filter = new FilterDeckDTO(this.formColor.value);
    this.filterEvent.emit(filter);
  }

  getColorImg(color:string){
    const firtsLeter = color.charAt(0).toUpperCase();
    if(color === 'all') return `icons/cards_icons/MANA.svg`;
    if(color === 'blue') return `icons/cards_icons/U.svg`;
    return `icons/cards_icons/${firtsLeter}.svg`;
  }

  toggleCheckboxColor(color:string){
    const value = this.formColor.get(color).value;
    this.formColor.get(color).setValue(!value);
    this.changeStyleToActive(color+'-select', !value);
    this.checkColor(color, !value);
  }

  changeStyleToActive(color:string, flag:boolean){
    const element = document.getElementById(color);
    flag ? element?.classList.add('active') : element?.classList.remove('active');
  }

  checkColor(color: string, status: boolean) {
    const vector = this.formColor.get('colors').value || [];
    const firstLetter = color === 'blue' ? 'U' : color.charAt(0).toUpperCase();
  
    const newColors = status
      ? [...vector, firstLetter] 
      : vector.filter((item: string) => item !== firstLetter); 
    this.formColor.get('colors').setValue(newColors);
  }




}
