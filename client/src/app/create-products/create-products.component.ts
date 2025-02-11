import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss']
})

export class CreateProductsComponent implements OnInit {
  itemForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0.01)]],
      stockQuantity: ['', [Validators.required, Validators.min(1)]]
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



