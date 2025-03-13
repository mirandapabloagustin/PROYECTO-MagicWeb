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

  /**
   * @description
   * Metodo que se encarga de filtrar los mazos.
   *  - Se obtiene el valor del input de busqueda.
   * - Se crea un objeto de tipo FilterDeckDTO con los valores del formulario.
   * - Se emite el evento filterEvent con el objeto creado al componente padre.
   * @param {string} search - Valor del input de busqueda.
   * @returns {void} - No retorna nada.
   */
  deckFilter(search:string){
    this.formColor.get('name').setValue(search);
    const filter = new FilterDeckDTO(this.formColor.value);
    this.filterEvent.emit(filter);
  }

  /**
   * @description
   * Metodo que se encarga de obtener la imagen de un color.
   *  - Se obtiene la primera letra del color.
   * - Se retorna la ruta de la imagen del color.
   * @param {string} color - Color del cual se quiere obtener la imagen.
   * @returns {string} - Retorna la ruta de la imagen del color.
   */
  getColorImg(color:string){
    const firtsLeter = color.charAt(0).toUpperCase();
    if(color === 'all') return `icons/cards_icons/MANA.svg`;
    if(color === 'blue') return `icons/cards_icons/U.svg`;
    return `icons/cards_icons/${firtsLeter}.svg`;
  }

  /**
   * @description
   * Metodo que se encarga de cambiar el estilo de un color seleccionado.
   * - Se obtiene el valor del color.
   * - Se cambia el estilo si el valor es true o false.
   * - Se llama al metodo checkColor para agregar o eliminar el color del arreglo de colores. 
   * @param {string} color - Color del cual se quiere cambiar el estilo.
   * @returns {void} - No retorna nada.
   */
  toggleCheckboxColor(color:string){
    const value = this.formColor.get(color).value;
    this.formColor.get(color).setValue(!value);
    this.changeStyleToActive(color+'-select', !value);
    this.checkColor(color, !value);
  }

  /**
   * @description
   * Metodo que se encarga de cambiar el estilo de un color si es seleccionado por su checkbox.
   * - Se obtiene el valor del color
   * - Se agrega o elimina la clase active del color.
   * @param {string} color - Color del cual se quiere cambiar el estilo.
   * @param {boolean} flag - Valor del checkbox.
   * @returns {void} - No retorna nada.
   */
  changeStyleToActive(color:string, flag:boolean){
    const element = document.getElementById(color);
    flag ? element?.classList.add('active') : element?.classList.remove('active');
  }

  /**
   * @description
   * Metodo que se encarga de verificar si un color esta seleccionado o no.
   * @param {string} color - Color del cual se quiere cambiar el estilo.
   * @param {boolean} flag - Valor del checkbox.
   * @returns {void} - No retorna
   */
  private checkColor(color: string, status: boolean) {
    const vector = this.formColor.get('colors').value || [];
    const firstLetter = color === 'blue' ? 'U' : color.charAt(0).toUpperCase();
  
    const newColors = status
      ? [...vector, firstLetter] 
      : vector.filter((item: string) => item !== firstLetter); 
    this.formColor.get('colors').setValue(newColors);
  }




}
