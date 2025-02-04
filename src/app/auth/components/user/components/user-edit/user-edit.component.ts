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
import { User } from '@app/core/models/user.model';
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
    @Inject(MAT_DIALOG_DATA) public data: User,
    private _snackbarService: SnackbarService,
    private _serviceUser: AuthUserService,
    private _builderForm: FormBuilder
  ) {
    this.formEditProfile = this._builderForm.group({
      nick: [
        '',
        [Validators.pattern(this.expresiones.nick)],
        [this._serviceUser.validatorNick()],
      ],
      name: ['', [Validators.pattern(this.expresiones.name)]],
      email: ['', [Validators.email], [this._serviceUser.validatorEmail()]],
      oldPass: ['', [this.checkPassword()]],
      newPass: ['', [this.enableToChange()]],
      description: [
        '',
        [Validators.minLength(100), Validators.maxLength(this.limitWords)],
      ],
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

  cleanInput(field : string){
    this.formEditProfile.get(field)?.setValue('');
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const isempty = this.isEmptyFields(this.formEditProfile);
    if (!isempty) {
      if (this.formEditProfile.invalid) {
        this._snackbarService.emitSnackbar(
          'Por favor, rellena los campos correctamente.',
          'error',
          'Vuelva a intentarlo...'
        );
      } else {
        this.dialogRef.close(this.formEditProfile.value as User);
        this._snackbarService.emitSnackbar(
          'Los cambios realizados se guardaron correctamente.',
          'success',
          'Datos Guardados.'
        );
      }
    } else {
      this.dialogRef.close();
      this._snackbarService.emitSnackbar(
        'No se han realizado cambios.',
        'info',
        'Datos sin cambios.'
      );
    }
  }

  onCancel() {
    this.dialogRef.close();
  }



  // CACHT ERROR

  hasError(field: string, error: string) {
    const formControl = this.formEditProfile.get(field);
    return formControl?.hasError(error);
  }

  hasExistsError(field: string, error: string) {
    const value = this.hasError(field, error);
    const element = document.getElementById(field);
    value ? element?.classList.add('form__error-status') : element?.classList.remove('form__error-status');
    return value;
  }

  // VALIDACION PASSWORD
  checkPassword(): ValidatorFn {
    return (control: AbstractControl) => {
      const password = control.value;
      if (!password) {
        return null;
      }
      return password === this.data.password
        ? null
        : { passwordNotMatch: true };
    };
  }

  enableToChange(): ValidatorFn {
    return (control: AbstractControl) => {
      const password = control.value;
      if (!password) {
        return null;
      }

      const value = this.formEditProfile.get('oldPass')?.value;


      return value === this.data.password
        ? null
        : { enableToChange: true };

    };
  }
}
