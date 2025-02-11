import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-consumer-get-orders',
  templateUrl: './consumer-get-orders.component.html',
  styleUrls: ['./consumer-get-orders.component.scss'],
  providers: [DatePipe]
})
export class ConsumerGetOrdersComponent implements OnInit {
  itemForm!:FormGroup;


  formModel: any = {};
  showError: boolean = false;
  errorMessage: any;
  orderList: any[] = [];
  assignModel: any = {};
  showMessage: any;
  responseMessage: any;
  updateId: any;

  constructor(
    private httpService: HttpService,
    private authService: AuthService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    const userId = this.authService.getToken();
    this.httpService.getOrderConsumer(userId).subscribe(
      (data: any) => {
        this.orderList = data;
      },
      (error: any) => {
        this.showError = true;
        this.errorMessage = 'Failed to fetch order data.';
      }
    );
  }

  addFeedback(value: any): void {
    this.updateId = value.id;
    this.formModel = { content: '', timestamp: '' };
  }

  onSubmit(): void {
    if (this.formModel.content) {
      const currentTimestamp = this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss');
      this.formModel.timestamp = currentTimestamp;

      const userId = this.authService.getToken();
      this.httpService.addConsumerFeedBack(this.updateId, userId, this.formModel).subscribe(
        (response: any) => {
          this.showMessage = true;
          this.responseMessage = 'Feedback submitted successfully.';
          this.getOrders();
        },
        (error: any) => {
          this.showError = true;
          this.errorMessage = 'Failed to submit feedback.';
        }
      );
    } else {
      this.showError = true;
      this.errorMessage = 'Feedback content cannot be empty.';
    }
  }
}




