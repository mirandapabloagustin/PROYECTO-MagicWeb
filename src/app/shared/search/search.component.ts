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
  @Output() searchEvent = new EventEmitter<string>();
  iconMagnifyingGlass = faMagnifyingGlass;
  searchCard = '';

  /**
   * @description
   * Metodo que emite un evento con el valor del input de búsqueda
   * y limpia el input de búsqueda.
   * @returns { void } - No retorna nada.
   */
  onSearch() {
    this.searchEvent.emit(this.searchCard);
    this.searchCard = '';
  }
}
