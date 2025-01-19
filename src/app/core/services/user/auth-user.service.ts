import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, lastValueFrom, map, of } from 'rxjs';
import { UserService } from './user.service';
import { User } from '@app/core/models/user.model';
import { v4 as uuidv4 } from 'uuid';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  private _user?: User;
  private _userLogged = new BehaviorSubject<string>('');
  public userLogged$ = this._userLogged.asObservable();


  constructor(
    private _serviceUser: UserService,
    private _localStorageService: LocalStorageService
  ) {}

  get user() {
    return this._user;
  }


  async register(user: User): Promise<boolean> {
    try {
      user.id = uuidv4();
      const res = await lastValueFrom(this._serviceUser.createUser(user));
      if (res) {
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
        if (this._user?.id) {
          this._localStorageService.setItemStorage('user', this._user.id);
          this._userLogged.next(this._user.nick ?? '');
        }
        return this._user;
      }
    } catch (e) {
      console.error(e);
    }
    return null;
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
