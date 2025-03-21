import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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

  onSubmit(event : Event) {
    event.preventDefault();
    console.log('onSubmit', this.formCreateUser.value);
  }

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

  enablePassword() {
    console.log('enablePassword');
  }

  changeVisibility(key :string) {
    key === 'password' ? this.viewPass = !this.viewPass : this.viewComparePass = !this.viewComparePass;
    this.transformVisibility(key);
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

  transformInvisibility(pass: string): string {
    return pass.replace(/./g, '*');
  }

  cleanInput(field : string){
    this.formCreateUser.get(field)?.setValue('');
  }

  hasError(field: string, error: string) {
    const formControl = this.formCreateUser.get(field);
    return formControl?.hasError(error);
  }

  hasExistsError(field: string, error: string) {
    const value = this.hasError(field, error);
    const element = document.getElementById(field);
    value ? element?.classList.add('form__error-status') : element?.classList.remove('form__error-status');
    return value;
  }

}
