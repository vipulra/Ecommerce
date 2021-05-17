import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.css']
})
export class CheckoutPaymentComponent implements OnInit {

  cartItems : CartItem[] = [];
  cartTotal = 0;
  shipAdd!: FormGroup;
  message!: string;

  constructor(
    private msg: MessengerService,
    private cartService : CartService,
    private builder: FormBuilder,
    private orderService: OrderService,
    private router: Router,
    ) { }

    emptyCart = true;
    checkEmptyCart() {
      this.cartService.getCartItem().subscribe(data => {
        if (data.length) {
          this.emptyCart = false;
        }
      })
    }

    buildForm() {
      this.shipAdd = this.builder.group({
        firstName: ['', Validators.required],
        lastName: '',
        email: ['', [Validators.required, Validators.email]],
        address: ['', Validators.required],
        address2 : '',
        country: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required],
        sameAddress: false,
        saveInfo: false,
        payment: this.builder.group({
        paymentMethod: ['credit',Validators.required],
        ccname: ['',Validators.required],
        ccnumber: ['',Validators.required],
        ccexpiration: ['',Validators.required],
        cccvv : ['',Validators.required]
        })

      })
    }

    addAddress() {
      if (!this.shipAdd.invalid) { // Checks form input validity
        this.orderService.save(this.shipAdd.value,this.cartItems).subscribe({
          next: data => {
            this.router.navigate(['/success']);
            data.cartItems.forEach((element:any) => {
              this.cartService.deleteItemToCart(element.productId);
            });
            // this.cartService.emptyCart();
          },
          error: err => {
            this.message = "Something went wrong";
          }
        });
    } else {
        this.shipAdd.markAllAsTouched(); // Trigger validation across form
        console.log('Invalid login attempt - block submission');
    }
    }

  ngOnInit() {
    this.buildForm()
    this.handleSubscription();
    this.loadCartItems();
    this.checkEmptyCart();
  }

  removeItemLine(id: number){
    this.cartItems.forEach((item,index)=> {
      if(item.id === id) this.cartItems.splice(index,1);
    })
    this.calCartTotal();

  }

  deleteItem(productId:number,id:number) {
    this.cartService.deleteItemToCart(productId)
    this.removeItemLine(id);
  }

    handleSubscription() {
      this.msg.getMsg().subscribe(product => {
        this.loadCartItems();
      })
    }

    loadCartItems(){
      this.cartService.getMiniCartItem().subscribe((items : CartItem[]) => {
        this.cartItems = items;
        this.calCartTotal();
      })
    }

    calCartTotal() {
      this.cartTotal =0;
      this.cartItems.forEach(item =>{
        this.cartTotal += (item.qty * item.price);
      })
    }

}
