import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private ID_COUNT = 11;

  private products: Product[] = [];

  constructor(private http: HttpClient) {
    for (let i = 1; i <= 10; i++) {
      this.products.push({id: i, name: `Product ${i}`});
    }
   }

  listAll(): Observable<Product[]> {
    return of(this.products);
  }

  save(product: Product): void { // TODO: mudar retorno para Observable
    if (product.id === 0) { // create
      product.id = this.ID_COUNT;
      this.products.push(product);
      this.ID_COUNT++;
    } else {
      // edit
    }
  }
}
