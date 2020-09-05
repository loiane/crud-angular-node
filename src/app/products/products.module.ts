import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../app-material/app-material.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [ProductsComponent, ProductFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    AppMaterialModule
  ]
})
export class ProductsModule { }
