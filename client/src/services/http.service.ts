

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public serverName = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) { }

  getProductsByWholesaler(): Observable<any> {
    const token = this.authService.getToken();
    let headers=new HttpHeaders();
    headers= headers.set('Content-Type','application/json');
    headers = headers.set('Authorization',`Bearer ${token}`)
    return this.http.get(this.serverName + `/api/wholesalers/products`, { headers: headers });
  }

  getProductsByConsumers(): Observable<any> {
    const token = this.authService.getToken();
    let headers=new HttpHeaders();
    headers= headers.set('Content-Type','application/json');
    headers = headers.set('Authorization',`Bearer ${token}`)
    return this.http.get(`${this.serverName}/api/consumers/products`, { headers: headers });
  }

  getOrderByWholesalers(id: any): Observable<any> {
    const token = this.authService.getToken();
    let headers=new HttpHeaders();
    headers= headers.set('Content-Type','application/json');
    headers = headers.set('Authorization',`Bearer ${token}`)
    return this.http.get(`${this.serverName}/api/wholesalers/orders?userId=${id}`, { headers: headers });
  }

  getOrderConsumer(id: any): Observable<any> {
    const token = this.authService.getToken();
    let headers=new HttpHeaders();
    headers= headers.set('Content-Type','application/json');
    headers = headers.set('Authorization',`Bearer ${token}`)
    return this.http.get(`${this.serverName}/api/consumers/orders?userId=${id}`, { headers: headers });
  }

  getInventoryByWholesalers(id: any): Observable<any> {
    const token = this.authService.getToken();
    let headers=new HttpHeaders();
    headers= headers.set('Content-Type','application/json');
    headers = headers.set('Authorization',`Bearer ${token}`)
    return this.http.get(`${this.serverName}/api/wholesalers/inventories?wholesalerId=${id}`, { headers: headers });
  }

  getProductsByManufacturer(id: any): Observable<any> {
    const token = this.authService.getToken();
    let headers=new HttpHeaders();
    headers= headers.set('Content-Type','application/json');
    headers = headers.set('Authorization',`Bearer ${token}`)
    return this.http.get(`${this.serverName}/api/manufacturers/products?manufacturerId=${id}`, { headers: headers });
  }

  placeOrder(details: any, productId: any, userId: any): Observable<any> {
    const token = this.authService.getToken();
    let headers=new HttpHeaders();
    headers= headers.set('Content-Type','application/json');
    headers = headers.set('Authorization',`Bearer ${token}`)
    return this.http.post(`${this.serverName}/api/wholesalers/order?productId=${productId}&userId=${userId}`, details, { headers: headers });
  }

  consumerPlaceOrder(details: any, productId: any, userId: any): Observable<any> {
    const token = this.authService.getToken();
    let headers=new HttpHeaders();
    headers= headers.set('Content-Type','application/json');
    headers = headers.set('Authorization',`Bearer ${token}`)
    return this.http.post(`${this.serverName}/api/consumers/order?productId=${productId}&userId=${userId}`, details, { headers: headers });
  }

  updateOrderStatus(id: any, status: any): Observable<any> {
    const token = this.authService.getToken();
    let headers=new HttpHeaders();
    headers= headers.set('Content-Type','application/json');
    headers = headers.set('Authorization',`Bearer ${token}`)
    return this.http.put(`${this.serverName}/api/wholesalers/order/${id}?status=${status}`, {}, { headers: headers });
  }

  addConsumerFeedBack(id: any, userId: any, details: any): Observable<any> {
    const token = this.authService.getToken();
    let headers=new HttpHeaders();
    headers= headers.set('Content-Type','application/json');
    headers = headers.set('Authorization',`Bearer ${token}`)
    return this.http.post(`${this.serverName}/api/consumers/order/${id}/feedback?userId=${userId}`, details, { headers: headers });
  }

  createProduct(details: any): Observable<any> {
    const token = this.authService.getToken();
    let headers=new HttpHeaders();
    headers= headers.set('Content-Type','application/json');
    headers = headers.set('Authorization',`Bearer ${token}`)
    return this.http.post(`${this.serverName}/api/manufacturers/product`, details, { headers: headers});
  }

  updateProduct(details: any, id: any): Observable<any> {
    const token = this.authService.getToken();
    let headers=new HttpHeaders();
    headers= headers.set('Content-Type','application/json');
    headers = headers.set('Authorization',`Bearer ${token}`)
    return this.http.put(`${this.serverName}/api/manufacturers/product/${id}`, details, { headers: headers });
  }

  addInventory(details: any, productId: any): Observable<any> {
    const token = this.authService.getToken();
    let headers=new HttpHeaders();
    headers= headers.set('Content-Type','application/json');
    headers = headers.set('Authorization',`Bearer ${token}`)
    return this.http.post(`${this.serverName}/api/wholesalers/inventories?productId=${productId}`, details, { headers: headers });
  }

  updateInventory(stockQuantity: any, inventoryId: any): Observable<any> {
    const token = this.authService.getToken();
    let headers=new HttpHeaders();
    headers= headers.set('Content-Type','application/json');
    headers = headers.set('Authorization',`Bearer ${token}`)
    return this.http.put(`${this.serverName}/api/wholesalers/inventories/${inventoryId}?stockQuantity=${stockQuantity}`, {}, { headers: headers });
  }

  Login(details: any): Observable<any> {
    // const token = this.authService.getToken();
    let headers=new HttpHeaders();
    headers= headers.set('Content-Type','application/json');
    // headers = headers.set('Authorization',`Bearer ${token}`)
    return this.http.post(`${this.serverName}/api/user/login`, details, { headers: headers });
  }

  registerUser(details: any): Observable<any> {
    // const token = this.authService.getToken();
    let headers=new HttpHeaders();
    headers= headers.set('Content-Type','application/json');
    // headers = headers.set('Authorization',`Bearer ${token}`)
    return this.http.post(`${this.serverName}/api/user/register`, details, { headers: headers });
  }
}     





