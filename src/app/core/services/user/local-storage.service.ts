import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { User } from '@app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  checkUserLogin(key: string): boolean {
    if (this.isBrowser()) {
      return localStorage.getItem(key) ? true : false;
    }
    return false;
  }

  setItemStorage(value: User): void {
    if (this.isBrowser()) {
      localStorage.setItem('user', JSON.stringify(value));
    }
  }

  getItemStorage(): string {
    if (this.isBrowser()) {
      const data = localStorage.getItem('user');
      return data?.toString() || '';
    }
    return '';
  }

  removeItemStorage(key: string): void {
    localStorage.removeItem(key);
  }

  clearStorage(): void {
    localStorage.clear();
  }

  getUserLogged(): User {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : new User();
  }

}
