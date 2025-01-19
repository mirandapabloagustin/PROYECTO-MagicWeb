import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../user/local-storage.service';
import { BehaviorSubject } from 'rxjs';


export const authGuard: CanActivateFn = (route, state) => {


  const storageService = inject(LocalStorageService);

  const router = inject(Router);

 

  const isLogin = storageService.checkUserLogin('user');

  console.log(isLogin, 'AUTENTIFICADOR');

  if (!isLogin) {
    router.navigate(['/landing']);
    return false;
  }
  return true;
};
