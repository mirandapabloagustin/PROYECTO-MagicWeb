import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Deck } from '@app/core/models/deck.model';
import { AuthDeckService } from '@app/core/services/deck/auth.deck.service';
import { SnackbarService } from '@app/core/services/snackbar/snackbar.service';
@Component({
  selector: 'app-new-deck',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-deck.component.html',
  styleUrl: './new-deck.component.css',
})
export class NewDeckComponent {
  formCreateDeck: FormGroup;
  countWords = 0;
  limitWords = 150;
  tagsDecks = [
    'Aggro',
    'Control',
    'Combo',
    'Midrange',
    'Ramp',
    'Stax',
    'Tempo',
  ];

  constructor(
    public dialogRef: MatDialogRef<NewDeckComponent>,
    private _deckService: AuthDeckService,
    private _builderForm: FormBuilder,
    private _snackbarService: SnackbarService
  ) {
    this.formCreateDeck = this._builderForm.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(300),
          Validators.pattern(/^[a-zA-ZÀ-ÿ0-9\s.,!?()'":-]/),
        ],
      ],
      tags: [[]],
    });
  }

  async createNewDeck(event: Event) {
    event.preventDefault();
    const deck = this.toDeckClass();
    try {
      const res = await this._deckService.createDeck(deck);
      res ? this.dialogRef.close(true) : this.dialogRef.close(false);
    } catch (e) {
      this._snackbarService.emitSnackbar(
        'Tuvimos inconvenientes para poder generar tu mazo.',
        'error',
        'Vuele a intentarlo mas tarde...'
      );
    }
  }

  toDeckClass(): Deck {
    const deck = new Deck();
    deck.name = this.formCreateDeck.get('name')?.value;
    deck.description = this.formCreateDeck.get('description')?.value;
    deck.tags = this.formCreateDeck.get('tags')?.value;
    deck.createdAt = new Date();
    deck.updatedAt = new Date();
    return deck;
  }

    /**
   * @description
   * Metodo para agregar o quitar un Etiqueta del mazo.
   * - Obtiene el valor del campo Etiqueta del formulario.
   * - Si la Etiqueta esta seleccionado, agrega el Etiqueta al mazo, de lo contrario lo quita.
   * - Actualiza el valor del campo Etiqueta del formulario.
   * @param {any} event Evento del checkbox.
   * @param {string} tag Etiqueta a agregar o quitar. 
   */
  addTag(event: any, tag: string) {
    const tags = this.formCreateDeck.get('tags')?.value;
    if (event.target.checked) {
      tags.push(tag);
    } else {
      const index = tags.indexOf(tag);
      tags.splice(index, 1);
    }
    this.formCreateDeck.get('tags')?.setValue(tags);
  }

  chageStyleTag(index: number) {
    const element = document.getElementById(index.toString());
    if (element?.classList.contains('selected')) {
      element?.classList.remove('selected');
    } else {
      element?.classList.add('selected');
    }
  }

  /**
   * @description
   * Metodo para validar si existe un error en el campo.
   * - Obtiene el campo del formulario y llama al metodo hasError del campo, que recibe el nombre del error.
   * @param field
   * @param error
   * @returns {boolean} - Retorna un true si existe un error en el campo
   */
  hasError(field: string, error: string) {
    const formControl = this.formCreateDeck.get(field);
    return formControl?.hasError(error);
  }

  /**
   * @description
   * Metodo para validar si existe un error en el campo.
   * - Llama al metodo hasError, que recibe el nombre del campo y el nombre del error.
   * Si existe un error, agrega la clase form__error-status al campo, de lo contrario la elimina.
   * @param {string} field - Nombre del campo
   * @param {string} error - Nombre del error
   * @returns {boolean} Retorna un true si existe un error en el campo
   */
  hasExistsError(field: string, error: string) {
    const value = this.hasError(field, error);
    const element = document.getElementById(field);
    value
      ? element?.classList.add('form__error-status')
      : element?.classList.remove('form__error-status');
    return value;
  }

  /**
   * @description
   * Metodo para contar las palabras de la descripcion del mazo
   * - Obtiene la descripcion del mazo y cuenta la cantidad de caracteres.
   * - Si la cantidad de caracteres es mayor a la cantidad de palabras permitidas, corta la descripcion.
   * - Si no, asigna la cantidad de caracteres a la variable countWords.
   */
  countWordsDescription() {
    const description = this.formCreateDeck.get('description')?.value;
    const characters = description ? description.length : 0;
    if (characters > this.limitWords) {
      this.formCreateDeck
        .get('description')
        ?.setValue(description.slice(0, this.limitWords));
    } else {
      this.countWords = characters;
    }
  }
}
