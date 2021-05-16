import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component'
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductDetailsComponent } from './components/shopping-cart/product-list/product-details/product-details.component';
import { AuthGuard } from './auth/auth.guard';
import { CheckoutPaymentComponent } from './components/checkout/checkout-payment/checkout-payment.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent},
  { path: 'cart', component: CheckoutComponent,canActivate: [AuthGuard]},
  { path: 'checkout', component: CheckoutPaymentComponent,canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ShoppingCartComponent },
  { path: 'category/:cname', component: ShoppingCartComponent },
  { path: 'products/:id', component: ProductDetailsComponent},
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
