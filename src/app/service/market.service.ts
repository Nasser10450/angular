import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  private apiUrl = 'https://fakestoreapi.com/products';

  constructor( private http: HttpClient ) {}

  /* open api component */
  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  /* open thing a api */
  getProductById(id: number): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  /*||||||||||||||||||||||||||||||||||||||||||||||||||||*/

  private cartItems: any[] = [];

  addToCart(product: any) {
    this.cartItems.push(product);
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

}

