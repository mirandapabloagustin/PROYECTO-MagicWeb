import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

const MODULES_IMPORTS = [FontAwesomeModule, FormsModule];

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule], // Importa los módulos directamente
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
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
