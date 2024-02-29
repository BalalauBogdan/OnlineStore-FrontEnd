import { Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {HomeComponent} from "./home/home.component";
import {DashboardAdminComponent} from "./dashboard-admin/dashboard-admin.component";
import {DashboardUserComponent} from "./dashboard-user/dashboard-user.component";
import {OrderConfirmationComponent} from "./order-confirmation/order-confirmation.component";
import {authGuard} from "./auth/auth.guard";
import {dashboardAdminGuard} from "./dashboard-admin/dashboard-admin.guard";
import {orderConfirmationGuard} from "./order-confirmation/order-confirmation.guard";

export const routes: Routes = [
  {
    path: "auth", component: AuthComponent,
  },
  {
    path: "home", component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: "dashboard-admin", component: DashboardAdminComponent,
    canActivate: [authGuard, dashboardAdminGuard]
  },
  {
    path: "dashboard-user", component: DashboardUserComponent,
    canActivate: [authGuard]
  },
  {
    path: "order-confirmation", component: OrderConfirmationComponent,
    canActivate: [authGuard, orderConfirmationGuard]
  },
  {
    path: "", redirectTo: "auth", pathMatch: "full"
  }
];
