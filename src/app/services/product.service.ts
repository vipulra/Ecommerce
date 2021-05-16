import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { productUrl } from '../config/api';
import { map } from 'rxjs/operators';

const apiUrl = "https://609265ea85ff510017212a0d.mockapi.io/product";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private product : Product[] = [];

  constructor(private http: HttpClient ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(productUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(productUrl+id);
  }

  getAllCategory() {
    return this.http.get<Product[]>(productUrl).pipe(
      map((result:any) => {
        const category = [...new Set(result.map((product:any) => product.category))];
        return category;
      })
    )
  }

  getAllBrand() {
    return this.http.get<Product[]>(productUrl).pipe(
      map((result:any) => {
        const brand = [...new Set(result.map((product:any) => product.brand))];
        return brand;
      })
    )
  }

  getAllLabel() {
    return this.http.get<Product[]>(productUrl).pipe(
      map((result:any) => {
        const label = [...new Set(result.map((product:any) => product.tag))];
        return label;
      })
    )
  }
}
