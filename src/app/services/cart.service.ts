import { Injectable } from '@angular/core';
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<Product> = [];

  constructor() { }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  removeFromCart(product: Product) {
    let indexProduct = this.cart.findIndex(item => item === product);
    if (indexProduct !== -1) {
      this.cart.splice(indexProduct, 1);
    }
  }
}
