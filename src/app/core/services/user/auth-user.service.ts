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
  public userLogged = User.emptyUser();

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
      if (res.length > 0) {
        this._localStorageService.setItemStorage(res[0]);
        this.userLogged = res[0];
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
  }

  validatorNick(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) {
        return of(null);
      }
      return this._serviceUser.getUserByNick(control.value).pipe(
        map(exists => (
          exists ? { nickExists: true } : null
        )), 
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
        map(exists => (
          exists ? { emailExists: true } : null
        )), 
        catchError(() => of(null)) 
      );
    };
  }

  async getUserById(id:number): Promise<User> {
    try {
      const res = await lastValueFrom(this._serviceUser.getUserById(id));
      console.log(res[0]);
      if (res) {
        return res[0];
      }
    } catch (e) {
      console.error(e);
    }
    return User.emptyUser();
  }

  getUserLogged(): User {
    return this.userLogged;
  }

  async updateUser(user: User): Promise<User> {
    try {
      const res = await lastValueFrom(this._serviceUser.update(user));
      if (res) {
        this._localStorageService.setItemStorage(user);
        this.userLogged = user;
        return res;
      }
    } catch (e) {
      console.error(e);
    }
    return this.userLogged;
  }




}
