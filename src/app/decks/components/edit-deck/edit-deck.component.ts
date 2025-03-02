import { Component, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '@services/snackbar/snackbar.service';
import { Deck } from '@models/deck.model';
import { AuthDeckService } from '@services/deck/auth.deck.service';

@Component({
  selector: 'app-edit-deck',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-deck.component.html',
  styleUrl: './edit-deck.component.css'
})
export class EditDeckComponent {
  countWords = 0;
  limitWords = 150;
  formDeck: FormGroup;
  tagsDecks = ['Aggro','Control','Combo','Midrange','Ramp','Stax','Tempo']

  constructor(
    private _serviceDeck: AuthDeckService,
    private _snackbar : SnackbarService, 
    private _dialogRef: MatDialogRef<EditDeckComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Deck,
    private _builderForm: FormBuilder
  ) { 
    this.formDeck = this._builderForm.group({
      name: ['',
        [Validators.minLength(4), Validators.maxLength(30),this.nameExists()]
      ],
      description: ['',
        [Validators.minLength(5),Validators.maxLength(300),Validators.pattern(/^[a-zA-ZÀ-ÿ0-9\s.,!?()'":-]/)]
      ],
      tags: [this.data.tags],
    });
  }

  ngOnInit(): void {
  }

  /**
   * @description
   * Metodo para editar un mazo
   * - Obtiene los valores del formulario y los asigna a las propiedades del mazo.
   * - Llama al metodo updateDeck del servicio deckService, que recibe el mazo y retorna un true si se actualizo el mazo.
   * - Muestra un mensaje de exito si se actualizo el mazo y cierra el dialogo.
   * @param {Event} event Evento del formulario
   */
  editDeck(event: Event) {
    event.preventDefault();
    if(this.formDeck.valid){
      this.data.name = this.formDeck.get('name')?.value !== '' ? this.formDeck.get('name')?.value : this.data.name;
      this.data.description = this.formDeck.get('description')?.value !== '' ? this.formDeck.get('description')?.value : this.data.description;
      this.data.tags = this.formDeck.get('tags')?.value;
      this._serviceDeck.updateDeck(this.data).then(res => {
        if(res){
          this._snackbar.emitSnackbar('Mazo actualizado correctamente', 'success', 'Mazo actualizado');
        }
      });
      this._dialogRef.close();
    }
  }

  /**
   * @description
   * Metodo para contar las palabras de la descripcion del mazo
   * - Obtiene la descripcion del mazo y cuenta la cantidad de caracteres.
   * - Si la cantidad de caracteres es mayor a la cantidad de palabras permitidas, corta la descripcion.
   * - Si no, asigna la cantidad de caracteres a la variable countWords.
   */
  countWordsDescription() {
    const description = this.formDeck.get('description')?.value;
    const characters = description ? description.length : 0;
    if (characters > this.limitWords) {
      this.formDeck
        .get('description')
        ?.setValue(description.slice(0, this.limitWords));
    } else {
      this.countWords = characters;
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
    const formControl = this.formDeck.get(field);
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
  hasExistsError(field: string, error: string): boolean {
    const value = this.hasError(field, error);
    const element = document.getElementById(field);
    value ? element?.classList.add('form__error-status') : element?.classList.remove('form__error-status');
    return value!;
  }

  /**
   * @description
   * Metodo para validar si el nombre del mazo ya existe
   * - Llama al metodo checkNameExists del servicio deckService, que recibe el nombre del mazo y el id del usuario como referencia de busqueda y retorna un true si el nombre ya existe.
   * @returns {ValidatorFn} Retorna un objeto con la validacion del nombre del mazo.
   */
  private nameExists(): ValidatorFn {
    return (control: AbstractControl) => {
      if (control.value) {
        const value = this._serviceDeck.checkNameExists(control.value, this.data.userId!);
        return value ? { nameExists: true } : null;
      }
      return null;
    };
  }

  /**
   * @description
   * Metodo que valida si el Etiqueta ya estan en el mazo.
   * - Obtiene el valor del campo Etiquetas del formulario y verifica si ya esta en el mazo.
   * - Si la Etiqueta ya esta en el mazo, agrega la clase selected al tag.
   * @param {string} tag Etiqueta a validar.
   * @param {number} index Indice de la Etiqueta.
   * @returns {boolean} Retorna un true si el Etiqueta ya esta en el mazo.
   */
  checkTagDeck(tag: string, index: number): boolean {
    const value = this.formDeck.get('tags')?.value.includes(tag);
    if (value) {
      const element = document.getElementById(index.toString());
      element?.classList.add('selected');
    }
    return value;
  }

  /**
   * @description
   * Metodo para agregar o quitar un Etiqueta del mazo.
   * - Obtiene el valor del campo Etiquetas del formulario.
   * - Si el tag esta seleccionado, agrega el Etiqueta al mazo, de lo contrario lo quita.
   * - Actualiza el valor del campo tags del formulario.
   * @param {any} event Evento del checkbox.
   * @param {string} tag Etiqueta a agregar o quitar. 
   */
  addTag(event: any, tag: string) {
    const tags = this.formDeck.get('tags')?.value;
    if (event.target.checked) {
      tags.push(tag);
    } else {
      const index = tags.indexOf(tag);
      tags.splice(index, 1);
    }
    this.formDeck.get('tags')?.setValue(tags);
  }
  
  /**
   * @description
   * Metodo para cambiar el estilo de la Etiqueta.
   * - Obtiene el elemento de la Etiqueta y verifica si tiene la clase selected.
   * - Si tiene la clase selected, la elimina, de lo contrario la agrega.
   * @param {number} index Indice de la Etiqueta. 
   */
  chageStyleTag(index: number) {
    const element = document.getElementById(index.toString());
    if (element?.classList.contains('selected')) {
      element?.classList.remove('selected');
    } else {
      element?.classList.add('selected');
    }
  }




}
