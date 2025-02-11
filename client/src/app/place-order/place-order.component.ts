import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})


export class PlaceOrderComponent implements OnInit {
  itemForm: FormGroup;
  formModel: any = { status: null, quantity: null };
  showError: boolean = false;
  errorMessage: any;
  productList: any[] = [];
  assignModel: any = {};
  showMessage: any;
  responseMessage: any;
  productId: any;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private authService: AuthService
  ) {
    this.initializeFormModel();
    this.itemForm = this.fb.group({
      quantity: [this.formModel.quantity, Validators.required],
      status: [this.formModel.status, Validators.required]
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  initializeFormModel(): void {
    this.formModel.quantity = this.formModel.quantity || 1;
    this.formModel.status = this.formModel.status || 'pending';
  }

  getProducts(): void {
    this.httpService.getProductsByWholesaler().subscribe(
      (data: any) => {
        this.productList = data;
      },
      (error: any) => {
        this.showError = true;
        this.errorMessage = 'Failed to fetch product data.';
      }
    );
  }

  onSubmit(): void {
    if (this.itemForm.valid && this.productId) {
      const userId = this.authService.getToken();
      this.httpService.placeOrder(this.itemForm.value, this.productId, userId).subscribe(
        (response: any) => {
          this.showMessage = true;
          this.responseMessage = 'Order placed successfully.';
          this.itemForm.reset();
          this.productId = null;
        },
        (error: any) => {
          this.showError = true;
          this.errorMessage = 'Failed to place order.';
        }
      );
    } else {
      this.showError = true;
      this.errorMessage = 'Please fill out all required fields and select a product.';
      this.itemForm.markAllAsTouched();
    }
  }

  addToOrder(val: any): void {
    this.productId = val.id;
  }
}
