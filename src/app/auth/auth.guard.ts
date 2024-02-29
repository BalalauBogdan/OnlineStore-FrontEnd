import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "../services/user.service";

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const userService = inject(UserService);

  if (!userService.getUser().id) {
    router.navigate(['auth']);
    return false;
  }
  return true;
};
