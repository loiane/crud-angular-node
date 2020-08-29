import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.service.listAll().subscribe(results => {
      console.log(results);
      this.products = results;
    });
  }

  onAdd(): void {
    console.log('Add');
  }

  onEdit(product: Product): void {
    console.log(product);
  }

  onRemove(product: Product): void {
    console.log(product);
  }

}
