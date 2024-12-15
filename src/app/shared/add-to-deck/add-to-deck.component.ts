import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '@app/core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-add-to-deck',
  standalone: true,
  imports: [],
  templateUrl: './add-to-deck.component.html',
  styleUrl: './add-to-deck.component.css'
})
export class AddToDeckComponent {

  constructor(
    private _matDialogRef: MatDialogRef<AddToDeckComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackbarService: SnackbarService
  ) {
  }

  selectDeck() {
    this.closeDialog();
    this._snackbarService.emitSnackbar('La carta se guardo correctamente', 'success');
  }


  closeDialog() {
    this._matDialogRef.close();
  }

}
