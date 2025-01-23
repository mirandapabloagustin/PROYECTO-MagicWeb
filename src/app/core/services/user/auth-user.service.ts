import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, lastValueFrom, map, of } from 'rxjs';
import { UserService } from './user.service';
import { User } from '@app/core/models/user.model';
import { v4 as uuidv4 } from 'uuid';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { LocalStorageService } from './local-storage.service';
import { changeStatusLogged } from '../guard/auth.guard';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {


  private _userLogged = new BehaviorSubject<User | null>(null);
  public userLogged$ = this._userLogged.asObservable();


  constructor(
    private _serviceUser: UserService,
    private _localStorageService: LocalStorageService
  ) {}

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
      if (res.length > 0 && res[0].id) {
        this._localStorageService.setItemStorage(res[0].id);
        this._userLogged.next(res[0]);
        return res[0];
      }
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  logoutUser(): void {
    this._localStorageService.removeItemStorage('user');
    changeStatusLogged(false);
    this._userLogged.next(null);
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

  getUserLogged(): string | null {
    const userName = this._userLogged.getValue()?.name;
    return userName !== undefined ? userName : null;
  }

}
