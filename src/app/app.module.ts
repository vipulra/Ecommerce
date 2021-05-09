import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { HttpClientModule } from '@angular/common/http'
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
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
