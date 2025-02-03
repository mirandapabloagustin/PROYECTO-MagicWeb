import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '@app/core/services/snackbar/snackbar.service';
import { AuthUserService } from '@app/core/services/user/auth-user.service';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent {
  formEditProfile: FormGroup;
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
    private _builderForm: FormBuilder
  ) {
    this.formEditProfile = this._builderForm.group({
      nick: ['',
        [Validators.pattern(this.expresiones.nick)],
        [this._serviceUser.validatorNick()]
      ],
      name: ['',
        [Validators.pattern(this.expresiones.name)],
      ],
      email: ['',
        [Validators.email],
        [this._serviceUser.validatorEmail()]
      ],
      oldPass: ['',
        [this.checkPassword()]
      ],
      newPass: [''],
      description: ['', [Validators.minLength(100), Validators.maxLength(this.limitWords)]],
    });
  }

  isEmptyFields(form: FormGroup): boolean {
    let isEmpty = true;
    Object.keys(form.controls).forEach((key) => {
      if (form.get(key)?.value !== '') {
        isEmpty = false;
      }
    });
    return isEmpty;
  }

  transformInvisibility(pass: string): string {
    return pass.replace(/./g, '*');
  }

  transformVisibility(key: string) {
    const pass = document.getElementById(key);
    if (pass) {
      if (pass.getAttribute('type') === 'password') {
        pass.setAttribute('type', 'text');
      } else {
        pass.setAttribute('type', 'password');
      }
    }
  }

  changeVisibility() {
    this.visibilityOld = !this.visibilityOld;
    this.transformVisibility('oldPass');
  }

  changeVisibilityNew() {
    this.visibilityNew = !this.visibilityNew;
    this.transformVisibility('newPass');
  }

  countWordsDescription() {
    const description = this.formEditProfile.get('description')?.value;
    const characters = description ? description.length : 0;
    if (characters > this.limitWords) {
      this.formEditProfile
        .get('description')
        ?.setValue(description.slice(0, this.limitWords));
    } else {
      this.countWords = characters;
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const isempty = this.isEmptyFields(this.formEditProfile);
    if(!isempty) {
    if (this.formEditProfile.invalid) {
      this._snackbarService.emitSnackbar(
        'Por favor, rellena los campos correctamente.',
        'error',
        'Vuelva a intentarlo...'
      );
    } else {
      console.log(this.formEditProfile.value);
      this.dialogRef.close();
      this._snackbarService.emitSnackbar(
        'Los cambios realizados se guardaron correctamente.',
        'success',
        'Datos Guardados.'
      );
    }
  }else{
    this.dialogRef.close();
    this._snackbarService.emitSnackbar('No se han realizado cambios.', 'info', 'Datos sin cambios.');
  }
}

  onCancel() {
    this.dialogRef.close();
  }

  // VALIDACIONES DE LOS INPUTS

  checkPassword() : ValidatorFn {
    return (control: AbstractControl) => {
      const password = control.value;
      if (!password) {
        return null;
      }
      return password === this.data.password ? null : { passwordNotMatch: true };
    };
  } 



}
