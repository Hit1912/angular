import { CanDeactivateFn } from '@angular/router';
import { User } from '../user/user';
export const exitGuard: CanDeactivateFn<User> = () => {
  return confirm('Are you sure you want to leave this page?');
};
