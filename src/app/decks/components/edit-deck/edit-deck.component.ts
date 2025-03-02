import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Deck } from '@app/core/models/deck.model';

@Component({
  selector: 'app-edit-deck',
  standalone: true,
  imports: [],
  templateUrl: './edit-deck.component.html',
  styleUrl: './edit-deck.component.css'
})
export class EditDeckComponent {
  formDeck!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Deck,
    private _builderForm: FormBuilder
  ) { 
    this.formDeck = this._builderForm.group({
      name: [this.data.name],
      description: [this.data.description],
    });
  }

  ngOnInit(): void {
    console.log(this.data);
  }

}
