import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: ProductsService) { }

  ngOnInit(): void {
    this.service.listAll().subscribe(results => {
      console.log(results);
      this.products = results;
    });
  }

  onAdd(): void {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  onEdit(product: Product): void {
    console.log(product);
  }

  onRemove(product: Product): void {
    console.log(product);
  }

}
