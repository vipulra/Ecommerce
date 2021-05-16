import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { cartUrl } from '../config/api';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient) { }

  getMiniCartItem(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result : any) => {
        let cartItems: CartItem[] = [];

        for (let item of result) {
          let productExist = false

      for( let i in cartItems) {
        if(cartItems[i].productId === item.product.id) {
          cartItems[i].qty++
          productExist = true
          break;
        }
      }

      if(!productExist) {
        cartItems.push( new CartItem(item.id, item.product));
      }
        }
        return cartItems;
      }
      )
    )
  }

  getCartItem(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result : any) => {
        let cartItems: CartItem[] = [];

        for (let item of result) {
          let productExist = false

      for( let i in cartItems) {
        if(cartItems[i].productId === item.product.id) {
          cartItems[i].qty++
          productExist = true
          break;
        }
      }

      if(!productExist) {
        cartItems.push( new CartItem(item.id, item.product));
      }
        }
        return cartItems;
      }
      )
    )
  }

  addProductToCart(product: Product): Observable<any>{
    return this.http.post(cartUrl,{ product});
  }

  deleteItemToCart(productId:number) {
    this.http.get<any[]>(cartUrl).subscribe(async items=>{
      for(let item of items){
        if(item.product.id === productId){
          await this.http.delete(cartUrl + item.id).toPromise();
        }
      }
    })
  }

  emptyCart(){
    this.getCartItem().subscribe((cartItem : CartItem[]) => {
      cartItem.forEach((item:CartItem)=> {
        this.http.delete(cartUrl+item.id);
      })
    })
  }
}
