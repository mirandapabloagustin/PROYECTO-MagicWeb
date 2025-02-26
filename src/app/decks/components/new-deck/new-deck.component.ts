import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Deck } from '@app/core/models/deck.model';
import { User } from '@app/core/models/user.model';
import { AuthDeckService } from '@app/core/services/deck/auth.deck.service';
import { SnackbarService } from '@app/core/services/snackbar/snackbar.service';
import { LocalStorageService } from '@app/core/services/user/local-storage.service';
@Component({
  selector: 'app-new-deck',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-deck.component.html',
  styleUrl: './new-deck.component.css'
})
export class NewDeckComponent  {
  formCreateDeck : FormGroup;
  countWords = 0;
  limitWords = 150;
  tagsDecks = ['Aggro','Control','Combo','Midrange','Ramp','Stax','Tempo']

  constructor(
    public dialogRef: MatDialogRef<NewDeckComponent>,
    private _deckService: AuthDeckService,
    private _builderForm: FormBuilder,
    private _snackbarService: SnackbarService,
    private _local : LocalStorageService
  ) {
    this.formCreateDeck = this._builderForm.group({
      name: ['',
        [Validators.required, Validators.minLength(4), Validators.maxLength(30)]
      ],
      description: ['',
        [Validators.required, Validators.minLength(5),Validators.maxLength(300),Validators.pattern(/^[a-zA-ZÀ-ÿ0-9\s.,!?()'":-]/)]
      ],
      tags: [[],
      ],
    });
  }


  async createNewDeck(event: Event) {
    event.preventDefault(); 
    const deck = this.toDeckClass();
    try{
      const res = await this._deckService.createDeck(deck);
      res ? this.dialogRef.close(true) : this.dialogRef.close(false);
    }catch(e){
      this._snackbarService.emitSnackbar('Tuvimos inconvenientes para poder generar tu mazo.', 'error','Vuele a intentarlo mas tarde...');
    }
  }

  toDeckClass(): Deck{
    const deck = new Deck();
    deck.name = this.formCreateDeck.get('name')?.value;
    deck.description = this.formCreateDeck.get('description')?.value;
    deck.tags = this.formCreateDeck.get('tags')?.value;
    deck.createdAt = new Date();
    deck.updatedAt = new Date();
    return deck;
  }

  addTag( event : any,tag: string) {
    const tags = this.formCreateDeck.get('tags')?.value;    
    if(event.target.checked){
      tags.push(tag);
    }else{      
      const index = tags.indexOf(tag);
      tags.splice(index,1);
    }
    this.formCreateDeck.get('tags')?.setValue(tags);
  }
  chageStyleTag(index: number) {
    const element = document.getElementById(index.toString());
    if(element?.classList.contains('selected')){
      element?.classList.remove('selected');
    }else{
      element?.classList.add('selected');
    }
  }

    // CACHT ERROR

    hasError(field: string, error: string) {
      const formControl = this.formCreateDeck.get(field);
      return formControl?.hasError(error);
    }
  
    hasExistsError(field: string, error: string) {
      const value = this.hasError(field, error);
      const element = document.getElementById(field);
      value ? element?.classList.add('form__error-status') : element?.classList.remove('form__error-status');
      return value;
    }

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
