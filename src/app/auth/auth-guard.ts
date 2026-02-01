import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let username = window.prompt('Verify you are admin. Enter your name.')
  if(username?.toLowerCase() == 'amar') return true;
  
  else return false;
};
