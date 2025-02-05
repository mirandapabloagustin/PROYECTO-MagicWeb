import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-decks',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filter-decks.component.html',
  styleUrl: './filter-decks.component.css'
})
export class FilterDecksComponent {
  formColor: any;

  constructor(
    private _formBuilder: FormBuilder,
  ) {
    this.formColor = this._formBuilder.group({
      white: false,
      blue: false,
      black: false,
      red: false,
      green: false,
      all: true,
      mana: 'all'
    });

  }

  toggleCheckboxColor(color:string){
    const value = this.formColor.get(color).value;
    const status = this.formColor.get(color).setValue(!value);
    this.changeStyleToActive(color+'-select', !value);
    console.log(this.formColor.value);
  }

  changeStyleToActive(color:string, flag:boolean){
    const element = document.getElementById(color);
    flag ? element?.classList.add('active') : element?.classList.remove('active');
  }

}
