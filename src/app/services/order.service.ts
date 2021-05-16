import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { orderUrl } from '../config/api'
import { CartItem } from '../models/cart-item';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }
  save(value: any, cartItems: CartItem[]): Observable<any>{
    return this.http.post(orderUrl, {value,cartItems});
  }


}
