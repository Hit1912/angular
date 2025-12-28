import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { Authservice } from '../service/authservice';
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(Authservice);
  const isLoggedIn = authService.isAuthenticated(); //  Dynamic check
  if (!isLoggedIn) {
    alert('Access denied! Redirecting to User page...');
    router.navigateByUrl('/user');
    return false;
  }
  return true;
};
