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
  template: `
    <section class="login__group">
      <article class="login__group-content">
        <header class="login__content-header">
          <img class="login__header-img" src="favicon.ico" alt="Logo" />
          <h1 class="login__header-title">DesckForge</h1>
        </header>

        <form
          class="login__form"
          [formGroup]="formUser"
          (ngSubmit)="ingresar()"
        >
          <!-- Grupo usuario -->
          <div class="form__group">
            <label for="nick" class="form__label">Usuario</label>
            <div class="form__group-input">
              <input
                class="form__input"
                name="nick"
                type="text"
                id="nick"
                placeholder="Ingrese su usuario..."
                autocomplete="off"
                formControlName="nick"
              />
              
              <fa-icon
                class="form__validate-status"
                [icon]="icons"
              ></fa-icon>
              
              
            </div>

          </div>

          <!-- Grupo Password -->
          <div class="form__group">
            <label for="password" class="form__label">Contraseña</label>
            <div class="form__group-input">
              <input
                class="form__input"
                name="password"
                type="password"
                id="password"
                placeholder="*******"
                autocomplete="off"
                formControlName="password"
              />
              
              <fa-icon
                class="form__validate-status"
                [icon]="icons"
              ></fa-icon>
              
            </div>
            
          </div>

          <div class="button-content">
            <button type="submit" class="button-style button-login">
              INICIAR SESION
            </button>
          </div>
        </form>

        <footer class="login__content-footer">
          <p class="redirection__text">¿No tienes cuenta todavía en DesckForge?</p>
          <a class="login" href="register">Registrarse</a>
        </footer>
      </article>
    </section>
  `,
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
