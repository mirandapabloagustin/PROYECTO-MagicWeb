import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from "../../../shared/search/search.component";

@Component({
  selector: 'app-filter-decks',
  standalone: true,
  imports: [ReactiveFormsModule, SearchComponent],
  templateUrl: './filter-decks.component.html',
  styleUrl: './filter-decks.component.css'
})
export class FilterDecksComponent {
  @Output() filterEvent = new EventEmitter<any>();
  formColor: any;
  countMana:string [] = ['all', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10','Manadicto'];
  manaColor:string [] = ['white', 'blue', 'black', 'red', 'green', 'all'];
  tagDecks:string [] = ['All','Agro', 'Control', 'Combo','Other'];

  constructor(
    private _formBuilder: FormBuilder,
  ) {
    this.formColor = this._formBuilder.group({
      search: '',
      mana: '',
      tag:'',
      white: false,
      blue: false,
      black: false,
      red: false,
      green: false,
      all: false
    });
  }

  deckFilter(search:string){
    this.formColor.get('search').setValue(search);
    this.filterEvent.emit(this.formColor.value);
  }


  toggleCheckboxColor(color:string){
    const value = this.formColor.get(color).value;
    const status = this.formColor.get(color).setValue(!value);
    this.changeStyleToActive(color+'-select', !value);
  }

  changeStyleToActive(color:string, flag:boolean){
    const element = document.getElementById(color);
    flag ? element?.classList.add('active') : element?.classList.remove('active');
  }




}
