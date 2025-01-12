import { Injectable } from '@angular/core';
import { catchError, lastValueFrom, map, of } from 'rxjs';
import { UserService } from './user.service';
import { User } from '@app/core/models/user.model';
import { v4 as uuidv4 } from 'uuid';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  private _user?: User;

  constructor(private _serviceUser: UserService) {}

  get user() {
    return this._user;
  }


  async register(user: User): Promise<boolean> {
    try {
      user.id = uuidv4();
      const res = await lastValueFrom(this._serviceUser.createUser(user));
      if (res) {
        this._user = user;
        return true;
      }
    } catch (e) {
      console.error(e);
    }
    return false;
  }

  async login(nick: string, password: string): Promise<User | null> {
    try {
      const res = await lastValueFrom(this._serviceUser.authUser(nick, password));
      if (res.length > 0) {
        this._user = res[0];
        localStorage.setItem('token', this._user.toString());
        return this._user;
      }
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  checkUserLogin(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  validatorNick(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) {
        return of(null);
      }
      return this._serviceUser.getUserByNick(control.value).pipe(
        map(exists => (exists ? { nickExists: true } : null)), 
        catchError(() => of(null)) 
      );
    };
  }

  validatorEmail(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) {
        return of(null);
      }
      return this._serviceUser.getUserByEmail(control.value).pipe(
        map(exists => (exists ? { emailExists: true } : null)), 
        catchError(() => of(null)) 
      );
    };
  }

}
