import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '@app/core/services/snackbar/snackbar.service';
import { AuthUserService } from '@app/core/services/user/auth-user.service';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  formEditProfile : FormGroup;
  inputTextArea = 'Escribe algo sobre ti';
  visibilityOld = false;
  visibilityNew = false;
  countWords = 0;
  limitWords = 300;

  expresiones = {
    nick: /^[a-zA-Z0-9_\-]{4,}$/,
    name: /^[a-zA-ZÀ-ÿ\s]{2,30}$/,
  };

  constructor(
    public dialogRef: MatDialogRef<UserEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackbarService: SnackbarService,
    private _serviceUser: AuthUserService,
    private _builderForm : FormBuilder
  ) {
        this.formEditProfile = this._builderForm.group({
          nick: [
            '', {
              validators: [Validators.pattern(this.expresiones.nick)],
              asyncValidators: [this._serviceUser.validatorNick()],
            }
          ],
          name: [
            '',
            [Validators.pattern(this.expresiones.name)],
          ],
          email: [
            '',
            {
              validators: [Validators.email],
              asyncValidators: [this._serviceUser.validatorEmail()]
            }],
          oldPass: [''],
          newPass: ['', [Validators.required]],
          description: ['', [Validators.minLength(100),Validators.maxLength(300)]],
        });

   }

   transformInvisibility(pass : string):string {
    return pass.replace(/./g, '*');
   }

   transformVisibility(key: string) {
    const pass = document.getElementById(key);
    if(pass){
      if(pass.getAttribute('type') === 'password'){
        pass.setAttribute('type', 'text');
      }else{
        pass.setAttribute('type', 'password');
      }
    }
   }


   changeVisibility(){
    this.visibilityOld = !this.visibilityOld;
    this.transformVisibility('oldPass'); 
   }

   changeVisibilityNew(){
    this.visibilityNew = !this.visibilityNew;
    this.transformVisibility('newPass');
  }

  countWordsDescription(){
    this.checkInput('description');
    const description = this.formEditProfile.get('description')?.value;
    const characters = description ? description.length : 0;
    if(characters > this.limitWords){
      this.formEditProfile.get('description')?.setValue(description.slice(0, this.limitWords));
    }else{
      this.countWords = characters;
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if(this.formEditProfile.invalid){
      this._snackbarService.emitSnackbar('Por favor, rellena los campos correctamente.', 'error', 'Vuelva a intentarlo...');
    }else{
      console.log(this.formEditProfile.value);
      this.dialogRef.close();
      this._snackbarService.emitSnackbar('Los cambios realizados se guardaron correctamente.', 'success', 'Datos Guardados.');
    }
   
  }

  onCancel() {
    this.dialogRef.close();
  }


  // VALIDACIONES DE LOS INPUTS

  checkInput( formInput : string){
    const status = this.formEditProfile.get(formInput)?.valid;
    const value = document.getElementById(formInput);
    if(status === false){
      
        value?.classList.add('form__status-active');
      }else{
        value?.classList.remove('form__status-active');
      }
  }



}
