import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthUserService } from '../user/auth-user.service';

export const authGuard: CanActivateFn = (route, state) => {

  const  authService = inject(AuthUserService);

  const router = inject(Router);

  const isLogin = authService.checkUserLogin();

  if (!isLogin) {
    router.navigate(['/error']);
    return false;
  }
  return true;
};
