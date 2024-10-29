import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

const MODULES_IMPORTS = [FontAwesomeModule, FormsModule];

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MODULES_IMPORTS],
  template: `
    <div class="input__group-filter">
      <input
        type="text"
        class="input__filter"
        placeholder="Busca tu carta magic..."
        [(ngModel)]="searchCard"
        (keyup.enter)="onSearch()"
      />
      <div class="icon__input" (click)="onSearch()">

        <fa-icon
        class="input__icon-filter"
        [icon]="iconMagnifyingGlass"
        
        ></fa-icon>
      </div>
    </div>
  `,
  styles: `
  .input__group-filter{
    position: relative;
}

.input__filter {
    width: 100%;
    background-color: var(--text-color);
    border: 2px solid var(--border-color);
    border-radius: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 1rem;
    padding: 0 45px 0 20px;
    transition: .3s ease all;
}

.icon__input{
  position: absolute;
    right: 0px;
    top: 0px;
    z-index: 100;
    font-size: 14px;
    transition: .3s ease all;
    background-color: var(--text-color);
    border: 2px solid var(--border-color);
    padding: 6px 11px;
    border-radius: 50%;
    cursor: pointer;
}

.icon__input:hover {
  color: var(--text-color);
  background-color: var(--bg-black-color);
}

.input__filter:focus {
  outline: none;
  box-shadow: none;
  border-color: none;
}

`,
})
export class SearchComponent {
  iconMagnifyingGlass = faMagnifyingGlass;
  searchCard = '';
  @Output() searchEvent = new EventEmitter<string>();

  onSearch() {
    if(this.searchCard.length > 0){
      this.searchEvent.emit(this.searchCard);
    }else{
      console.log('No hay nada que buscar');
    }
  }
}
