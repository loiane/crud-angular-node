import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private location: Location,
              private service: ProductsService) {
    this.form = this.fb.group({
      name: [null, Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.form.valid) {
      // create
      const product: Product = this.form.value;
      product.id = 0;
      this.service.save(product);
      this.onCancel();
    } else {
      this.form.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.location.back();
  }

  isFieldRequired(fieldName: string): boolean {
   return this.form.get(fieldName)?.hasError('required') ?? false;
  }
}
