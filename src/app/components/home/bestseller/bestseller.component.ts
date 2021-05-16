import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.css']
})
export class BestsellerComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products : Product[] = [];
  ngOnInit(): void {
    this.getBestsellerProducts();
  }

  getBestsellerProducts() {
    this.productService.getProducts().subscribe( (product:Product[]) =>{
      this.products = product;
      console.log(product);
    })
  }

}
