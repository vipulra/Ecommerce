import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductDetailsComponent } from './components/shopping-cart/product-list/product-details/product-details.component'
import { AuthGuard } from './auth/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CheckoutPaymentComponent } from './components/checkout/checkout-payment/checkout-payment.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { BestsellerComponent } from './components/home/bestseller/bestseller.component';
import { SuccessComponent } from './components/checkout/success/success.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    CartComponent,
    ProductListComponent,
    ProductItemComponent,
    CartItemComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    ProductDetailsComponent,
    CheckoutPaymentComponent,
    CarouselComponent,
    HomeComponent,
    BestsellerComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [AuthGuard,
  // {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass : TokenInterceptorService,
  //   multi : true
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
