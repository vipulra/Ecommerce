import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { baseUrl } from 'src/app/config/api'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public authService : AuthService,
    public productService : ProductService) { }

  @Input() cartLength : number = 0;

  category: any;

  ngOnInit(): void {
    this.productService.getAllCategory().subscribe(data => {
      this.category = data;
    })
  }

  updateCartLength(cartlength: number){
     this.cartLength = cartlength;
  }


}
