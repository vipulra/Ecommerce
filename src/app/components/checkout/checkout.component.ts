import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

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

  removeItemLine(id: number){
    this.cartItems.forEach((item,index)=> {
      if(item.id === id) this.cartItems.splice(index,1);
    })
    this.calCartTotal();
  }

  deleteItem(productId:number,id:number) {
    this.cartService.deleteItemToCart(productId)
    this.removeItemLine(id);
  }

    handleSubscription() {
      this.msg.getMsg().subscribe(product => {
        this.loadCartItems();
      })
    }

    loadCartItems(){
      this.cartService.getMiniCartItem().subscribe((items : CartItem[]) => {
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
