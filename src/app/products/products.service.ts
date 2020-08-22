import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[];

  constructor(private http: HttpClient) {
    this.products = [
      { id: 1, name: 'Produto 1' },
      { id: 2, name: 'Produto 2' },
      { id: 3, name: 'Produto 3' },
      { id: 4, name: 'Produto 4' },
      { id: 5, name: 'Produto 5' },
    ];
   }

  listAll(): Observable<Product[]> {
    return of(this.products);
  }
}
