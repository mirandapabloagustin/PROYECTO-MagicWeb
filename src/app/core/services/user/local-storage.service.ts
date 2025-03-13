import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { User } from '@app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  /**
   * @description
   * Metodo que verifica si el entorno es un navegador.
   * @returns { boolean } Retorna un booleano.
   */
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  /**
   * @description
   * Metodo que verifica si el usuario esta logueado.
   * @param { string } key - Clave del usuario.
   * @returns { boolean } Retorna un booleano.
   */
  checkUserLogin(key: string): boolean {
    if (this.isBrowser()) {
      return localStorage.getItem(key) ? true : false;
    }
    return false;
  }

  /**
   * @description
   * Metodo que guarda un item en el local storage.
   * @param { string } value - Valor a guardar.
   */
  setItemStorage(value: User): void {
    if (this.isBrowser()) {
      localStorage.setItem('user', JSON.stringify(value));
    }
  }

  /**
   * @description
   * Metodo que obtiene un item del local storage.
   * @returns { string } Retorna un string.
   */
  getItemStorage(): string {
    if (this.isBrowser()) {
      const data = localStorage.getItem('user');
      return data?.toString() || '';
    }
    return '';
  }

  /**
   * @description
   * Metodo que remueve un item del local storage.
   * @param { string } key - Clave del item a remover.
   */
  removeItemStorage(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * @description
   * Metodo que limpia el local storage.
   */
  clearStorage(): void {
    localStorage.clear();
  }

  /**
   * @description
   * Metodo que obtiene el usuario logueado.
   * @returns { User } Retorna un usuario.
   */
  getUserLogged(): User {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : new User();
  }

}
