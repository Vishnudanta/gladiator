import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-consumer-place-order',
  templateUrl: './consumer-place-order.component.html',
  styleUrls: ['./consumer-place-order.component.scss']
})
export class ConsumerPlaceOrderComponent implements OnInit{
  itemForm!:FormGroup; 
  // itemForm!: FormGroup;
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
      productId: [this.formModel.productId, Validators.required],
      quantity: [this.formModel.quantity, Validators.required],
      status: [this.formModel.status, Validators.required]
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  initializeFormModel(): void {
    this.formModel.productId = this.formModel.productId || '';
    this.formModel.quantity = this.formModel.quantity || 1;
    this.formModel.status = this.formModel.status || 'pending';
  }

  getProducts(): void {
    this.httpService.getProductsByConsumers().subscribe(
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
    if (this.itemForm.valid) {
      const userId = this.authService.getToken();
      this.httpService.consumerPlaceOrder(this.itemForm.value, this.productId, userId).subscribe(
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
      this.errorMessage = 'Please fill out all required fields.';
    }
  }

  addToOrder(val: any): void {
    this.productId = val.id;
  }
}



