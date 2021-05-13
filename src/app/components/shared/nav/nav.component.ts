import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  @Input() cartLength : number = 0;

  ngOnInit(): void {
  }

  updateCartLength(cartlength: number){
     this.cartLength = cartlength;
  }

}
