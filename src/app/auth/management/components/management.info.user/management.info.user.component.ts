import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@app/core/models/user.model';
import { AuthUserService } from '@app/core/services/user/auth-user.service';
import { HeaderComponent } from '@shared/header/header.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { ConfirmDialogComponent } from '@app/shared/confirm-dialog/confirm-dialog.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RoleUser } from '@app/core/enums/access.user.enum';
import { SnackbarService } from '@app/core/services/snackbar/snackbar.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-management.info.user',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './management.info.user.component.html',
  styleUrl: './management.info.user.component.css',
})
export class ManagementInfoUserComponent {
  formInfo!: FormGroup;
  user!: User;
  edit = false;
  visibility= false;
  countWords = 0;
  limitWords = 300;

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
    private route: Router,
    private router: ActivatedRoute,
    private _serviceUser: AuthUserService,
    private _snackbar: SnackbarService,
    private _matDialog: MatDialog,
    private _fb: FormBuilder
  ) {
    this.router.params.subscribe(async (params) => {
      const id = params['id'];
      if (!id) {
        this.route.navigate(['/management']);
        this._snackbar.cantGetAccessToUser();
      } else {
        this._serviceUser.getUserById(id).then((res) => {
          if (res.id) {
            this.user = res;
            this.formInfo = this._fb.group({
              role: [
                { value: '', disabled: !this.edit },
              ],
              nick: [
                { value: '', disabled: !this.edit },
                [
                  Validators.pattern(/^[a-zA-Z0-9_\-]{4,}$/),
                ],
                [this._serviceUser.validatorNick()],
              ],
              name: [{ value: '', disabled: !this.edit },
                [Validators.pattern(/^[a-zA-ZÀ-ÿ\s]{2,30}$/)],
              ],
              email: [{ value: '', disabled: !this.edit },
                [Validators.email],
                [this._serviceUser.validatorEmail()],
              ],
              country: [{ value: '', disabled: !this.edit }],
              password: [this.user.password],
              description: [{ value: this.user.description, disabled: !this.edit },
                [Validators.minLength(100), Validators.maxLength(this.limitWords)],
              ],
              status: [{ value: '', disabled: !this.edit }],
            });
          } else {
            this.route.navigate(['/management']);
            this._snackbar.cantGetAccessToUser();
          }
        });
      }
    });
  }





  editUser() {
    const dialogConfirmRef = this._matDialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Editar Usuario',
        message: '¿Estás seguro que deseas editar este Perfil?'
      }
    });

    dialogConfirmRef.afterClosed().subscribe(result => {
      if (result) {
        this.edit = !this.edit;
        this.edit ? this.formInfo.enable() : this.formInfo.disable();
        this.countWords = this.user.description!.length;
        this._setStyles();
      }
    });
  }

  saveEditUser() {
    const dialogConfirmRef = this._matDialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Editar Usuario',
        message: '¿Estás seguro que deseas guardar los cambios?'
      }
    });

    dialogConfirmRef.afterClosed().subscribe(result => {
      this.edit = false;
      this.edit ? this.formInfo.enable() : this.formInfo.disable();
      this._setStyles();
      if (result) {
        console.log(this.formInfo.value);
      }else{
        this._snackbar.nonChanges();
      }
    });
  }

  getUserStatus() {
    return this.user.status ? '✅' : '🚫';
  }

  getRoles() {
    return Object.keys(RoleUser);
  }

  getUserRoleUpper() {
    return this.user.role!.toUpperCase();
  }

  changeVisibility(){
    this.visibility = !this.visibility;
    this.transformVisibility('password');
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

  setImgVisibility(status : boolean):string {
    return this.visibility ? 'icons/edit/visible.png' : 'icons/edit/invisible.png';
  }

  countWordsDescription() {
    let description = this.formInfo.get('description')?.value;
    const words = description.length;
    if (words >= this.limitWords-1) {
      description = description.slice(0, this.limitWords);
      this.formInfo.get('description')?.setValue(description,{ emitEvent: false }); 
    }
    this.countWords = description.length;
  }

  private _setStyles(){
    this.changeSelect('country');
    this.changeSelect('role_user');
    this.changeSelect('status');
    for (const key in this.formInfo.controls) {
      if (key !== 'role' && key !== 'country' && key !== 'status') {
        this.changeStyleInputs(key);
      }
    }

  }

  changeStyleInputs(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle('input-edit_form', this.edit);
      element.classList.toggle('form-input_selected', !this.edit);
    }
  }

  changeSelect(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle('select-edit_form', this.edit);
      element.classList.toggle('select_form', !this.edit);
    }
  }

  elementTouched(field: string): boolean {
    const formControl = this.formInfo.get(field);
    return formControl?.touched || formControl?.dirty || false;
  }

  hasError(field: string, error: string) {
    const formControl = this.formInfo.get(field);
    return formControl?.hasError(error);
  }

  hasExistsError(field: string, error: string) {
    const value = this.hasError(field, error);
    const element = document.getElementById(field);
    value
      ? element?.classList.add('form__error-status')
      : element?.classList.remove('form__error-status');
    return value;
  }
}
