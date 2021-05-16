import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  sendFilteredProductByCatergory(productList: Product[]) {
    this.sub.next(productList);
  }

  getFilteredProductByCatergory() {
    return this.sub.asObservable();
  }

  sub = new Subject();
  subject = new Subject();

  constructor() { }

  sendMsg(product: Product){
    this.subject.next(product)
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
