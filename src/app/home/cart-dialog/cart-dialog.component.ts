import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {NgForOf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {Product} from "../../models/Product";
import {CartService} from "../../services/cart.service";
import {UserService} from "../../services/user.service";
import {OrderService} from "../../services/order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    NgForOf,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './cart-dialog.component.html',
  styleUrl: './cart-dialog.component.css'
})
export class CartDialogComponent {
  productArray: Array<Product> = [];

  constructor(private router: Router, private cartService: CartService, private userService: UserService, private orderService: OrderService) {
    this.productArray = cartService.cart;
  }

  onDeleteProduct(product: Product) {
    console.log(this.userService.getUser())
    this.cartService.removeFromCart(product);
  }

  onBuy() {
    this.orderService.placeOrder(this.userService.getUser(), this.productArray).subscribe((response: any) => {
      console.log(response);
      this.cartService.cart = [];
    });
    this.router.navigate(["/", "order-confirmation"]);
  }
}
