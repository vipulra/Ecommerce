import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem :any;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
  }

  deleteItem(productId: number) {
    this.cartService.deleteItemToCart(productId);
  }

}
