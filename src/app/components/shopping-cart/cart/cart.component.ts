import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems : CartItem[] = [];

  cartTotal = 0;

  constructor(
    private msg: MessengerService,
    private cartService : CartService
    ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }


    handleSubscription() {
      this.msg.getMsg().subscribe(product => {
        this.loadCartItems();
      })
    }

    loadCartItems(){
      this.cartService.getCartItem().subscribe((items : CartItem[]) => {
        this.cartItems = items;
        this.calCartTotal();
      })
    }

    calCartTotal() {
      this.cartTotal =0;
      this.cartItems.forEach(item =>{
        this.cartTotal += (item.qty * item.price);
      })
    }





}
