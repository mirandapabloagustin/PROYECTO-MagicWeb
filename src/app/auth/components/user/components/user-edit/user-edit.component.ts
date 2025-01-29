import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '@app/core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {
  formEditProfile : FormGroup | undefined;
  

  constructor(
    public dialogRef: MatDialogRef<UserEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackbarService: SnackbarService
  ) { }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Submit');
    this.dialogRef.close();
    //generamos un mensaje con el servicio de snackbar en español
    this._snackbarService.emitSnackbar('Los cambios realizados se guardaron correctamente.', 'success', 'Guardado...');
   
  }

  onCancel() {
    this.dialogRef.close();
  }



}
