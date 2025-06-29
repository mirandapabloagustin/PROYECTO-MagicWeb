import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SnackbarService } from '@services/snackbar/snackbar.service';
import { AuthUserService } from '@services/user/auth-user.service';
import { Router } from '@angular/router';
import { HeaderComponent } from "@shared/header/header.component";
import { FooterComponent } from "@shared/footer/footer.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule, HeaderComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class LoginComponent implements OnInit {
  icons = faCircleXmark;
  formUser: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private _serviceUser : AuthUserService,
    private _serviceSnackbar: SnackbarService
  ) {
    this.formUser = this.fb.group({
      nick: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}


  /**
   * 
   */
  loginUser() {
    if (this.areFieldsEmpty()) {
      this.setErrorTheme();
      this.hasError('Detectamos inconvenientes con algunos campos.', 'Complete los campos requeridos.');
    } else {
      this.verifyUser();
    }
  }
  
  areFieldsEmpty(): boolean {
    return !this.nick?.value || !this.password?.value;
  }
  
  async verifyUser() {
    try{
      const res = await this._serviceUser.login(this.nick?.value, this.password?.value);
      if(res){
        this.router.navigate(['/main']);
        this._serviceSnackbar.emitSnackbar(`¡ Bienvenido ${res.nick} !`, 'success','¡ Disfruta de Magic: The Gathering !');
      }
    }catch(e){
      console.error(e);
    }
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

  hasError(message: string, whisper?: string) {
    this._serviceSnackbar.emitSnackbar(message, 'error', whisper);
  }

  

  get nick() {
    return this.formUser.get('nick');
  }
  get password() {
    return this.formUser.get('password');
  }




}
