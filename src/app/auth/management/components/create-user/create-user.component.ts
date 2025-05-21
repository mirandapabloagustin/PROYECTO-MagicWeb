import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '@app/core/models/user.model';
import { SnackbarService } from '@app/core/services/snackbar/snackbar.service';
import { AuthUserService } from '@core/services/user/auth-user.service';
import { RoleUser } from '@enums/access.user.enum';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  formCreateUser: FormGroup;
  viewPass = false;
  viewComparePass = false;
  expresiones = {
    nick: /^[a-zA-Z0-9_\-]{4,}$/,
    name: /^[a-zA-ZÀ-ÿ\s]{2,30}$/,
  };

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

  constructor(
    private dialogRef: MatDialogRef<CreateUserComponent>,
    private _builderForm: FormBuilder,
    private _serviceUser: AuthUserService,
    private _serviceSnackbar: SnackbarService
  ) {
    this.formCreateUser = this._builderForm.group({
      nick : ['', 
        [Validators.required,Validators.pattern(this.expresiones.nick)],
        [this._serviceUser.validatorNick()]
      ],
      name : ['',
        [Validators.required,Validators.pattern(this.expresiones.name)]
      ],
      email : ['',
        [Validators.email,Validators.required],
        [this._serviceUser.validatorEmail()]
      ],
      password : ['',
        [Validators.required]
      ],
      compare_pass : ['',
        [Validators.required,this.comparePasswords()]
      ],
      role : ['',
        [Validators.required]
      ],
      country : ['',
        [Validators.required]
      ],
    });
  }


/**
 * @description
 * Metodo que se ejecuta al enviar el formulario
 * - Si el formulario es valido se crea un nuevo usuario.
 * - Se llama al servicio de usuario para registrar un usuario.
 * - Si el usuario se registro correctamente se cierra el modal.
 * @param {Event} event - Evento del formulario.
 * @returns {void} No retorna nada.
 */
  onSubmit(event : Event) {
    if (this.formCreateUser.valid) {
      const newUser :User = new User(this.formCreateUser.value);
      this._serviceUser.register(newUser).then((res) => {
        if(res) {
          this._serviceSnackbar.userCreated();
          this.dialogRef.close(newUser);
        }
      });
    }
  }

  /**
   * @description
   * Metodo que compara las contraseñas
   * - Se compara la contraseña con la contraseña de comparacion.
   * @returns {ValidatorFn} Retorna una funcion que valida si las contraseñas son iguales.
   */
  comparePasswords() : ValidatorFn {
    return (control: AbstractControl) => {
      if(!this.formCreateUser) {
        return () => null;
      }
      const value = this.formCreateUser.get('password')?.value;
      const password = control.value;
      if (!password) {
        return null;
      }
      return value === password ? null : { notEqual: true};
    };
  }

  /**
   * @description
   * Metodo que cambia el estado de visibilidad de un campo
   * - Se obtiene el campo a traves de su llave, en el caso que se cambie la visibilidad de la contraseña se cambia el estado de la variable.
   * @param {string} key - Llave del campo.
   * @returns {void} No retorna nada.
   */
  changeVisibility(key :string) {
    key === 'password' ? this.viewPass = !this.viewPass : this.viewComparePass = !this.viewComparePass;
    this.transformVisibility(key);
  }

  /**
   * @description
   * Metodo que transforma la visibilidad de un campo
   * - Se obtiene el campo a traves de su llave, si el campo es de tipo password se cambia a texto y viceversa.
   * @param {string} key - Llave del campo.
   * @returns {void} No retorna nada.
   */
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

  /**
   * @description
   * Metodo que transforma la visibilidad de un campo a invisibilidad
   * @param {string} pass - Contraseña a transformar. 
   * @returns {string} Retorna la contraseña transformada.
   */
  transformInvisibility(pass: string): string {
    return pass.replace(/./g, '*');
  }

/**
 * @description
 * Metodo que limpia un campo del formulario
 * @param {string} field  - Campo a limpiar.
 * @returns {void} No retorna nada.
 */
  cleanInput(field : string){
    this.formCreateUser.get(field)?.setValue('');
  }

  /**
   * @description
   * Metodo que valida si un campo tiene un error.
   * @param {string} field - Campo a validar. 
   * @param {string} error - Error a validar. 
   * @returns {boolean} Retorna un booleano.
   */
  hasError(field: string, error: string) {
    const formControl = this.formCreateUser.get(field);
    return formControl?.hasError(error);
  }

  /**
   * @description
   * Metodo que valida si un campo tiene un error y le agrega una clase.
   * @param {string} field - Campo a validar. 
   * @param {string} error - Error a validar. 
   * @returns {boolean} Retorna un booleano.
   */
  hasExistsError(field: string, error: string) {
    const value = this.hasError(field, error);
    const element = document.getElementById(field);
    value ? element?.classList.add('form__error-status') : element?.classList.remove('form__error-status');
    return value;
  }

}
