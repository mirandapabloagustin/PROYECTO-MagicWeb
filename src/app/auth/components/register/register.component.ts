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
import { SnackbarService } from '@services/snackbar/snackbar.service';
import { AuthUserService } from '@services/user/auth-user.service';
import { User } from '@models/user.model';
import { Router } from '@angular/router';
import { HeaderComponent } from "@shared/header/header.component";
import { FooterComponent } from "@shared/footer/footer.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, FontAwesomeModule, HeaderComponent, FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class RegisterComponent {
  formUser: FormGroup;
  userRegister: User | undefined;

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
    private router: Router,
    private builderForm: FormBuilder,
    private _serviceSnackbar: SnackbarService,
    private _serviceUser: AuthUserService
  ) {
    this.formUser = this.builderForm.group({
      nick: [
        '', {
          validators: [Validators.required, Validators.pattern(this.expresiones.nick)],
          asyncValidators: [this._serviceUser.validatorNick()],
        }
      ],
      name: [
        '',
        [Validators.required, Validators.pattern(this.expresiones.name)],
      ],
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
          asyncValidators: [this._serviceUser.validatorEmail()]
        }],
      country: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]],
    });
  }


  createRegisterAccount() {
    const registerOk = this.verifyFieldsForm();
    if(registerOk) {
      const user = this.transformToUser(this.formUser);
      this._serviceUser.register(user).then((res) => {
        if (res) {
          this.router.navigate(['/login']);
          this._serviceSnackbar.emitSnackbar('Usuario registrado correctamente.', 'success', '¡Bienvenido!');
        } else {
          this.hasError('Ocurrió un error al registrar el usuario.', 'Intenta nuevamente.');
        }
      });
    }

  }

  hasFormError(field: string) {
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

  hasNickExistsError(field: string) {
    const formControler = this.formUser.get(field);
    return formControler?.hasError('nickExists');
  }

  hasEmailExistsError(field: string) {
    const formControler = this.formUser.get(field);
    return formControler?.hasError('emailExists');
  }

  hasError(message: string, whisper?: string) {
    this._serviceSnackbar.emitSnackbar(message, 'error', whisper);
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

  checkEmptyFields(form: FormGroup): string[] {
    const formValues = form.getRawValue();
    const emptyFields: string[] = [];
    Object.keys(formValues).forEach((key) => {
      const value = formValues[key];
      if (!value || value.trim() === '') {
        emptyFields.push(key);
      }
    });
    return emptyFields;
  }

  verifyFieldsForm(): boolean {

    const idsElements = ['nick', 'name', 'email', 'country', 'password', 'password2'];
    const emptyFields: string[] = [];
    emptyFields.push(...this.checkEmptyFields(this.formUser));

    if (this.formUser.invalid) {
      if (emptyFields.length > 0 && emptyFields.length < idsElements.length) {
        this.changeAllStatusTheme(emptyFields);
        this.hasError('Detectamos inconvenientes con algunos campos.', 'Complete los campos requeridos.');
      } else {
        this.changeAllStatusTheme(idsElements);
        this.hasError('Detectamos inconvenientes en el FORMULARIO.', 'Completa los campos requeridos.');
      }
    } else {
      if (this.password?.value !== this.password2?.value) {
        this.changeAllStatusTheme(['password', 'password2']);
        this.hasError('Detectamos un inconveniente con las contraseñas.', 'Las contraseñas no coinciden.');
      } else {
        return true;
      }
    }
    return false;
  }

  get password() {
    return this.formUser.get('password');
  }

  get password2() {
    return this.formUser.get('password2');
  }

  transformToUser(form: FormGroup): User {
    this.userRegister = new User();
    this.userRegister.id = '';
    this.userRegister.nick = form.get('nick')?.value;
    this.userRegister.name = form.get('name')?.value;
    this.userRegister.email = form.get('email')?.value;
    this.userRegister.country = form.get('country')?.value;
    this.userRegister.password = form.get('password')?.value;
    return this.userRegister;
  }




}
