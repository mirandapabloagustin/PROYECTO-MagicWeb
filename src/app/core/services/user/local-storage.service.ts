import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

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

  setItemStorage(value: any): void {
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

}
