import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(private productService: ProductService, private msg : MessengerService) { }

  brands: any;
  tags:any;
  getAllBrand() {
    this.msg.getFilteredProductByCatergory().subscribe((data:any)=> {
      this.brands = [...new Set(data.map((product:any) => product.brand))];
    })
  }

  getAllTags() {
    this.msg.getFilteredProductByCatergory().subscribe((data:any)=> {
      this.tags = [...new Set(data.map((product:any) => product.tag))];
    })
  }

  ngOnInit(): void {
    this.getAllBrand();
    this.getAllTags();
  }

}
