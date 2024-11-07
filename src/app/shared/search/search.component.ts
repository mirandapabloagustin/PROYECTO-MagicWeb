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
      placeholder="Busca tu carta Magic..."
      [(ngModel)]="searchCard"
      (keyup.enter)="onSearch()"
    />
    <div class="icon__input" (click)="onSearch()">
      <fa-icon class="input__icon-filter" [icon]="iconMagnifyingGlass"></fa-icon>
    </div>
  </div>
`,
styles: `

.input__group-filter {
  position: relative;
  width: 100%;
}

.input__filter {
  width: 100%;
  background-color: var(--text-color);
  border: 2px solid var(--border-color);
  border-radius: 2.5rem;
  height: 2.5rem;
  font-size: 1rem;
  padding: 0 45px 0 20px;
  transition: 0.3s ease all;
}

.icon__input {
  position: absolute;
  right: 10px; 
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  font-size: 1rem;
  transition: 0.3s ease all;
  background-color: var(--text-color);
  border: 2px solid var(--border-color);
  padding: 6px;
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
}
`
,
})
export class SearchComponent {
  iconMagnifyingGlass = faMagnifyingGlass;
  searchCard = '';
  @Output() searchEvent = new EventEmitter<string>();

  onSearch() {
      this.searchEvent.emit(this.searchCard);
      this.searchCard = '';
  }
}
