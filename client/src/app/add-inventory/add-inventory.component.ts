import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.scss']
})
// export class AddInventoryComponent implements OnInit {
//   itemForm: FormGroup;
//   formModel: any = { status: null, wholesalerId: null, stockQuantity: null, productId: null };
//   showError: boolean = false;
//   errorMessage: any;
//   productList: any[] = [];
//   assignModel: any = {};
//   showMessage!: any;
//   responseMessage!: any;
//   eventList: any[] = [];
//   orderList: any[] = [];
//   updateId: any;

//   constructor(
//     private fb: FormBuilder,
//     private httpService: HttpService,
//     private authService: AuthService
//   ) {
//     this.initializeFormModel();
//     this.itemForm = this.fb.group({
//       productId: [this.formModel.productId, Validators.required],
//       stockQuantity: [this.formModel.stockQuantity, Validators.required],
//       wholesalerId: [this.formModel.wholesalerId, Validators.required]
//     });
//   }

//   ngOnInit(): void {
//     this.getProducts();
//     this.getInventory();
//   }

//   initializeFormModel(): void {
//     this.formModel.wholesalerId = this.formModel.wholesalerId || '';
//     this.formModel.stockQuantity = this.formModel.stockQuantity || 0;
//     this.formModel.productId = this.formModel.productId || '';
//   }

//   onSubmit(): void {
//     if (this.itemForm.valid) {
//       if (this.updateId) {
//         this.updateInventory();
//       } else {
//         this.addInventory();
//       }
//     } else {
//       this.showError = true;
//       this.errorMessage = 'Please fill out all required fields.';
//     }
//   }

//   getInventory(): void {
//     const userId = this.authService.getToken();
//     this.httpService.getInventoryByWholesalers(userId).subscribe(
//       (data: any) => {
//         this.orderList = data;
//       },
//       (error: any) => {
//         this.showError = true;
//         this.errorMessage = 'Failed to fetch inventory data.';
//       }
//     );
//   }

//   getProducts(): void {
//     this.httpService.getProductsByWholesaler().subscribe(
//       (data: any) => {
//         this.productList = data;
//       },
//       (error: any) => {
//         this.showError = true;
//         this.errorMessage = 'Failed to fetch product data.';
//       }
//     );
//   }

//   editInventory(value: any): void {
//     this.updateId = value.id;
//     this.itemForm.patchValue({
//       productId: value.productId,
//       stockQuantity: value.stockQuantity,
//       wholesalerId: value.wholesalerId
//     });
//   }

//   addInventory(): void {
//     this.httpService.addInventory(this.itemForm.value, this.itemForm.value.productId).subscribe(
//       (response) => {
//         this.showMessage = true;
//         this.responseMessage = 'Inventory added successfully.';
//         this.getInventory();
//       },
//       (error) => {
//         this.showError = true;
//         this.errorMessage = 'Failed to add inventory.';
//       }
//     );
//   }

//   updateInventory(): void {
//     this.httpService.updateInventory(this.itemForm.value.stockQuantity, this.updateId).subscribe(
//       (response: any) => {
//         this.showMessage = true;
//         this.responseMessage = 'Inventory updated successfully.';
//       },
//       (error: any) => {
//         this.showError = true;
//         this.errorMessage = 'Failed to update inventory.';
//       }
//     );
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpService } from '../services/http.service';
// import { AuthService } from '../services/auth.service';

// @Component({
//   selector: 'app-add-inventory',
//   templateUrl: './add-inventory.component.html',
//   styleUrls: ['./add-inventory.component.css']
// })
export class AddInventoryComponent implements OnInit {
  itemForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      stockQuantity: ['', [Validators.required, Validators.min(1)]],
      productId: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.itemForm.valid) {
      // Logic for form submission
      console.log('Form Submitted', this.itemForm.value);
      // Implement the actual submission logic using httpService and authService
    } else {
      console.log('Form is not valid');
    }
  }
}
