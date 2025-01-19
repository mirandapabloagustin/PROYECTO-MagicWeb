import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  checkUserLogin(key: string): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(key) ? true : false;
    }
    return false;
  }

  setItemStorage(key: string, value: any): void {
    localStorage.setItem(key, value.toString());

  }

  getItemStorage(key: string): string | null {
    return localStorage.getItem(key);
  }

  removeItemStorage(key: string): void {
    localStorage.removeItem(key);
 
  }

  clearStorage(): void {
    localStorage.clear();

  }

}
