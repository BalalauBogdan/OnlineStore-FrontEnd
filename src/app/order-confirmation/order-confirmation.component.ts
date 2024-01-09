import { Component } from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {CartButtonComponent} from "../home/cart-button/cart-button.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [
    MatSidenavModule,
    CartButtonComponent,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css'
})
export class OrderConfirmationComponent {

  constructor(private router: Router) { }

  onChangePage(page: String) {
    this.router.navigate(["/", page]);
  }
}
