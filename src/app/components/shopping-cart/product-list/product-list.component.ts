import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  p: number = 1;
  productList:Product[] = [];

  constructor(private productService : ProductService,
    private route : ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.getProducts()
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  getProducts() {
    const param = this.route.snapshot.paramMap.get('cname');
    if (param) {
      const cname = param;
      this.getProductByCategory(cname);
    }
    else {
      this.getAllproducts();
    }
  }

  getProductByCategory(cname: any) {
    this.productService.getProducts().subscribe(async (products)=> {
      await Promise.all(products.map(async (product) => {
        if(product.category === cname ){
          this.productList.push(product);
        }
      }))
    });
  }

  getAllproducts(){
    this.productService.getProducts().subscribe((products)=> {
      this.productList = products;
    });
  }
}
