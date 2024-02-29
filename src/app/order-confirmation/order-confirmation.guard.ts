import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {OrderService} from "../services/order.service";
import {UserService} from "../services/user.service";

export const orderConfirmationGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const orderService = inject(OrderService);
  const userService = inject(UserService);

  if (userService.getUser().userRole === "ADMIN") {
    return true;
  }

  if (!orderService.orderPlaced) {
    router.navigate(['auth']);
    return false;
  }
  return true;
};
