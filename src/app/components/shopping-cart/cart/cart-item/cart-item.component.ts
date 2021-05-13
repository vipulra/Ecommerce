import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  closeResult = '';

  @Input() cartItem :any;
  @Output() deleteEvent = new EventEmitter<{productId: number, id : number}>();

  constructor(private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }
  ngOnInit(): void {
  }

  deleteItem(productId :number, id: number){
    this.deleteEvent.emit({productId, id});
  }

}
