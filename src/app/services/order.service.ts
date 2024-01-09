import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  placeOrder(user: User, products: Array<Product>) {
    let body = {
      "user": user,
      "products": products
    }

    return this.httpClient.post(`http://localhost:8080/api/orders/`, body);
  }
}
