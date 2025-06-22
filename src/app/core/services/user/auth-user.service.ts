import { Injectable } from '@angular/core';
import { catchError, lastValueFrom, map, of } from 'rxjs';
import { UserService } from './user.service';
import { User } from '@app/core/models/user.model';
import { v4 as uuidv4 } from 'uuid';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { LocalStorageService } from './local-storage.service';
import { changeStatusLogged } from '../guard/auth.guard';
import { SnackbarService } from '../snackbar/snackbar.service';

@Injectable({
  providedIn: 'root',
})

export class AuthUserService {
  public userLogged = User.emptyUser();

  constructor(
    private _serviceUser: UserService,
    private _localStorageService: LocalStorageService,
    private _serviceSnackbar: SnackbarService
  ) {}

  async getAllUsers(): Promise<User[]> {
    try {
      const res = await lastValueFrom(this._serviceUser.all());
      if (res.length > 0) {
        return res;
      }
    } catch (e) {
      console.error(e);
    }
    return [];
  }

  /**
   * @description
   * Metodo que registra un usuario
   * - Al usuario se le asigna un id y un idDeckRef.
   * - Se llama al servicio de usuario para crear un usuario.
   * @param {User} user - Usuario a registrar.
   * @returns {boolean} Retorna un booleano.
   */
  async register(user: User): Promise<boolean> {
    try {
      user.id = uuidv4();
      const res = await lastValueFrom(this._serviceUser.createUser(user));
      if (res) {
        return true;
      }
    } catch (e) {
      console.error(e);
      this._serviceSnackbar.errorServer();
    }
    return false;
  }

  /**
   * @description
   * Metodo que loguea un usuario
   * - Se llama al servicio de usuario para obtener un usuario por su nick y contraseña.
   * - Si el usuario existe y no esta dado de baja se guarda en el local storage y se cambia el estado de logueado.
   * @param {string} nick - Nick del usuario.
   * @param {string} password - Contraseña del usuario.
   * @returns {User | null} Retorna un usuario o null.
   */
  async login(nick: string, password: string): Promise<User | null> {
    try {
      const res = await lastValueFrom(this._serviceUser.authUser(nick, password));
      if (res.length > 0 ) {
        if(res[0].status === false){
          this._serviceSnackbar.emitSnackbar('Lo sentimos, este usuario esta dado de baja.','error', 'Contactenos por email.');
          return null;
        }else{ 
          this._localStorageService.setItemStorage(res[0]);
          this.userLogged = res[0];
          return res[0];
        }
      }else{
        this._serviceSnackbar.emitSnackbar('Usuario o contraseña incorrectos','error', 'Verifique los datos ingresados.');
      }
    } catch (e) {
      console.error(e);
      this._serviceSnackbar.errorServer();
    }
    return null;
  }

  /**
   * @description
   * Metodo que desloguea un usuario
   * - Se remueve el usuario del local storage y se cambia el estado de logueado.
   */
  logoutUser(): void {
    this._localStorageService.removeItemStorage('user');
    changeStatusLogged(false);
  }

  /**
   * @description
   * Metodo que valida si un nick ya existe
   * - Se llama al servicio de usuario para obtener un usuario por su nick.
   * - Si el usuario existe retorna un objeto con un mensaje, sino retorna null.
   * @returns { AsyncValidatorFn || null } Retorna un validador asincrono o null.
   */
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

  /**
   * @description
   * Metodo que valida si un email ya existe
   * - Se llama al servicio de usuario para obtener un usuario por su email.
   * - Si el usuario existe retorna un objeto con un mensaje, sino retorna null.
   * @returns { AsyncValidatorFn || null } Retorna un validador asincrono o null.
   */
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

  /**
   * @description
   * Metodo que obtiene un usuario por su id
   * - Se llama al servicio de usuario para obtener un usuario por su id.
   * @param {number} id - Id del usuario.
   * @returns {Promise<User>} Retorna un usuario.
   */
  async getUserById(id:string): Promise<User> {
    try {
      const res = await lastValueFrom(this._serviceUser.getById(id));
      if (res) {
        return res[0];
      }
    } catch (e) {
      console.error(e);
    }
    return User.emptyUser();
  }

  /**
   * @description
   * Metodo que obtiene el usuario logueado
   * @returns {User} Retorna un usuario.
   */
  getUserLogged(): User {
    return this.userLogged;
  }

  /**
   * @description
   * Metodo que actualiza un usuario
   * - Se llama al servicio de usuario para actualizar un usuario.
   * - Si se actualiza correctamente se guarda en el local storage.
   * @param {User} user - Usuario a actualizar.
   * @returns {User} Retorna un usuario.
   */
  async updateUser(user: User): Promise<User> {
    try {
      const res = await lastValueFrom(this._serviceUser.update(user));
      if (res) {
        this.userLogged = user;
        return res;
      }
    } catch (e) {
      console.error(e);
      this._serviceSnackbar.errorServer();
    }
    return this.userLogged;
  }


  /**
   * @description
   * Metodo que elimina un usuario
   * - Se llama al servicio de usuario para eliminar un usuario.
   * @param {string} id - Id del usuario a eliminar.
   * @returns {boolean} Retorna un booleano.
   */
  async deleteUser(id: string): Promise<boolean> {
    try {
      const res = await lastValueFrom(this._serviceUser.deleteUser(id));
      if (res) {
        this._localStorageService.removeItemStorage('user');
        return true;
      }
    } catch (e) {
      console.error(e);
      this._serviceSnackbar.errorServer();
    }
    return false;
  }


}
