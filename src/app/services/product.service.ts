import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public getAllProducts() {
    return this.httpClient.get(`http://localhost:8080/api/products/`);
  }

  public createProduct(shoeName: string, shoeImageLink: string, shoePrice: number, shoeSize: number) {
    let body = {
      "name": shoeName,
      "image": shoeImageLink,
      "price": shoePrice,
      "size": shoeSize
    }

    return this.httpClient.post(`http://localhost:8080/api/products/create`, body);
  }

  public updateProduct(id: number, shoeName: string, shoeImageLink: string, shoePrice: number, shoeSize: number) {
    let body = {
      "id": id,
      "name": shoeName,
      "image": shoeImageLink,
      "price": shoePrice,
      "size": shoeSize
    }

    return this.httpClient.post(`http://localhost:8080/api/products/update`, body);
  }

  public deleteProduct(id: number) {
    return this.httpClient.delete(`http://localhost:8080/api/products/${id}`);
  }
}
