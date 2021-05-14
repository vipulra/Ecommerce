import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { productUrl } from '../config/api';

const apiUrl = "https://609265ea85ff510017212a0d.mockapi.io/product";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private product : Product[] = [
  //   new Product(1, "IND-001", "product 1", "this is product 1 description", "Brand1", "Category1", 100, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU"),
  //   new Product(2, "IND-002", "product 2", "this is product 2 description", "Brand2", "Category2", 200, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU"),
  //   new Product(3, "IND-003", "product 3", "this is product 3 description", "Brand3", "Category3", 300, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU"),
  //   new Product(4, "IND-004", "product 4", "this is product 4 description", "Brand4", "Category4", 400, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU"),
  //   new Product(5, "IND-005", "product 5", "this is product 5 description", "Brand5", "Category5", 500, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU"),
  //   new Product(6, "IND-006", "product 6", "this is product 6 description", "Brand6", "Category6", 600, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU")
  // ];

  constructor(private http: HttpClient ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(productUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(productUrl+id);
  }
}
