import { Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {HomeComponent} from "./home/home.component";
import {DashboardAdminComponent} from "./dashboard-admin/dashboard-admin.component";
import {DashboardUserComponent} from "./dashboard-user/dashboard-user.component";
import {OrderConfirmationComponent} from "./order-confirmation/order-confirmation.component";

export const routes: Routes = [
  {
    path: "auth", component: AuthComponent,
  },
  {
    path: "home", component: HomeComponent,
  },
  {
    path: "dashboard-admin", component: DashboardAdminComponent,
  },
  {
    path: "dashboard-user", component: DashboardUserComponent,
  },
  {
    path: "order-confirmation", component: OrderConfirmationComponent,
  },
  {
    path: "", redirectTo: "auth", pathMatch: "full"
  }
];
