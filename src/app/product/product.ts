import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
private route = inject(ActivatedRoute);
  product = this.route.snapshot.data['product']; // resolved data
  display = false;
  showProduct() {
    this.display = true;
    console.log('Product Data:', this.product);
  }}
