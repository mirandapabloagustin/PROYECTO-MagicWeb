import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section>
      <article>
        <header>
          <img src="favicon.ico" alt="Logo" />
          <h1>DesckForge</h1>
        </header>

        <form [formGroup]="formulario" (ngSubmit)="ingresar()">
          <div>
            <label for="usuario">Usuario</label>
            <input
              class="styled-input"
              type="email"
              id="usuario"
              placeholder="example@deskforge.com"
              required
              autocomplete="off"
              formControlName="usuario"
            />
          </div>
          <div>
            <label for="contrasenia">Contraseña</label>
            <input
              class="styled-input"
              type="password"
              id="contrasenia"
              placeholder="*********"
              required
              autocomplete="off"
              formControlName="contrasenia"
            />
          </div>
          <div class="button-content">
            <button type="submit" class="button-style button-login">
              INICIAR SESION
            </button>
          </div>
        </form>

        <footer>
          <span>¿No tienes cuenta todavía en DesckForge?</span>
          <a class="register" href="register">Registrarse</a>
        </footer>
      </article>
    </section>
  `,
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;


  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.formulario = this.fb.group({
      usuario: ['', [Validators.required,Validators.email]],
      contrasenia: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  ingresar() {
    if (this.formulario.invalid) {
      this.markAllAsTouched();
      this.error("Campos inválidos. Por favor, verificarlos.");
      return;
    }

    const usuario = this.formulario.value.usuario;
    const contrasenia = this.formulario.value.contrasenia;

    console.log('Usuario: ', usuario);
    console.log('Contraseña: ', contrasenia);

    this.validateUser();
  }

  validateUserEmail(): boolean {
    return this.formulario.value.usuario === 'agus@gmail.com';
  }

  validateUserPassword(): boolean {
    return this.formulario.value.contrasenia === '1234';
  }

  validateUser() {
    if(this.validateUserEmail() && this.validateUserPassword()){

        console.log('Ingreso correcto');
    }else{
      this.error("Usuario o contraseña incorrectos");
    }
  }

  error(value:string) {
    this._snackBar.open(`${value}`, '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000,
      panelClass: ['style-snackbar'],
    });
  }

  markAllAsTouched() {
    this.formulario.markAllAsTouched();
  }

}
