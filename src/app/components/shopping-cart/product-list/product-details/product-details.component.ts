import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;
  errorMessage = "";

  constructor(
    private msg : MessengerService,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService ) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.onBack()
    });
  }

  handleAddToCart(){
    this.cartService.addProductToCart(this.product).subscribe(()=> {
      this.msg.sendMsg(this.product);
    })
  }

  buyNow() {
    this.handleAddToCart();
    this.router.navigate(['/checkout']);

  }


  onBack(): void {
    this.router.navigate(['/']);
  }

}
