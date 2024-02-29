import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {NgClass, NgForOf} from "@angular/common";
import {MatSidenavModule} from "@angular/material/sidenav";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {MatCardModule} from "@angular/material/card";
import {Product} from "../models/Product";
import {ProductService} from "../services/product.service";
import {CartButtonComponent} from "./cart-button/cart-button.component";
import {CartService} from "../services/cart.service";
import {User} from "../models/User";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, NgClass, MatSidenavModule, MatCardModule, NgForOf, CartButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  productArray: Product[] = [];

  constructor(private router: Router, private userService: UserService, private productService: ProductService, private cartService: CartService) {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts().subscribe((response: any) => {
      const products: Product[] = Object.values(response.data).map((productData: any) => {
        return {
          id: productData.id,
          name: productData.name,
          image: productData.image,
          price: productData.price,
          size: productData.size
        };
      });
      this.productArray = products;
    });
  }

  onSettingsButton() {
    let user = this.userService.getUser();
    if (user.userRole === "ADMIN") {
      this.router.navigate(["/", "dashboard-admin"]);
    } else if (user.userRole === "USER") {
      this.router.navigate(["/", "dashboard-user"]);
    }
  }

  onChangePage(page: String) {
    this.router.navigate(["/", page]);
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
