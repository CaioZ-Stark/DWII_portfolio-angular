import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';

export const authGuard: CanActivateFn = () => {

  const service = inject(LoginService);
  const router = inject(Router);

  if (service.estaLogado()) {
    return true;
  }

  return router.createUrlTree(['/login']);
};