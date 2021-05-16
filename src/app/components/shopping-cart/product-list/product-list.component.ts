import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
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
    private router: Router,
    private messengerService : MessengerService) {}

  ngOnInit(): void {
    this.getProducts()
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  getProducts() {
    const param = this.route.snapshot.paramMap.get('cname');
    if (param) {
      const cname = param;
      this.getProductByCategory(cname)

    }
    else {
      this.getAllproducts();
    }
  }

  sendProductToFilter() {
    this.messengerService.sendFilteredProductByCatergory(this.productList);
  }

  getProductByCategory(cname: any) {
    this.productService.getProducts()
    .pipe(finalize(() => this.messengerService.sendFilteredProductByCatergory(this.productList)))
    .subscribe(async (products)=> {
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

  sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.productList = this.productList.sort((low, high) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.productList = this.productList.sort((low, high) => high.price - low.price);
          break;
        }

      case "Name":
        {
          this.productList = this.productList.sort(function (low, high) {
            if (low.name < high.name) {
              return -1;
            }
            else if (low.name > high.name) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }

      default: {
        this.productList = this.productList.sort((low, high) => low.price - high.price);
        break;
      }

    }
    return this.productList;

  }
}
