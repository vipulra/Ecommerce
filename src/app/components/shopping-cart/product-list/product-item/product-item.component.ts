import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {MessengerService} from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!: Product;

  constructor(
    private msg : MessengerService,
    private cartService : CartService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(()=> {
      this.msg.sendMsg(this.productItem);
    })

  }

  viewDetails(id:number){
    this.router.navigate(['/products/'+id]);
  }

}
