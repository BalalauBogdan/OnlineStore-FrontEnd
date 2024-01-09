import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {CartDialogComponent} from "../cart-dialog/cart-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart-button',
  standalone: true,
  imports: [
    NgIf,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './cart-button.component.html',
  styleUrl: './cart-button.component.css'
})
export class CartButtonComponent {
  cartService: CartService;

  constructor(public dialog: MatDialog, private cartService2: CartService) {
    this.cartService = cartService2;
  }

  openCartDialog(): void {
    const dialogRef = this.dialog.open(CartDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
