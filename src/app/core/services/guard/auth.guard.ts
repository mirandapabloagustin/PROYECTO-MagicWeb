import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../user/local-storage.service';
import { BehaviorSubject } from 'rxjs';

const userLogged = new BehaviorSubject<boolean>(false);
const userLogged$ = userLogged.asObservable();


export const authGuard: CanActivateFn = (route, state) => {
  const storageService = inject(LocalStorageService);
  const router = inject(Router);

 

  const isLogin = storageService.checkUserLogin('user');
  changeStatusLogged(isLogin);


  if (!isLogin) {
    router.navigate(['/landing']);
    return false;
  }
  return true;
};

export const statusLogged = userLogged$;

export const changeStatusLogged = (status: boolean) => {
  userLogged.next(status);
}