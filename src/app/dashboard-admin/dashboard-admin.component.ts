import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {MatSelectModule} from "@angular/material/select";
import {ProductService} from "../services/product.service";
import {Product} from "../models/Product";

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    NgIf,
    ReactiveFormsModule,
    MatSelectModule,
    NgForOf
  ],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.css'
})
export class DashboardAdminComponent {

  shoeName = new FormControl('', [Validators.required]);
  shoeImageLink = new FormControl('', [Validators.required]);
  shoePrice = new FormControl('', [Validators.required]);
  shoeSize = new FormControl('', [Validators.required]);
  productArray: Product[] = [];
  viewType = 'create';
  currentId = 0;

  constructor(private router: Router, private productService: ProductService) {
    this.fetchProducts();
  }

  onChangePage(page: String) {
    this.router.navigate(["/", page]);
  }

  getErrorShoeNameMessage() {
    if (this.shoeName.hasError('required')) {
      return 'You must enter a value';
    }

    return '';
  }

  getErrorShoeImageLinkMessage() {
    if (this.shoeImageLink.hasError('required')) {
      return 'You must enter a value';
    }

    return '';
  }

  getErrorShoePriceMessage() {
    if (this.shoePrice.hasError('required')) {
      return 'You must enter a value';
    }

    return '';
  }

  getErrorShoeSizeMessage() {
    if (this.shoeSize.hasError('required')) {
      return 'You must enter a value';
    }

    return '';
  }

  fetchProducts() {
    this.productService.getAllProducts().subscribe((response: any) => {
      const products: Product[] = Object.values(response.data).map((productData: any) => {
        return new Product(productData.id, productData.name, productData.image, productData.price, productData.size);
      });
      this.productArray = products;
    });
  }

  onCreate() {
    if (this.shoeName.valid && this.shoeImageLink.valid && this.shoeSize.valid && this.shoePrice.valid) {
      let shoeSize = parseInt(this.shoeSize.getRawValue()!);
      let shoePrice = parseInt(this.shoePrice.getRawValue()!);
      this.productService.createProduct(this.shoeName.getRawValue()!, this.shoeImageLink.getRawValue()!, shoePrice, shoeSize)
        .subscribe((response: any) => {
          console.log(response);
        });
    }
  }

  onUpdate() {
    if (this.shoeName.valid && this.shoeImageLink.valid && this.shoeSize.valid && this.shoePrice.valid) {
      let shoeSize = parseInt(this.shoeSize.getRawValue()!);
      let shoePrice = parseInt(this.shoePrice.getRawValue()!);
      this.productService.updateProduct(this.currentId, this.shoeName.getRawValue()!, this.shoeImageLink.getRawValue()!, shoePrice, shoeSize)
        .subscribe((response: any) => {
          console.log(response);
          this.viewType = 'create';
          this.shoeName = new FormControl('', [Validators.required]);
          this.shoeImageLink = new FormControl('', [Validators.required]);
          this.shoePrice = new FormControl('', [Validators.required]);
          this.shoeSize = new FormControl('', [Validators.required]);
        });
    }
  }

  onDeleteProduct(product: Product) {
    this.productService.deleteProduct(product.id).subscribe((response: any) => {
      console.log(response);
    });
  }

  onEditProduct(product: Product) {
    this.viewType = 'update';
    this.currentId = product.id;
    this.shoeName = new FormControl(product.name, [Validators.required]);
    this.shoeImageLink = new FormControl(product.image, [Validators.required]);
    this.shoePrice = new FormControl(`${product.price}`, [Validators.required]);
    this.shoeSize = new FormControl(`${product.size}`, [Validators.required]);
  }
}
