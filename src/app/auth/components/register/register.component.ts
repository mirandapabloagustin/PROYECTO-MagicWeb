import { Component, ViewEncapsulation } from '@angular/core';
import {
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSnackBar } from '@angular/material/snack-bar';
import e from 'express';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, FontAwesomeModule],
  template: `
    <section class="register">
      <article class="register__content">
        <!-- Grupo Header -->
        <header class="register__content-header">
          <img class="header__img" src="favicon.ico" alt="Logo" />
          <h1 class="header__title">DesckForge</h1>
        </header>

        <form
          class="register__content-form"
          (submit)="createRegisterAccount()"
          [formGroup]="formUser"
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
                placeholder="Example: MasterForge"
                autocomplete="off"
                formControlName="nick"
              />

              <fa-icon
                class="form__validate-status"
                id="nick_icon"
                [icon]="iconError"
              ></fa-icon>

            </div>

            <!-- Error -->
            @if (hasFormError('nick')) {
            <div class="form__error">
              @if(hasRequiredError('nick')) {
              <span class="form__error-text"> Campo Requerido </span>
              } @if (hasPatternError('nick')) {
              <span class="form__error-text">
                No cumple con el formato de usuario.
              </span>
              }
            </div>
            }
          </div>

          
          <div class="form__group">
            <label for="name" class="form__label">Nombre</label>
            <div class="form__group-input">
              <input
                class="form__input"
                name="name"
                type="text"
                id="name"
                placeholder="Example: Juan Perez"
                autocomplete="off"
                formControlName="name"
              />
              <fa-icon
                class="form__validate-status"
                id="name_icon"
                [icon]="iconError"
              ></fa-icon>
            </div>

            <!-- Error -->
            @if (hasFormError('name')) {
            <div class="form__error">
              @if(hasRequiredError('name')) {
              <span class="form__error-text"> Campo Requerido </span>
              } @if (hasPatternError('name')) {
              <span class="form__error-text">
                No cumple con el formato de nombre.
              </span>
              }
            </div>
            }
            
          </div>

         
          <div class="form__group">
            <label for="email" class="form__label">Correo Electronico</label>
            <div class="form__group-input">
              <input
                class="form__input"
                name="email"
                type="email"
                id="email"
                placeholder="Example: desck@desckforge.com"
                autocomplete="off"
                formControlName="email"
              />
              
              <fa-icon
                class="form__validate-status"
                id="email_icon"
                [icon]="iconError"
              ></fa-icon>
              
            </div>

            @if (hasFormError('email')) {
            <div class="form__error">
              @if(hasRequiredError('email')) {
              <span class="form__error-text"> Campo Requerido </span>
              } @if (hasEmailError('email')) {
              <span class="form__error-text">
                No cumple con el formato de email.
              </span>
              }
            </div>
            }
          </div>

         
          <div class="form__group">
            <label form="country" class="form__label">Pais</label>
            <div class="form__group-input">
              <select
                name="country"
                class="form__input"
                id="country"
                required
                formControlName="country"
              >
                <option value="" disabled selected>Selecciona tu país</option>
                @for (country of countries ;track $index) {
                <option value="{{ country.code }}">{{ country.name }}</option>
                }
              </select>
            </div>
            @if (hasFormError('country')) {
            <div class="form__error">
              @if(hasRequiredError('country')) {
              <span class="form__error-text"> Campo Requerido </span>
              }
            </div>
            }
          </div>
          

        
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
                id="password_icon"
                [icon]="iconError"
              ></fa-icon>
              
            </div>
            @if (hasFormError('password')) {
            <div class="form__error">
              @if(hasRequiredError('password')) {
              <span class="form__error-text"> Campo Requerido </span>
              }
            </div>
            }
          </div>

      
          <div class="form__group">
            <label for="password2" class="form__label"
              >Repetir Contraseña</label
            >
            <div class="form__group-input">
              <input
                class="form__input"
                name="password2"
                type="password"
                id="password2"
                placeholder="*******"
                autocomplete="off"
                formControlName="password2"
              />
             
              <fa-icon
                class="form__validate-status"
                id="password2_icon"
                [icon]="iconError"
              ></fa-icon>
              
            </div>
            @if (hasFormError('password2')) {
            <div class="form__error">
              @if(hasRequiredError('password2')) {
              <span class="form__error-text"> Campo Requerido </span>
              }
            </div>
            }
          </div>
         

          <!-- Grupo Boton Enviar -->
          <div class="button-content">
            <button type="submit" class="button-style button-login ">
              CREAR CUENTA
            </button>
          </div>
        </form>

        <!-- Grupo Footer -->
        <footer class="register__content-footer">
          <p class="redirection__text">
            ¿Ya tienes una cuenta?
            <a href="login" class="redirection__link-text">Iniciar Sesión</a>
          </p>
        </footer>
      </article>
    </section>
  `,
  styleUrl: './register.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class RegisterComponent {
  formUser: FormGroup;

  iconError = faCircleXmark;

  countries = [
    { name: 'Argentina', code: 'AR' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Brasil', code: 'BR' },
    { name: 'Chile', code: 'CL' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Honduras', code: 'HN' },
    { name: 'México', code: 'MX' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Panamá', code: 'PA' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Perú', code: 'PE' },
    { name: 'República Dominicana', code: 'DO' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Venezuela', code: 'VE' },
  ];

  expresiones = {
    nick: /^[a-zA-Z0-9_\-]{4,}$/,
    name: /^[a-zA-ZÀ-ÿ\s]{2,30}$/,
  };

  constructor(
    private builderForm: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.formUser = this.builderForm.group({
      nick: [
        '',
        [Validators.required, Validators.pattern(this.expresiones.nick)],
      ],
      name: [
        '',
        [Validators.required, Validators.pattern(this.expresiones.name)],
      ],
      email: ['', [Validators.required, Validators.email]],
      country: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]],
    });
  }

  createRegisterAccount() {
    this.verifyFieldsForm();
      
  }

  hasFormError( field : string){
    const formControler = this.formUser.get(field);
    return formControler?.invalid && (formControler?.touched || formControler?.dirty);
  }

  hasRequiredError(field: string) {
    const formControler = this.formUser.get(field);
    this.changeStatusIcon(field);
    this.changeStatusTheme(field);
    return formControler?.hasError('required');
  }

  hasPatternError(field: string) {
    const formControler = this.formUser.get(field);
    return formControler?.hasError('pattern');
  }

  hasEmailError(field: string) {
    const formControler = this.formUser.get(field);
    return formControler?.hasError('email');
  }

  hasError(message: string) {
    this._snackBar.open(message, '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000,
      panelClass: ['style-snackbar'],
    });
  }


  changeStatusIcon(idName: string) {
    const iconElement = document.querySelector(`#${idName}_icon`);
    iconElement?.classList.add('form__status-active');
    setTimeout(() => {
      iconElement?.classList.remove('form__status-active');
    }, 500);
  }

  changeStatusTheme(idName: string) {
    const element = document.getElementById(idName);
    element?.classList.add('form__error-status');
    setTimeout(() => {
      element?.classList.remove('form__error-status');
    }, 1000);
  }

  changeAllStatusTheme(idsElements: string[]) {
    idsElements.forEach((id) => {
      this.changeStatusIcon(id);
      this.changeStatusTheme(id);
    }
    );
  }

  checkEmptyFields(form : FormGroup) : string[] {
    const formValues = form.getRawValue();
    const emptyFields: string[] = [];
    Object.keys(formValues).forEach((key) => {
      const value = formValues[key];
      if(!value || value.trim() === ''){
        emptyFields.push(key);
      }
    });
    return emptyFields;
  }

  verifyFieldsForm() {
    const idsElements = ['nick', 'name', 'email', 'country', 'password', 'password2'];
    const emptyFields: string[] = [];
    emptyFields.push(...this.checkEmptyFields(this.formUser));

    if(this.formUser.invalid){
      if(emptyFields.length > 0 && emptyFields.length < idsElements.length){
        this.changeAllStatusTheme(emptyFields);
        this.hasError('Complete los campos faltantes.');
      }else{
        this.changeAllStatusTheme(idsElements);
        this.hasError('Complete los campos requeridos.');
      }
    }else{
      if(this.password?.value !== this.password2?.value){
        this.changeAllStatusTheme(['password', 'password2']);
        this.hasError('Las contraseñas no coinciden.');
      }else{
        console.log(this.formUser.value);
      }
    }
  }

  get password() {
    return this.formUser.get('password');
  }

  get password2() {
    return this.formUser.get('password2');
  }

}
