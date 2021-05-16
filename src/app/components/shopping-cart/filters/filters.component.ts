import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(private productService: ProductService) { }

  brands: any;
  tags:any;
  getAllBrand() {
    this.productService.getAllBrand().subscribe(data=> {
      this.brands = data;
    })
  }

  getAllTags() {
    this.productService.getAllLabel().subscribe(data=> {
      this.tags = data;
    })
  }

  ngOnInit(): void {
    this.getAllBrand();
    this.getAllTags();
  }

}
