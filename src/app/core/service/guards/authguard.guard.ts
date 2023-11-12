import { Injectable, inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';
import { AuthTareaService } from 'src/app/core/service/auth-tarea.service';

export const authguardGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthTareaService);
  const router = inject(Router);
  const isLogin = authService.checkUserLogin();
  if (!isLogin) {
    router.navigate(['/auth/login']);
  }
  return true;
  
};
