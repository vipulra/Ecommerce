import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [

  ];

  cartTotal = 0;

  constructor(private msg: MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product) => {
      // this.cartItems.push({
      //   productName: "111",
      //   qty: 1,
      //   price: product.price

      // })

      // this.cartTotal =0;
      // this.cartItems.forEach(item => {
      //   this.cartTotal += (item.price * item.qty)
      // })
    })



  }

}
