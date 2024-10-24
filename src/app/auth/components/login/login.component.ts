import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class LoginComponent implements OnInit {
  icons = faCircleXmark;
  formUser: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.formUser = this.fb.group({
      nick: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}


  ingresar() {
    if (this.areFieldsEmpty()) {
      this.handleError('Complete los campos requeridos.');
    } else {
      this.verifyUser();
    }
    console.log(this.formUser.value);
  }
  
  areFieldsEmpty(): boolean {
    return !this.nick?.value || !this.password?.value;
  }
  
  verifyUser() {
    if (this.nick?.value !== 'agus') {
      this.handleError('Usuario o contraseña incorrectos.');
    } else if (!this.password?.value) {
      this.handleError('Usuario o contraseña incorrectos.');
    }
  }
  
  handleError(errorMessage: string) {
    this.setErrorTheme();
    this.hasError(errorMessage);
  }

  setErrorTheme() {
    const idsElements = ['nick', 'password'];
    const controlIcons = document.querySelectorAll('.form__validate-status');

    idsElements.forEach((id) => {
      const control = document.getElementById(id);
      control?.classList.add('form__error');
    });
    controlIcons.forEach(icon => icon.classList.add('status__error'));
    setTimeout(() => {
      idsElements.forEach((id) => {
        const control = document.getElementById(id);
        control?.classList.remove('form__error');
      });
      controlIcons.forEach(icon => icon.classList.remove('status__error'));
    }, 3000);
  }

  hasErrorPassword() {
    const idIcon = document.getElementById('password');
    idIcon?.classList.add('form__error');
    setTimeout(() => {
      idIcon?.classList.remove('form__error');
    }, 3000);
  }

  hasError(value: string) {
    this._snackBar.open(`${value}`, '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000,
      panelClass: ['style-snackbar'],
    });
  }

  

  get nick() {
    return this.formUser.get('nick');
  }
  get password() {
    return this.formUser.get('password');
  }




}
