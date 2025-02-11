import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DeckService } from '@app/core/services/deck/deck.service';
@Component({
  selector: 'app-new-deck',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-deck.component.html',
  styleUrl: './new-deck.component.css'
})
export class NewDeckComponent {

  formCreateDeck : FormGroup;
  countWords = 0;
  limitWords = 150;
  tagsDecks = ['Aggro','Control','Combo','Midrange','Ramp','Stax','Tempo']

  constructor(
    public dialogRef: MatDialogRef<NewDeckComponent>,
    private _deckService: DeckService,
    private _builderForm: FormBuilder
  ) {
    this.formCreateDeck = this._builderForm.group({
      name: ['',
        [Validators.required, Validators.minLength(4), Validators.maxLength(30)]
      ],
      description: ['',
        [Validators.required, Validators.minLength(5),Validators.maxLength(300),Validators.pattern(/^[a-zA-ZÀ-ÿ0-9\s.,!?()'":-]/)]
      ],
      tags: [[],
        [Validators.required]
      ],
    });
  }

  createNewDeck(event: Event) {
    console.log(this.formCreateDeck.value);
  }

  onCancel() {
    this.dialogRef.close();
  }

  addTag( event : any,tag: string) {
    const tags = this.formCreateDeck.get('tags')?.value;    
    if(event.target.checked){
      tags.push(tag);
    }else{      
      const index = tags.indexOf(tag);
      tags.splice(index,1);
    }
    console.log(tags);
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
